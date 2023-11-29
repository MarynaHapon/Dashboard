import { clsx } from 'clsx';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyCX = `${inter.className} antialiased`;

  return (
    <html lang="en">
      <body className={bodyCX}>
      {children}
      </body>
    </html>
  );
}
