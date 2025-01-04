// components/WhyChooseUs.tsx

import * as React from "react";
import { Container, Typography, Grid, Box, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  {
    title: "Thousands of Jobs",
    description:
      "Browse through thousands of job opportunities across different industries and locations. Find your perfect match.",
    icon: <CheckCircleIcon color="primary" />,
  },
  {
    title: "Simple Application Process",
    description:
      "Our platform makes applying to jobs easier than ever. With just a few clicks, you can submit your resume and get started.",
    icon: <CheckCircleIcon color="primary" />,
  },
  {
    title: "Top Employers",
    description:
      "We partner with top companies and organizations to bring you high-quality, well-paying job listings.",
    icon: <CheckCircleIcon color="primary" />,
  },
  {
    title: "Career Support",
    description:
      "Our platform offers various resources, including resume tips, interview coaching, and more to help you succeed.",
    icon: <CheckCircleIcon color="primary" />,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: "center", marginBottom: "2rem" }}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "8px",
                  boxShadow: 3,
                  textAlign: "center",
                }}
              >
                <Box sx={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  {benefit.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "1rem" }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "textSecondary" }}>
                  {benefit.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
