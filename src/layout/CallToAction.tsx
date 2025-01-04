// components/CallToAction.tsx

import * as React from "react";
import { Button, Box, Typography, Container } from "@mui/material";

const CallToAction: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3a8dff",
        color: "white",
        py: 6,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            marginBottom: "2rem",
            fontSize: { xs: "2.5rem", sm: "3rem" },
          }}
        >
          Ready to take the next step in your career?
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginBottom: "3rem",
            fontWeight: 300,
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Explore thousands of job opportunities and apply with ease. Your dream job is just a click away.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="#explore-jobs"
          sx={{
            fontSize: "1rem",
            borderRadius: "30px",
            padding: "12px 40px",
            boxShadow: 3,
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Start Exploring Jobs
        </Button>
      </Container>
    </Box>
  );
};

export default CallToAction;
