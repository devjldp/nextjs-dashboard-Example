// Import global css styles
import '@/app/ui/global.css'
// Importando fonts
import { montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}
      <footer>
        Esta pagina ha sido hecha con ❤ por <strong>Jose Luis Diaz Pulgar</strong>
      </footer>
      </body>
    </html>
  );
}
