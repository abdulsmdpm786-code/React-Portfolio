import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "../components/NavBar";

function RootLayout() {
  return (
    <>
      <div>
        <NavBar />

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
