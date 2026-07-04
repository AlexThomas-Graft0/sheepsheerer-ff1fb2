import './globals.css';
import { Inter, DM_Serif_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: ['400'], variable: '--font-dm-serif' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="bg-[#F3E9D8] text-[#111827] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}