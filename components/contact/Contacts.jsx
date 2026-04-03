import React from 'react'

const Contacts = () => {
  return (
   <div class="bg-gradient-to-br from-white via-red-50 to-pink-100 text-gray-800">

{/* <!-- HEADER / LOGO  */}

{/* <!-- HERO  */}
<section class="text-center px-6 py-14">
  <h1 class="text-5xl font-bold tracking-tight">Contact Information</h1>

  <p class="mt-5 max-w-2xl mx-auto text-gray-600 leading-relaxed">
    Have questions or need assistance? We're here to help! Reach out to our
    dedicated support team for personalized solutions. Your feedback matters,
    and we’re just a message away—contact us today!
  </p>
</section>

{/* <!-- CONTACT + ADDRESS --> */}
<section class="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">

  {/* <!-- Contact --> */}
  <div class="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-red-100">
    <h2 class="text-xl font-semibold text-red-600 mb-5">Contact Us</h2>

    <div class="bg-white p-4 rounded-xl shadow flex items-center gap-4 mb-4">
      <div class="bg-red-100 p-3 rounded-full text-red-600">:e-mail:</div>
      <p class="font-medium">support@mstblockchain.com</p>
    </div>

    <div class="bg-white p-4 rounded-xl shadow flex items-center gap-4">
      <div class="bg-red-100 p-3 rounded-full text-red-600">:telephone_receiver:</div>
      <p class="font-medium">+91 89832 74544</p>
    </div>
  </div>

  {/* <!-- Address  */}
  <div class="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-red-100">
    <h2 class="text-xl font-semibold text-red-600 mb-5">Find Us</h2>

    <p class="font-semibold text-lg">
      M/s. Masterstroke Technosoft Private Limited.
    </p>

    <p class="mt-4 text-gray-600 leading-relaxed">
      Kohinoor World Tower, unit no. 403, Tower 3, 4th floor old pune - mumbai highway,
      opposite ranka jewellers, pimpri, pune, India pin: 411018
    </p>
  </div>

</section>

{/* <!-- FAQ  */}
<section class="max-w-4xl mx-auto px-6 py-16">
  <h2 class="text-3xl font-bold text-center mb-10">
    Got Questions? We’ve Got <span class="text-red-600">Answers</span>.
  </h2>

  <div class="space-y-5">

    <details class="bg-white p-5 rounded-xl shadow cursor-pointer">
      <summary class="font-semibold text-lg">What is MST Blockchain?</summary>
      <p class="text-gray-600 mt-3">
        MST Blockchain is India’s 1st Layer-1 blockchain, a secure and decentralized platform designed to facilitate fast, transparent, and reliable digital transactions, making blockchain technology accessible for individuals and businesses.
      </p>
    </details>

    <details class="bg-white p-5 rounded-xl shadow cursor-pointer">
      <summary class="font-semibold text-lg">Is MST Blockchain secure?</summary>
      <p class="text-gray-600 mt-3">
        Yes, MST Blockchain uses advanced cryptographic security and decentralized architecture to ensure safety and transparency.
      </p>
    </details>

    <details class="bg-white p-5 rounded-xl shadow cursor-pointer">
      <summary class="font-semibold text-lg">How do I create a wallet?</summary>
      <p class="text-gray-600 mt-3">
        You can create a wallet using MST-supported wallet apps or browser extensions like MetaMask and connect to MST network.
      </p>
    </details>

  </div>
</section>





</div>
  )
}

export default Contacts