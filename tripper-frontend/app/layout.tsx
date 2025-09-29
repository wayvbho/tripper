import "./globals.css"; // Tailwind base styles
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blue-100 min-h-screen">
        <Navbar />
        <Sidebar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}