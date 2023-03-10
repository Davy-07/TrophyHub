import React from "react";
import { Navbar } from "../components/Navbar";
import { DropDownNavigation } from "../components/DropDownNavigation";
import { ImageSlider } from "../components/ImageSlider";
import { KeyPoints } from "../components/KeyPoints";
import { Footer } from "../components/Footer";
import { SaleBanner } from "../components/SaleBanner";
export const Homepage = () => {
  return (
    // [ ] : Make Components Responsive
    // [ ] : Fix Carousel
    <div className="app">
      <Navbar />
      <DropDownNavigation />
      <ImageSlider />
      <KeyPoints />
      <SaleBanner />
      <Footer />
    </div>
  );
};
