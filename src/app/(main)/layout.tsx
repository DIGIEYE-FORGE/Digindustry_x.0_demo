import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import NavBarMobile from "@/components/mobile-navabar";

export const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `bg-background h-fit text-foreground [&>*]:max-w-[1600px] [&>*]:mx-auto overflow-auto `,
          font.className
        )}
      >
        <NavBar className="hidden xl:flex" />
        <NavBarMobile className="xl:hidden" />
        {children}
        <Footer />
      </body>
    </html>
  );
}