'use client';
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeSwitcher"; // Import the ThemeProvider component
import { Doto, Orbitron, Rajdhani } from "next/font/google";
import dynamic from "next/dynamic"; // Import dynamic for client-side only component
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

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
});


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            {/* Metadata for SEO and Social Media */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Sarthak Priyadarshi | CyberOL</title>
            <meta name="description" content="Portfolio website of Sarthak Priyadarshi showcasing skills, experience, projects, and achievements in the tech industry." />
            <meta name="author" content="Sarthak Priyadarshi" />
            <meta name="keywords" content="Sarthak Priyadarshi, developer portfolio, web development, front-end, software engineer, tech industry" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Sarthak Priyadarshi | CyberOL" />
            <meta property="og:description" content="Check out the portfolio of Sarthak Priyadarshi, a developer showcasing skills and projects in the tech field." />
            <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
            <meta property="og:url" content="https://yourwebsite.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Sarthak Priyadarshi | CyberOL" />
            <meta name="twitter:description" content="Visit the personal portfolio website of Sarthak Priyadarshi, showcasing expertise in software development." />
            <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.png" type="image/png" />
            <link rel="apple-touch-icon" href="/favicon.png" />
        </head>
        <body
            className={`${doto.variable} ${rajdhani.variable} ${orbitron.variable} ${rajdhani700.variable} antialiased bg-background text-foreground`}
        >
        {/* Only renders Scrollbars on the client-side */}
            <ThemeProvider>{children}</ThemeProvider>

        </body>
        </html>
    );
}
