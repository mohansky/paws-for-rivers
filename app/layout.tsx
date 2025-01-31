import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/components/layout/menu";
import Footer from "@/components/layout/footer";
// import { ThemeProvider } from "@/components/theme-provider"
// import { Nunito, Nunito_Sans } from "next/font/google";
// import { Geist, Geist_Mono, Nunito, Nunito_Sans } from "next/font/google";
// import { GridSmallBackgroundDemo } from "@/components/ui/background";

// Nunito & Nunito Sans

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const nunito = Nunito({
//   variable: "--font-nunito",
//   subsets: ["latin"],
// });

// const nunitoSans = Nunito_Sans({
//   variable: "--font-nunito-sans",
//   subsets: ["latin"],
// });

const nunito = localFont({
  src: "./fonts/nunito-v26-latin-regular.woff2",
  display: "swap",
  weight: "100 300 400 500 700 900",
  variable: "--font-nunito",
});

const nunitoSans = localFont({
  src: "./fonts/nunito-sans-v15-latin-regular.woff2",
  display: "swap",
  weight: "100 300 400 500 700 900",
  variable: "--font-nunitoSans",
});

export const metadata: Metadata = {
  title: "Paws for Rivers",
  description:
    "We aim to provide wholesome treats and supplements to take care of your pets’ nutritional requirements, with the additional benefits of addressing joint and skin health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${nunitoSans.variable} antialiased overflow-x-hidden`}
    >
      <body>
      {/* <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          > */}
        <Menu />
        {children}
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
