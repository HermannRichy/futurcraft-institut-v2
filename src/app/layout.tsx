import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const fontSans = Outfit({
    subsets: ["latin"],
    variable: "--font-sans",
});

const techovier = localFont({
    src: "./fonts/Techovier.otf",
    variable: "--font-techovier",
});

export const metadata: Metadata = {
    title: "FuturCraft Institut",
    description: "Centre de formation professionnelle",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
            <body
                className={`${fontSans.variable} ${techovier.variable} antialiased font-sans`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <CookieBanner />
                </ThemeProvider>
            </body>
        </html>
    );
}
