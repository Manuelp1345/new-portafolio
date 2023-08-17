import { Box, Button, CardMedia, Typography } from "@mui/material";
import { theme } from "../styles/theme";
import { Home } from "@/components/Sections/Home";
import { AboutMe } from "@/components/Sections/AboutMe";

import { Projects } from "@/components/Sections/Projects";
import { Contact } from "@/components/Sections/Contact";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LINK_GITHUB, LINK_LINKEDIN } from "@/Shared/const";
export default function Main() {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        color: theme.palette.grey[500],
        scrollBehavior: "smooth !important",
      }}
    >
      {/* First  section  */}
      <Home />

      {/* Second Section */}
      <AboutMe />

      {/* Third Section Projects*/}
      <Projects />

      {/* <Box
        sx={{
          height: "100vh",
          width: "100%",
          border: "none",
        }}
        component="iframe"
        src="https://api-nest-i8iq.onrender.com/playground"
      ></Box> */}

      {/* Fourth Section */}
      <Contact />

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          p: { xs: 0, md: 4 },
          mb: 0,
          pb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "100px",
            flexWrap: "wrap",
          }}
        >
          <Box width="45%">
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                textAlign: { xs: "center", md: "left" },
                mt: 2,
              }}
            >
              Manuel Puente
            </Typography>
            <br />
            <Typography
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {" "}
              A Full Stack Developer with a strong focus on back-end
              development, building web apps with React, Next.js, and Node.js.
            </Typography>
          </Box>
          <Box width="45%">
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                textAlign: { xs: "center", md: "left" },
                width: "100%",
              }}
            >
              Social
            </Typography>
            <br />
            <Button
              href={LINK_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              sx={{
                fontWeight: "Bold",

                color: "white",
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              <LinkedInIcon
                sx={{
                  fontSize: "2rem",
                }}
              />
            </Button>
            <Button
              href={LINK_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              sx={{
                fontWeight: "Bold",

                color: "white",
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              <GitHubIcon
                sx={{
                  fontSize: "2rem",
                }}
              />
            </Button>
          </Box>
          {/* Line fullWidth white */}
        </Box>
        <Box
          sx={{
            mt: 2,

            width: "100%",
            height: "1px",
            backgroundColor: "white",
          }}
        />
        {/* Copyrigth */}
        <Typography
          sx={{
            mt: 2,

            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          © Copyright 2023. Made by
          <Button
            href="#"
            rel="noopener noreferrer"
            variant="text"
            sx={{
              textDecoration: "underline",
              fontWeight: "bold",
              color: "white",
              "&:hover": {
                color: theme.palette.secondary.main,
              },
            }}
          >
            Manuel Puente
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}
