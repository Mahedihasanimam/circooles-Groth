

import "../globals.css";
import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";

// Define a local font


export const metadata = {
  title: "Circooles",
  icons: {
    icon: "/favicon.ico",
  },
};

// Fetch locale and messages on the server side
export default async function RootLayout({ children }) {
 

  return (

      <section className={` antialiased font-Inter`}>
       
          <Navbar />
          <main>{children}</main>
          <Footer />
        
      </section>
  
  );
}
