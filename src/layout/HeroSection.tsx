// components/HeroSection.tsx

import * as React from "react";
import { Button, Typography, Box, Container } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://austorganic.com/wp-content/uploads/2020/05/jobs_hub_launch_social_media_fb.jpg")', // Realistic job portal background
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "0 2rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay to improve text visibility
            zIndex: -1,
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            marginTop: { xs: "6rem", sm: "12.5rem" }, // Adjust top margin based on screen size
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Your Dream Job Awaits
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginBottom: "2rem",
            fontWeight: 300,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            maxWidth: "600px", // Limit the text width
            margin: "0 auto", // Center the text
          }}
        >
          Discover thousands of job opportunities, apply with ease, and build the career you deserve.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="#explore-jobs"
          sx={{
            padding: "12px 40px",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            borderRadius: "30px",
            boxShadow: 3,
            "&:hover": {
              backgroundColor: "#3a8dff",
            },
          }}
        >
          Explore Jobs
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
