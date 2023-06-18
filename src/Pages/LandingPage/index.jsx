import {
  Grid,
  Paper,
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@mui/material";
import React from "react";
import NavBar from "../../Components/NavBar";
import LandingContainer from "../../Components/LandingContainer";

const Landing = () => {
  return (
    <div className="bg-slate-950 h-screen  ">
      <div>
        <NavBar />
        <div className="max-w-[80%] mx-auto my-[80px] ">
          <LandingContainer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
