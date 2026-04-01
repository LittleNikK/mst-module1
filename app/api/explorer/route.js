const RPC_URL = 'https://mariorpc.mstblockchain.com';
const MAX_ROWS = 4;

function hexToBigInt(hexValue) {
  if (!hexValue || typeof hexValue !== 'string') return 0n;
  try {
    return BigInt(hexValue);
  } catch {
    return 0n;
  }
}

function formatAgoFromHexTimestamp(hexTimestamp) {
  const timestamp = Number(hexToBigInt(hexTimestamp));

  if (!Number.isFinite(timestamp) || timestamp <= 0) {
    return 'just now';
  }

  const now = Math.floor(Date.now() / 1000);
  const diff = Math.max(0, now - timestamp);

  if (diff < 1) return 'just now';
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;

  return `${Math.floor(diff / 3600)}h ago`;
}

function formatMstValueFromWei(hexWei) {
  const wei = hexToBigInt(hexWei);
  const base = 10n ** 18n;
  const whole = wei / base;
  const fraction = (wei % base) / 10n ** 16n; // 2 decimals

  return `${whole.toString()}.${fraction.toString().padStart(2, '0')} MST`;
}

function truncateHash(hash) {
  if (!hash || typeof hash !== 'string') return '0x...';
  if (hash.length < 12) return hash;
  return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
}

async function rpcCall(method, params = []) {
  const response = await fetch(RPC_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: Date.now(), method, params }),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`RPC error: ${response.status}`);
  }

  const payload = await response.json();

  if (payload.error) {
    throw new Error(payload.error.message || 'Unknown RPC error');
  }

  return payload.result;
}

export async function GET() {
  try {
    const latestHex = await rpcCall('eth_blockNumber');
    let currentBlock = hexToBigInt(latestHex);

    const blocks = [];
    const transactions = [];

    let scanned = 0;

    while ((blocks.length < MAX_ROWS || transactions.length < MAX_ROWS) && scanned < 40 && currentBlock >= 0n) {
      const blockHex = `0x${currentBlock.toString(16)}`;
      const block = await rpcCall('eth_getBlockByNumber', [blockHex, true]);

      if (block) {
        if (blocks.length < MAX_ROWS) {
          blocks.push({
            uid: `b-${Number(hexToBigInt(block.number))}`,
            id: Number(hexToBigInt(block.number)),
            time: formatAgoFromHexTimestamp(block.timestamp)
          });
        }

        if (Array.isArray(block.transactions) && transactions.length < MAX_ROWS) {
          for (const tx of block.transactions) {
            if (transactions.length >= MAX_ROWS) break;
            transactions.push({
              uid: tx.hash,
              address: truncateHash(tx.hash),
              value: formatMstValueFromWei(tx.value)
            });
          }
        }
      }

      currentBlock -= 1n;
      scanned += 1;
    }

    return Response.json({ blocks, transactions }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    return Response.json(
      {
        blocks: [],
        transactions: [],
        error: error instanceof Error ? error.message : 'Failed to fetch explorer data'
      },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
