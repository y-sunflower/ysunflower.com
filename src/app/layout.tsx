import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "yellow sunflower",
  description:
    "Open source tools for data science, data visualization and storytelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-H74DH7K4E4" />
    </html>
  );
}
