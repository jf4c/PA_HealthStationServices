import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeflex/primeflex.css';  
import 'primeicons/primeicons.css';
import Navbar from "@/components/Navbar/Navbar";
import "@/app/page.module.css";
import StyledComponentsRegistry from "./lib/registry";
import { Providers } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bem vindo ao Mapa da Saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers >
          <StyledComponentsRegistry>
            <Navbar/>
            {children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
