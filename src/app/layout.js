"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Haptic Studios",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
