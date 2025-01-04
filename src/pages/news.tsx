"use client";

import React from "react";
import { Box, Typography, Paper, Button, Divider, Grid } from "@mui/material";
import Link from "next/link";
import Wrapper from "@/layout/wrapper";

// Dummy data for news articles
const newsArticles = [
  {
    id: 1,
    title: "Breaking News: Major Update in Technology",
    description:
      "A groundbreaking update in the tech world is changing the landscape of innovation.",
    href: "/news/1",
  },
  {
    id: 2,
    title: "Health Industry on the Rise",
    description:
      "The health industry is experiencing rapid growth with new technological advancements.",
    href: "/news/2",
  },
  {
    id: 3,
    title: "Economic Outlook for 2024",
    description:
      "Experts predict an uncertain economic future with challenges and opportunities.",
    href: "/news/3",
  },
  {
    id: 4,
    title: "Global Climate Change Initiative",
    description:
      "International leaders are coming together to take bold action on climate change.",
    href: "/news/4",
  },
];

const NewsPage: React.FC = () => {
  return (
    <Wrapper>
      <Box
        sx={{
          padding: { xs: 2, sm: 3, md: 5 },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#2C3E50",
            textAlign: "center",
          }}
        >
          Latest News
        </Typography>
        <Divider sx={{ marginBottom: 3, borderColor: "#BDC3C7" }} />

        {/* Display the list of news articles */}
        <Grid container spacing={3}>
          {newsArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Paper
                sx={{
                  padding: 3,
                  boxShadow: 3,
                  borderRadius: 2,
                  backgroundColor: "#FFFFFF",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#34495E",
                    marginBottom: 2,
                    textAlign: "center",
                  }}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#7F8C8D",
                    marginBottom: 2,
                    textAlign: "center",
                  }}
                >
                  {article.description}
                </Typography>
                <Link href={article.href} passHref>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      padding: "10px 20px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textTransform: "none",
                      display: "block",
                      margin: "0 auto",
                      "&:hover": {
                        backgroundColor: "#2980B9",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default NewsPage;
