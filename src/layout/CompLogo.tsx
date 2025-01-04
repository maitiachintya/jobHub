import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

// Type for company logo data
type CompanyLogo = {
  src: string;
  alt: string;
};

const companyLogos: CompanyLogo[] = [
  {
    src: "https://indiancompanies.in/wp-content/uploads/2020/05/TCS-Logo-Tata-consultancy-service-1920x1144.png",
    alt: "Company 1",
  },
  {
    src: "https://cio.eletsonline.com/wp-content/uploads/2017/03/Infosys-Logo-Wallpapers.jpg",
    alt: "Company 2",
  },
  {
    src: "https://www.financialexpress.com/wp-content/uploads/2017/05/wipro.jpg",
    alt: "Company 3",
  },
  {
    src: "https://contentstatic.techgig.com/photo/90461551/cognizant-announces-new-logo-tagline-aims-at-accelerating-digital-business.jpg?8902",
    alt: "Company 4",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.CRzUFy7Qt3kkLZSqLph3wwHaC4&pid=Api&P=0&h=180",
    alt: "Company 5",
  },
  {
    src: "https://logos-download.com/wp-content/uploads/2016/10/Deloitte_logo_black.png",
    alt: "Company 6",
  },
  {
    src: "https://rochesterarea.org/wp-content/uploads/2020/03/IBM_logoR_blue60_RGB-scaled.jpg",
    alt: "Company 7",
  },
  {
    src: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Symbol.png",
    alt: "Company 8",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.i0s6OEGQRmOYPB85-ei0ggHaBL&pid=Api&P=0&h=180",
    alt: "Company 9",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.Hq59g1Y5z8AWkWUsnnQSvAHaGA&pid=Api&P=0&h=180",
    alt: "Company 10",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.ixcIctwTtauuSrP4PecN9QHaCb&pid=Api&P=0&h=180",
    alt: "Company 11",
  },
  {
    src: "https://files.paredro.com/uploads/2018/08/Amazon-Logo.jpg",
    alt: "Company 12",
  },
  {
    src: "https://logos-world.net/wp-content/uploads/2020/12/Zomato-Logo-2010.png",
    alt: "Company 13",
  },
  {
    src: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    alt: "Company 14",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.tJrRYtyji-sufHWmdG7cagAAAA&pid=Api&P=0&h=180",
    alt: "Company 15",
  },
];

const CompaniesLogoSection: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      {/* Section Header */}
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", color: "#2C3E50" }}
        >
          Trusted by Leading Companies
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, color: "#7f8c8d" }}>
          Explore job opportunities from top companies worldwide.
        </Typography>
      </Box>

      {/* Company Logos Grid */}
      <Grid container spacing={4} justifyContent="center">
        {companyLogos.map((logo, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px", // Adjust logo container height
                transition: "transform 0.3s ease-in-out",
                "&:hover img": {
                  transform: "scale(1.1)", // Hover effect to enlarge the logo
                },
                "&:hover": {
                  transform: "scale(1.05)", // Slight scale effect for the whole box
                },
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease-in-out", // Smooth transform
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CompaniesLogoSection;
