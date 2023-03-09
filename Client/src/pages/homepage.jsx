import React from "react";
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
