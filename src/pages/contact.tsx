import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import Wrapper from "../layout/wrapper";

// Contact Us Page Component
const ContactUsPage: React.FC = () => {
  return (
    <Wrapper>
      <Container sx={{ marginTop: 4 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", color: "#2C3E50" }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, color: "#7f8c8d" }}>
            We’d love to hear from you. Please fill out the form below or reach
            out to us via the contact details.
          </Typography>
        </Box>

        {/* Contact Form Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#f9f9f9",
                padding: 3,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Send Us a Message
              </Typography>
              <form>
                {/* Name Field */}
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ marginBottom: 2 }}
                />
                {/* Email Field */}
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  type="email"
                  required
                  sx={{ marginBottom: 2 }}
                />
                {/* Message Field */}
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  sx={{ marginBottom: 2 }}
                />
                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ padding: "10px", marginTop: 2 }}
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#f9f9f9",
                padding: 3,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Our Contact Information
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                <strong>Email:</strong> support@jobhub.com
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                <strong>Phone:</strong> +1 (555) 123-4567
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                <strong>Address:</strong> 123 JobHub Webel More,
                Bidhannagar Sector - V, Kolkata 700225, India
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                <strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 6:00
                PM
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default ContactUsPage;
