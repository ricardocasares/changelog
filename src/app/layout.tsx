import "./globals.css";
import cfg from "@/config";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Logo } from "@/lib/icons";
import Theme from "@/ui/theme";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: cfg.TITLE,
  description: cfg.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head></head>
      <body className={inter.className}>
        <Providers>
          <div className="px-4 sm:px-6 container mx-auto flex flex-col h-full min-h-full max-w-screen-lg">
            <header className="my-4 sm:my-10">
              <h1 className="text-3xl font-semibold">
                <Link href="/">{cfg.TITLE}</Link>
              </h1>
              <div className="flex items-center">
                <h2 className="text-xl text-neutral-content grow">
                  {cfg.DESCRIPTION}
                </h2>

                <Theme />
              </div>
            </header>
            <main className="grow">{children}</main>
            <footer className="py-10 flex items-center gap-1 text-sm text-neutral-content">
              Built with{" "}
              <Link href="/" className="flex gap-1 font-semibold items-center">
                <Logo /> forkoff
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
