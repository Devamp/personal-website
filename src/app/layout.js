import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Devam Patel | Portfolio",
  description: "Personal website for Devam Patel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
