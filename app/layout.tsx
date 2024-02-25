import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";
import { Inter, Space_Grotesk } from "next/fonts/google ";
import type { Metadata } from "next";
import '.globals.css'

const inter = Inter({
  subsets: ["latin"],
  weights:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable:'--font-inter'
})

const spaceGrotest = Space_Grotesk({
  subsets: ["latin"],
  weights:["300", "400", "500", "600", "700"],
  variable:'--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title:"Dev Overflow",
  description: "Dev Overflow is a question and answer site for professional and enthusiast programmers. It's 100% free, no registration required.",
  icons:{
    icon:'/assests/images/site-logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    appearance={{elements:{
      formButtonPrimary:'primary-gradient',
      footerActionLink:'primary-text-gradient hover:primary-text-gradient',
    }}}
    >
      <html lang="en">
        <h1 className="h1-bold">
          this is a pretty looking text
        </h1>
        <body className={`${inter.variable} ${spaceGrotest.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
