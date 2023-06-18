import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import logo from "../../Assets/Logo.png";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#E8DD8F",
  borderRadius: "20px",
}));

const TrialButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // backgroundColor: "#E8DD8F",
  borderRadius: "20px",
}));

const NavBar = () => {
  return (
    <div className="w-full flex justify-between text-white py-8 max-w-[93%] m-auto">
      <div className="flex justify-center w-[300px] ">
        <div className="max-w-[50px] max-h-[50px]">
          <img src={logo} alt="" />
        </div>
        <p className="font-bold text-3xl flex  items-center ">Vertical Farm</p>
      </div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="Active">Solutions</li>
          <li>Department</li>
          <li>Farming Method</li>
          <li>Company</li>
          <li>About</li>
        </ul>
      </div>
      <div className="flex">
        <div className="mx-2">
          <TrialButton
            color="primary"
            disabled={false}
            size="large"
            variant="outlined"
          >
            Start Free Trial
          </TrialButton>
        </div>
        <div className="mx-2">
          <ColorButton size="large" variant="contained">
            Account
          </ColorButton>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
