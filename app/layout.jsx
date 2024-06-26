import "./globals.css";
import localFont from "next/font/local";

const recklessNeue = localFont({
  variable: "--reckless-neue",
  src: [
    {
      path: "../public/fonts/RecklessNeue-Light.woff2",
      weight: "300",
      format: "woff2",
      style: "normal",
    },
  ],
});

const denimFont = localFont({
  variable: "--denim-font",
  src: [
    {
      path: "../public/fonts/Denim-Regular.woff2",
      weight: "400",
      format: "woff2",
      style: "normal",
      display: "swap",
    },
    {
      path: "../public/fonts/Denim-SemiBold.woff2",
      weight: "600",
      format: "woff2",
      style: "normal",
      display: "swap",
    },
  ],
});

export const metadata = {
  title: "Tuum | The modular core banking platform",
  description: "The modular core banking platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${recklessNeue.variable} ${denimFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
