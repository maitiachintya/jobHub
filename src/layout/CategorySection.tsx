// components/JobCategoriesSection.tsx

import * as React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

// Define the type for the category object
interface Category {
  title: string;
  image: string;
  link: string;
}

// Job categories data
const categories: Category[] = [
  {
    title: "Software Engineering",
    image:
      "https://tryengineering.org/wp-content/uploads/bigstock-Software-Developer-Freelancer-321565021-scaled.jpg",
    link: "#software",
  },
  {
    title: "Data Science",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.kcO0A2mLcWmyDPIXChXckwAAAA&pid=Api&P=0&h=180",
    link: "#data-science",
  },
  {
    title: "Marketing",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "#marketing",
  },
  {
    title: "Design",
    image: "https://tse1.mm.bing.net/th?id=OIP.rtaAiZy6j4EDM9pAaMVmKAHaFL&pid=Api&P=0&h=180",
    link: "#design",
  },
];

const JobCategoriesSection: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Explore Job Categories
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="190"
                image={category.image}
                alt={category.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {category.title}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={category.link}
                  sx={{ mt: 2, padding: "8px 16px", borderRadius: "20px" }}
                >
                  View Jobs
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobCategoriesSection;
