import React from "react";
import { Navbar } from "../components/Navbar";
import { DropDownNavigation } from "../components/DropDownNavigation";
import { ImageSlider } from "../components/ImageSlider";
import { KeyPoints } from "../components/KeyPoints";
import { Footer } from "../components/Footer";
export const Homepage = () => {
  return (
    <div className="app">
      <Navbar />
      <DropDownNavigation />
      <ImageSlider />
      <KeyPoints />
      <Footer />
    </div>
  );
};
