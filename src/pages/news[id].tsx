// pages/news/[id].tsx

"use client";

import React from "react";
import { useRouter } from "next/router";
import { Box, Typography, Divider, Button } from "@mui/material";
import Wrapper from "@/layout/wrapper";

// Dummy data for news articles (same as in NewsPage)
const newsArticles = [
  {
    id: 1,
    title: "Breaking News: Major Update in Technology",
    description:
      "A groundbreaking update in the tech world is changing the landscape of innovation.",
    content:
      "Full article content goes here. It provides detailed information about the latest technology updates.",
  },
  {
    id: 2,
    title: "Health Industry on the Rise",
    description:
      "The health industry is experiencing rapid growth with new technological advancements.",
    content:
      "Full article content goes here. It dives deeper into the rise of the health industry.",
  },
  {
    id: 3,
    title: "Economic Outlook for 2024",
    description:
      "Experts predict an uncertain economic future with challenges and opportunities.",
    content:
      "Full article content goes here. It explores the economic outlook in detail.",
  },
  {
    id: 4,
    title: "Global Climate Change Initiative",
    description:
      "International leaders are coming together to take bold action on climate change.",
    content:
      "Full article content goes here. It provides detailed information about global efforts on climate change.",
  },
];

const ArticlePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Retrieve dynamic id from URL

  // Find the article based on the id
  const article = newsArticles.find((article) => article.id === Number(id));

  if (!article) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4">Article not found</Typography>
      </Box>
    );
  }

  return (
    <Wrapper>
      <Box sx={{ padding: 3, maxWidth: "800px", margin: "0 auto" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
          {article.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#7F8C8D", marginBottom: 3 }}>
          {article.description}
        </Typography>
        <Divider sx={{ marginBottom: 3 }} />
        <Typography variant="body1" paragraph sx={{ color: "#34495E" }}>
          {article.content}
        </Typography>
        <Button variant="outlined" color="primary" href="/news">
          Back to News
        </Button>
      </Box>
    </Wrapper>
  );
};

export default ArticlePage;
