import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";
import PageTransition from "@/components/common/PageTransition";

const inter = localFont({
  src: "../fonts/Inter-Regular.ttf",
  variable: "--font-inter",
});

const poppins = localFont({
  src: "../fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
});

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Regular.ttf",
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "M3 Global Services Pvt Ltd",
  description: "Global Vision. Local Impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}
      >
        <PageTransitionProvider>
          <PageTransition />
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}