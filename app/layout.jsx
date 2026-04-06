import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata = {
  title: 'MST Blockchain',
  description: 'Premium Web3 institutional landing experience'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
