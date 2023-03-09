import React from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ImageSlider } from "../components/ImageSlider";
import { DropDownNavigation } from "../components/DropDownNavigation";
import { Padding20 } from "../components/StyledComponents";
import { KeyPoints } from "../components/KeyPoints";

export const Homepage = () => {
  const navigate = useNavigate();

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
