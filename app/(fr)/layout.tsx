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

export default function FrenchRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <SiteRootLayout lang="fr-FR">{children}</SiteRootLayout>;
}
