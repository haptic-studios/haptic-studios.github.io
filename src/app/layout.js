// Font is clobbering <i> tags. Disabling for now. 
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ 
//   subsets: ["latin"],
//   adjustFontFallback: false
// });

export const metadata = {
  title: "Haptic Studios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
