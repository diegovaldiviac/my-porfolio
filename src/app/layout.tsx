import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import { SpeedInsights } from "@vercel/speed-insights/next";
//import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {}

export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " bg-gradient-to-b from-white to-purple-100"
        }
      >
        {children}
      </body>
    </html>
  );
}


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="en"
//       className={cx(
//         'text-black bg-white dark:text-white dark:bg-[#111010]',
//         GeistSans.variable,
//         GeistMono.variable
//       )}
//     >
//       <head>
//         <SandpackCSS />
//       </head>
//       <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
//         <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
//           <Navbar />
//           {children}
//           <Analytics />
//           <SpeedInsights />
//         </main>
//       </body>
//     </html>
//   );
// }
