import React from "react";
import { Chat } from "../components/Chat";
import { Sidebar } from "../components/Sidebar";
export const Homepage = () => {
  return (
    <div className="wrapper">
      <div className="home">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
