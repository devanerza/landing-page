import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Portfolio | Creative Digital Solutions",
  description: "Independent Designer & Developer focusing on high-end web solutions for forward-thinking brands and startups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${manrope.variable} antialiased font-display overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
