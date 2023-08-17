import { Box } from "@mui/material";
import React from "react";

const Logo = ({ sx }: { [x: string]: any }) => {
  return <Box sx={sx} component="img" src="/assets/logo.png" />;
};

export default Logo;
