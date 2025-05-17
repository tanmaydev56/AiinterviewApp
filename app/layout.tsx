import type { Metadata } from "next";
import { Mona_Sans  } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monasans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "recApp",
  description: "AI prowered app for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monasans.className} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
