"use client"

import Hero from "./src/Hero"
import Footer from "./src/Footer"
import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";



export default function Page() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}
