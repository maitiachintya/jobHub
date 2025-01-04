// components/Footer.tsx

import * as React from "react";
import { Box, Container, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "white",
        py: 4,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                About Us
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                Careers
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                Privacy Policy
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                Terms of Service
              </Link>
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#explore-jobs" color="inherit" underline="hover">
                Explore Jobs
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#post-job" color="inherit" underline="hover">
                Post a Job
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#contact-us" color="inherit" underline="hover">
                Contact Us
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#faq" color="inherit" underline="hover">
                FAQs
              </Link>
            </Typography>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Email:</strong> support@jobportal.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Phone:</strong> +123 456 7890
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Address:</strong> 123 Job Street, City, Country
            </Typography>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" target="_blank" sx={{ color: "white", mr: 2 }}>
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" sx={{ color: "white", mr: 2 }}>
                <Twitter />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "white", mr: 2 }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2">
            © 2024 JobPortal. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
