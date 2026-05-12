import type { Metadata } from "next";
import type { ReactNode } from "react";

import "../globals.css";
import SiteRootLayout from "../components/SiteRootLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avisconso.fr"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function EnglishRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <SiteRootLayout lang="en-US">{children}</SiteRootLayout>;
}
