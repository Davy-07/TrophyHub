import React from "react";

export const SearchBar = () => {
  return (
    <div className="nav__search">
      <input
        className="nav__field"
        placeholder="Search for products..."
        type="text"
      />
      <button className="btn">Search</button>
    </div>
  );
};
