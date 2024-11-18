import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeSwitcher"; // Import the ThemeProvider component
import {Doto, Orbitron, Rajdhani} from "next/font/google";

const rajdhani = Rajdhani({
    weight: "400", // You can choose the font weights you need
    subsets: ["latin"],
    variable: "--font-rajdhani",  // This is the correct variable name
});

const doto = Doto({
    weight: "400", // You can choose the font weights you need
    subsets: ["latin"],
    variable: "--font-doto",  // This is the correct variable name
});

const rajdhani700 = Rajdhani({
    weight: "700", // You can choose the font weights you need
    subsets: ["latin"],
    variable: "--font-rajdhani700",  // This is the correct variable name
});

const orbitron = Orbitron({
    weight: "700",
    subsets: ["latin"],
    variable: "--font-orbitron",
})


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${doto.variable} ${rajdhani.variable} ${orbitron.variable} ${rajdhani700.variable} antialiased bg-background  text-foreground`}
        >
        <ThemeProvider>{children}</ThemeProvider>
        </body>
        </html>
    );
}
