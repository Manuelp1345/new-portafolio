import { Box } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LINK_GITHUB, LINK_LINKEDIN } from "@/Shared/const";
import Button from "@mui/material/Button";
import { theme } from "@/styles/theme";

export const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        scrollBehavior: "smooth !important",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "transparent",
          color: theme.palette.grey[100],
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          id="video"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.5,
            objectFit: "cover",
            zIndex: -1,
          }}
          component="video"
          src="img/bg.mp4"
          loop
          autoPlay
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                fontSize: "4rem",
              }}
            >
              Hi, I&lsquo;m Manuel Puente
            </Box>
            <Box
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                fontSize: { xs: "1rem", md: "1.5rem" },
                px: { xs: 1, sm: 0, md: 6 },
              }}
            >
              a Full Stack Developer with a strong focus on back-end
              development, building web apps with React, Next.js, and Node.js.
              <br />
              {/* Button go to projects */}
              <Button
                href="#Projects"
                variant="contained"
                sx={{
                  width: "200px",
                  mt: 5,
                  fontWeight: 700,
                  color: "white",
                  border: "1px solid",

                  backgroundColor: "transparent",
                  "&:hover": {
                    color: theme.palette.secondary.main,
                    backgroundColor: theme.palette.grey[200],
                  },
                }}
              >
                Projects
              </Button>
            </Box>
            <Box
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                position: "absolute",
                color: "white",
                bottom: { xs: 0, md: "50%" },
                left: { xs: "30%", md: 0 },
                backgroundColor: theme.palette.primary.main,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "row", md: "column" },
                width: "50px",
                py: { md: 2 },
                px: { xs: 10, md: 0 },
                borderTopRightRadius: "1rem",
                borderBottomRightRadius: { md: "1rem" },
                borderTopLeftRadius: { xs: "1rem", md: 0 },
              }}
            >
              <Button
                onClick={() => window.open(LINK_GITHUB, "_blank")}
                sx={{
                  color: "white",
                  "&:hover": {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                <GitHubIcon
                  sx={{
                    fontSize: "3rem",
                  }}
                />
              </Button>
              <Button
                onClick={() => window.open(LINK_LINKEDIN, "_blank")}
                sx={{
                  color: "white",
                  "&:hover": {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                <LinkedInIcon
                  sx={{
                    fontSize: "3rem",
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
