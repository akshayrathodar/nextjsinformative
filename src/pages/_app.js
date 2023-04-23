import "@/styles/globals.css";
import "@/styles/contact.css";
import "@/styles/aboutus.css";
import "@/styles/directorMessage.css";
import "@/styles/ourExpertise.css";
import "@/styles/header.css";
import "@/styles/footer.css";
import "@/styles/hero-section.css";
import "@/styles/top-banner.css";
import "@/styles/homecounter.css";
import "@/styles/contactForBecome.css";
import "@/styles/homeservice.css";
import "@/styles/loader.css";
import "@/styles/trueintelligence.css";

import "bootstrap/dist/css/bootstrap.css";
import { Poppins } from "@next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForBecome from "@/components/ContactForBecome";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <>
      <main className={poppins.className}>
        <Header />

        <Component {...pageProps} />
        <ContactForBecome />
        <Footer />
      </main>
    </>
  );
}
