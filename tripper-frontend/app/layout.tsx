import "./globals.css"; // Tailwind base styles
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}