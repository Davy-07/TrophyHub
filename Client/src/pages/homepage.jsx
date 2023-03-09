import React from "react";
<<<<<<< HEAD
=======
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ImageSlider } from "../components/ImageSlider";
import { DropDownNavigation } from "../components/DropDownNavigation";
import { Padding20 } from "../components/StyledComponents";
import { KeyPoints } from "../components/KeyPoints";

>>>>>>> e0a0ac17ab2fe50002ba9ffe8c5a227d904b7b5a
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
