import { Inter, Kanit, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const outFit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Agencify Full stack Next js 14 Homepage",
    template: "%s | Agencify App",
  },
  description: "Official Agencify Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outFit.className}>
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
