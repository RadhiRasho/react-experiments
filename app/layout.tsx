import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "React Experiments",
	description:
		"A project where I just do anything and everything that involves react, from using tanstack to hook libraries, to tailwindcss",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
