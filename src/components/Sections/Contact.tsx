import React from "react";
import { TextField, Box, Typography } from "@mui/material";
import { theme } from "@/styles/theme";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { object, string } from "yup";
import { useFormik } from "formik";
import LoadingButton from "../LoadingButtom";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const validationSchema = object({
  email: string()
    .email("Email must be a valid email")
    .required("Email is required"),
  name: string().required("Name is required"),
  message: string().required("Message is required"),
});

const initialValues = {
  email: "",
  name: "",
  message: "",
};

export const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      const response = await axios.post("/api/contact", values);
      if (response.data.ok) {
        formik.resetForm();
      }
      setOpen(true);
      formik.setSubmitting(false);
    },
  });

  return (
    <Box
      id="Contact"
      sx={{
        backgroundColor: "white",
        color: theme.palette.grey[500],
        p: 5,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">CONTACT</Typography>
        <HorizontalRuleIcon />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              borderRadius: "5px",
              overflow: "hidden",
              width: { xs: "100%", sm: "50%" },
              boxShadow: "rgba(100,100,111,.2) 0 7px 29px 0",
              p: 5,
              mt: 5,

              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 5,
                  width: "100%",
                }}
              >
                <TextField
                  fullWidth
                  required
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 5,
                  width: "100%",
                }}
              >
                <TextField
                  required
                  id="email"
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 5,
                  width: "100%",
                }}
              >
                <TextField
                  required
                  id="message"
                  label="Message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 5,
                  width: "100%",
                }}
              >
                <LoadingButton
                  fullWidth
                  variant="contained"
                  onClick={() => formik.isValid && formik.submitForm()}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.light,
                      color: "white",
                    },
                  }}
                  loading={formik.isSubmitting}
                >
                  Submit
                </LoadingButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message Sent!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};
