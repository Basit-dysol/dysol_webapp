import { Geist, Geist_Mono, Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { Container } from '@/components/Container';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import Footer from '@/components/Footer/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Dysol',
  description: 'Engineering and Design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1a1a1a]`}
        suppressHydrationWarning>
        <Container>
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
