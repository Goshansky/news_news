import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Новостной сайт",
};

export default function RootLayout({children, modal}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <html lang="ru">
        <body>
        {children}
        {modal}
        </body>
        </html>
    );
}
