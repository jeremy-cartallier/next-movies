import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { fetchGenreName } from "@/lib/api";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Movies App",
  description: "A simple app in Nextjs to search movies",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const data = await fetchGenreName();

  const genres = data.genres;

  const categories = [
    {
      href: '/now_playing/1',
      name: 'En ce moment'
    },
    {
      href: '/popular/1',
      name: 'Les plus populaires'
    },
    {
      href: '/top_rated/1',
      name: 'Les mieux notés'
    },
    {
      href: '/upcoming/1',
      name: 'À venir'
    },
  ];

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <div className="flex bg-foreground">
          <Sidebar categories={categories} genres={genres}></Sidebar>
          {children}
        </div>
      </body>
    </html>
  );
}
