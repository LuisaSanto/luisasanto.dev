import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luisa Santo",
  description: "Luisa Santo is a software developer.",
};

export default function RootLayout({ children }) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html lang="en">
      {isProduction && (
        <>
          <Script
            strategy="lazyOnload"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-P80RR69XNM"
          ></Script>
          <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || []; 
            function gtag() {dataLayer.push(arguments);}
            gtag('js', new Date()); 
            gtag('config', 'G-P80RR69XNM');
            `}
          </Script>
        </>
      )}
      <SmoothScroll />
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
