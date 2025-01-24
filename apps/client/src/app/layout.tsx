import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";
import { isDarkMode } from "./utils/theme";

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["hebrew"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "TK",
  description: "Trainer Kit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const darkModeEnabled = await isDarkMode();

  return (
    <html lang="he" dir="rtl" className={darkModeEnabled ? "dark" : ""}>
      <body
        className={`${varelaRound.className} antialiased grid grid-rows-[auto_1fr_auto] bg-[var(--background)] text-[var(--foreground)] dark:bg-[var(--background-dark)] dark:text-[var(--foreground-dark)]`}
      >
        {children}
      </body>
    </html>
  );
}
