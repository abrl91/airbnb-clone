import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar/Navbar';
import RegisterModal from '@/components/modals/RegisterModal';
import ToasterProvider from '@/providers/toaster.provider';
import LoginModal from '@/components/modals/LoginModal';
import NextAuthProvider from './provider';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <NextAuthProvider>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
