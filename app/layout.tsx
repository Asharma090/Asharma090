import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import "./globals.css";
import Base from "../template/base";
import Home from "@/pages/home";
import ReduxProvider from "./ReduxProvider";

export const metadata = {
  title: "MISC",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
      <ReduxProvider>
        <Base>
          <Home />
        </Base>
      </ReduxProvider>
      </body>
    </html>
  );
}
