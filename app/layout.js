import { Oswald } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata = {
  title: 'radek_dev',
  description:
    'Creative Software Developer specializing in designing/building exceptional digital experience for mobile and web.',
};

export default function RootLayout(props) {
  return (
    <html lang='en'>
      <body className={oswald.className}>
        {props.children}
        {props.modal}
        <Toaster position='top-center' />
      </body>
    </html>
  );
}
