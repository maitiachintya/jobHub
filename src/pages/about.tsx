import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent, Divider } from "@mui/material";
import Wrapper from "@/layout/wrapper";

const AboutPage: React.FC = () => {
  return (
    <Wrapper>
      <Container sx={{ marginTop: 4 }}>
        {/* About Us Section */}
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, color: "#7f8c8d" }}>
            Welcome to JobHub, your one-stop platform for finding jobs and connecting with companies.
          </Typography>
        </Box>

        {/* Mission, Vision, and Why Choose Us Sections */}
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          {/* Our Mission */}
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
                  Our Mission
                </Typography>
                <Divider sx={{ margin: "10px 0" }} />
                <Typography variant="body1" sx={{ marginTop: 1, color: "#7f8c8d" }}>
                  JobHub aims to bridge the gap between talented job seekers and leading companies. We provide a comprehensive platform that allows users to find jobs, explore different companies, and apply with ease.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Our Vision */}
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
                  Our Vision
                </Typography>
                <Divider sx={{ margin: "10px 0" }} />
                <Typography variant="body1" sx={{ marginTop: 1, color: "#7f8c8d" }}>
                  Our vision is to revolutionize the job market by offering a seamless experience for job seekers and companies to connect. With an ever-growing list of employers and jobs, we are dedicated to fostering career growth.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Why Choose JobHub */}
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
                  Why Choose JobHub?
                </Typography>
                <Divider sx={{ margin: "10px 0" }} />
                <Typography variant="body1" sx={{ marginTop: 1, color: "#7f8c8d" }}>
                  - Extensive database of job listings across industries. <br />
                  - A user-friendly platform for both job seekers and employers. <br />
                  - Personalized job recommendations and alerts. <br />
                  - Opportunity to explore companies and their hiring processes. <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Optional: Add a Call to Action Section */}
        <Box sx={{ textAlign: "center", marginTop: 5 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", color: "#2980b9" }}>
            Ready to find your dream job?
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, color: "#7f8c8d" }}>
            Join JobHub today and take the first step towards your career!
          </Typography>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default AboutPage;
