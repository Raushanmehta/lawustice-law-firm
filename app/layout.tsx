import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Lawustice Law Firm",
  description: "Lawustice is a law firm that provides legal services to individuals and businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body className={`${roboto.variable} font-roboto`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
