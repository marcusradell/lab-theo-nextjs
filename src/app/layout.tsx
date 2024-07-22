import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "~/top-nav";

export const metadata = {
  title: "Lab Theo Next.js",
  description: "Based on video https://www.youtube.com/watch?v=d5x0JCZbAJs",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
