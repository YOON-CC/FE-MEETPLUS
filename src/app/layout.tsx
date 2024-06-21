import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/organism/layout/NavBar";
import AuthSession from "@/AuthSession";
import RQProvider from "./RQProvider";

export const metadata: Metadata = {
  //메타랑 오지
  manifest: "/manifest.json",
  title: "Create Next App",
  description: "Generated by create next app",
  themeColor: "#000000",
};
const noto = Noto_Sans_KR({
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <AuthSession>
          <RQProvider>{children}</RQProvider>
        </AuthSession>
      </body>
    </html>
  );
}
