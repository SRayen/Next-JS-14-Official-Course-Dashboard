import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | SRayen Dashboard',
    default: 'SRayen Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Tailwind antialiased class which smooths out the font. It's not necessary to use this class, but it adds a nice touch. */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
