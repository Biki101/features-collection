import "./globals.css";
import type { Metadata } from "next";
import { Edu_SA_Beginner } from "next/font/google";

const inter = Edu_SA_Beginner({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feature Collection",
  description: "Features Collection by Biki Kumar Thakur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + " w-[100vw] h-[100vh] bg-black text-white"}
      >
        {children}
      </body>
    </html>
  );
}
