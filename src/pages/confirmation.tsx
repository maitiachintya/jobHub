import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Paper,
  Container,
  Button,
  Grid,
} from "@mui/material";
import { teal, grey, blue } from "@mui/material/colors";
import Wrapper from "../layout/wrapper";

const ConfirmationPage: React.FC = () => {
  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <Wrapper>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Paper
          sx={{
            padding: 4,
            boxShadow: 6,
            borderRadius: 3,
            backgroundColor: blue[50],
            textAlign: "center",
          }}
        >
          {/* Icon or Graphic */}
          <Box
            sx={{
              marginBottom: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="https://static-00.iconduck.com/assets.00/success-icon-2048x2048-8woikx05.png"
              alt="Success Icon"
              style={{ width: "80px", height: "80px" }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: teal[700],
              marginBottom: 2,
              fontSize: "2rem",
            }}
          >
            Application Submitted Successfully!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: grey[700],
              marginBottom: 3,
              fontSize: "1rem",
            }}
          >
            Thank you for applying! Your application has been received, and we
            will get back to you shortly.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: grey[600],
              marginBottom: 4,
              fontSize: "0.9rem",
            }}
          >
            Explore more job opportunities or check your application status in
            your profile.
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBackToDashboard}
                sx={{
                  backgroundColor: teal[700],
                  ":hover": { backgroundColor: teal[800] },
                  fontSize: "0.9rem",
                  padding: "10px 20px",
                }}
              >
                Back to Dashboard
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant="outlined"
                onClick={() => router.push("/jobs")}
                sx={{
                  color: teal[700],
                  borderColor: teal[700],
                  ":hover": {
                    backgroundColor: teal[50],
                    borderColor: teal[800],
                  },
                  fontSize: "0.9rem",
                  padding: "10px 20px",
                }}
              >
                Browse More Jobs
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Wrapper>
  );
};

export default ConfirmationPage;
