import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

import { AI } from "@/lib/get-text-content";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
	title: "Mesh",
	description: "Apply Bionic Reading® to your images.",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className={`${GeistSans.variable}`}>
			<body className="font-sans antialiased">
				<ThemeProvider>
					<Navbar />
					<AI>{children}</AI>
					<Toaster />
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
