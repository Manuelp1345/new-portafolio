import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { theme } from "@/styles/theme";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import Carousel from "react-material-ui-carousel";

const items = [
  {
    image: "img/cd.png",
    title: "Certidigital ",
    text: "Web platform built with PHP, Bootstrap 5, CSS, and HTML for SolTech Group. The platform aims to allow Colombians to perform an income certification from the comfort of their homes, featuring digital signature and QR code.",
    btnGit: "",
    btnLive: "https://www.certidigital.com.co/index.php",
  },
  {
    image: "img/pivotappshopify.webp",
    title: "Pivot MKT (Shopify App)",
    text: "App for integrating Shopify with the Pivot platform, developed using Next.js and Material-UI.",
    btnGit: "",
    btnLive: "",
  },
  {
    image: "img/sm.jpg",
    title: "Santos Manjares",
    text: "Meat restaurant in Argentina, the project was developed using HTML, CSS, and JavaScript. The project was developed together with my teammate Santiago Mederos, working through Github.",
    btnGit: "https://github.com/Manuelp1345/Santos-Manjares",
    btnLive: "https://santos-manjares.vercel.app/",
  },
  {
    image: "img/stg.jpg",
    title: "SolTech Group",
    text: "Project for a Colombian technology solutions company, the project was developed using HTML, CSS, JavaScript, and Bootstrap 4.",
    btnGit: "",
    btnLive: "",
  },
  {
    image: "img/stn.png",
    title: "SolTech Group (Re-Design)",
    text: "Project for a Colombian technology solutions company, the project was developed using React.js, TypeScript, Material-UI, and Styled-Components.",
    btnGit: "",
    btnLive: "https://soltechgr.com/",
  },
  {
    image: "img/pt.png",
    title: "Play-Trading",
    text: "Play Trading is a sports trading platform, the project was developed using React.js, TypeScript, Material-UI, Styled-Components, and Firebase.",
    btnGit: "",
    btnLive: "https://play-trading.com/",
  },
  {
    image: "img/sistema.jpg",
    title: "U.E José Enrique Arias",
    text: "Automated grading system, the project was developed using PHP, HTML, CSS, MariaDB, JavaScript, and Bootstrap 5.",
    btnGit: "https://github.com/Manuelp1345/SIstema-Jose-Enrique-Arias",
    btnLive: "",
  },
  {
    image: "img/sistema2.png",
    title: "U.E José Enrique Arias v2",
    text: "Automated grading system, the project was developed using Electron.js, React.js, TypeScript, Material-UI, Styled-Components, MariaDB, and TypeORM.",
    btnGit: "https://github.com/Manuelp1345/Sistema-de-notas-v2",
    btnLive: "",
  },
];

export const Projects = () => {
  return (
    <Box
      id="Projects"
      sx={{
        backgroundColor: theme.palette.grey[100],
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
        <Typography variant="h3">PROJECTS</Typography>
        <HorizontalRuleIcon />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </Typography>

        <Carousel
          sx={{
            borderRadius: "1rem",
            overflow: "hidden",
            width: "100%",
            display: { xs: "none", sm: "none", md: "block" },
          }}
          animation="slide"
          autoPlay={true}
          cycleNavigation
          fullHeightHover={false}
          navButtonsAlwaysVisible
          indicators={true}
          height={"400px"}
        >
          {items.map((item, i) => (
            <Box
              key={i}
              sx={{
                px: 8,

                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 6,
                gap: "100px",
              }}
            >
              <Box
                component="img"
                src={item.image}
                sx={{
                  width: "500px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography color="black" variant="h4">
                  {item.title}
                </Typography>
                <Typography variant="h6">{item.text}</Typography>
                <Box>
                  {item.btnGit && (
                    <Button onClick={() => window.open(item.btnGit)}>
                      <GitHubIcon
                        sx={{
                          fontSize: "2.5rem",
                          color: "black",
                          "&:hover": {
                            color: theme.palette.grey[500],
                          },
                        }}
                      />
                    </Button>
                  )}
                  {item.btnLive && (
                    <Button onClick={() => window.open(item.btnLive)}>
                      <SearchIcon
                        sx={{
                          fontSize: "2.5rem",
                          color: "black",
                          "&:hover": {
                            color: theme.palette.grey[500],
                          },
                        }}
                      />
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
        <Box
          sx={{
            width: "100%",
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          {items.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 6,
                gap: "100px",
              }}
            >
              <Box
                component="img"
                src={item.image}
                sx={{
                  width: "350px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography color="black" variant="h4">
                  {item.title}
                </Typography>
                <Typography variant="h6">{item.text}</Typography>
                <Box>
                  {item.btnGit && (
                    <Button onClick={() => window.open(item.btnGit)}>
                      <GitHubIcon
                        sx={{
                          fontSize: "2.5rem",
                          color: "black",
                          "&:hover": {
                            color: theme.palette.grey[500],
                          },
                        }}
                      />
                    </Button>
                  )}
                  {item.btnLive && (
                    <Button onClick={() => window.open(item.btnLive)}>
                      <SearchIcon
                        sx={{
                          fontSize: "2.5rem",
                          color: "black",
                          "&:hover": {
                            color: theme.palette.grey[500],
                          },
                        }}
                      />
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
