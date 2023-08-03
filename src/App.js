import React from "react";
import "./asset/styles/scss/main.scss";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import Cursor from "./components/Cursor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Cursor />
      <ToastContainer />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<WorkPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
