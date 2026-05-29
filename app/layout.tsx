import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Mamilalaina Todisoa",
  description:
    "Portfolio en français de Mamilalaina Todisoa Gabrielo Patrick, développeur web, mobile et desktop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {children}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const theme = localStorage.getItem("theme");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const shouldUseDark = theme ? theme === "dark" : prefersDark;
              document.documentElement.classList.toggle("dark", shouldUseDark);
              document.documentElement.style.colorScheme = shouldUseDark ? "dark" : "light";
            } catch (_) {}
          `}
        </Script>
      </body>
    </html>
  );
}
