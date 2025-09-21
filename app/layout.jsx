// app/layout.jsx
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />      
        <main>{children}</main>
        <Footer />      
      </body>
    </html>
  );
}
