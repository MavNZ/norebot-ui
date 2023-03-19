import { Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

export function Temp2(): JSX.Element {
  const location = useLocation();
  console.log("location:", location.pathname);
  return (
    <>
      <Typography paragraph>
        one one one one one one one one one one one one.
      </Typography>
      <Typography paragraph>Two two two two twotwotwotwo two two</Typography>
    </>
  );
}
