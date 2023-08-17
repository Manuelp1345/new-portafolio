import React from "react";
import { Box, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { theme } from "@/styles/theme";
import Button from "@mui/material/Button";
const listMySkills = [
  "React.js",
  "Next.js",
  "Electron.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "Material UI",
  "Bootstrap",
  "Git",
  "GitHub",
  "AWS",
  "Google Cloud",
  "Stripe",
  "Firebase",
  "Shopify",
];

export const AboutMe = () => {
  return (
    <Box
      id="About"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        p: 5,
        pb: 20,
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
        <Typography variant="h3">ABOUT ME</Typography>
        <HorizontalRuleIcon />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-between" },
          gap: "5rem",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              textAlign: { xs: "center", md: "left" },
            }}
            variant="h4"
          >
            Get to know me!
          </Typography>
          <br />
          <Typography
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Hey there! I&lsquo;m a Full Stack Developer with expertise in
            building web apps with React, Next.js, and Node.js 🚀 My strong suit
            lies in the backend where I excel at creating robust RESTful APIs.
            However, I&lsquo;m equally adept at frontend development with React
            and Next.js. I take pride in crafting seamless and user-friendly
            interfaces that contribute to the overall success of the product.
            Check out some of my impressive work in the{" "}
            <span
              style={{
                fontWeight: 700,
              }}
            >
              Projects
            </span>{" "}
            section.
          </Typography>
          <br />
          <Typography
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            I&lsquo;m open to Job opportunities where I can contribute, learn
            and grow. If you have a good opportunity that matches my skills and
            experience then don&apos;t hesitate to contact me.
          </Typography>

          {/* Button go To Contact */}
          <Box
            sx={{
              mt: 6,
            }}
          >
            <Button
              fullWidth
              variant="contained"
              href="#Contact"
              sx={{
                backgroundColor: theme.palette.primary.main,
                padding: "0.5rem 1rem",
                color: "white",
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              textAlign: { xs: "center", md: "left" },
            }}
            variant="h4"
          >
            My Skills
          </Typography>
          <br />
          <Typography
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            I have experience working with the following :
          </Typography>
          <br />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {listMySkills.map((skill) => (
              <Box
                key={skill}
                sx={{
                  backgroundColor: theme.palette.grey[200],
                  borderRadius: "10px",
                  padding: "0.5rem 1rem",
                  color: theme.palette.grey[500],
                }}
              >
                {skill}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
