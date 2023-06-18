import Button, { ButtonProps } from "@mui/material/Button";
import { Grid, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React from "react";

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

const LandingContainer = () => {
  return (
    <div>
      <div className="max-w-[50%]">
        <Grid container item>
          <Grid lg={12}>
            <h1>Fresh, Sustainable Plant Grown Vertically in Urban Areas</h1>
          </Grid>
          <Grid lg={12}>
            <h4>
              Our vertical farming startup brings sustainable, locally grown
              produce to urban areas. With our innovative technology. We're
              revolutionizing the way we grow and consume fresh food.
            </h4>
          </Grid>
          <Grid lg={12} className="flex">
            <div className="mx-2">
              <ColorButton
                size="large"
                variant="contained"
                endIcon={<ArrowOutwardIcon />}
              >
                Start Now
              </ColorButton>
            </div>
            <div className="mx-2">
              <TrialButton
                color="primary"
                disabled={false}
                size="large"
                variant="outlined"
              >
                How It Works
              </TrialButton>
            </div>
            <div className="mx-2">
              <AvatarGroup max={4}>
                <Avatar src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LandingContainer;
