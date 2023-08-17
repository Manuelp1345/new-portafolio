import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

const LoadingButton = ({ loading, children, ...props }: Props) => {
  return (
    <Button {...props} disabled={loading}>
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );
};

export default LoadingButton;
