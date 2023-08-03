import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Drawer from "../components/Drawer";

const MainLayout = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="mainLayout">
      <NavBar setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
      <Drawer setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
