import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

const BlogCard = ({ blogs }) => {
  const { imageUrl, title, author, createdAt, category, snippet } = blogs;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: 4,
        boxShadow: 3,
        overflow: "hidden",
        transition: "all 0.3s ease",
        width: "100%",
        "&:hover": {
          boxShadow: 8,
          transform: "scale(1.015)",
        },
        flex: 1,
      }}
    >
      {/* Image Section */}
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{
          width: { xs: "100%", md: "40%" },
          height: { xs: 200, md: "100%" },
          objectFit: "cover",
        }}
      />

      {/* Content Section */}
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            🖋 {author} | 📅 {createdAt}
          </Typography>

          <Chip label={category} color="primary" size="small" sx={{ mb: 2 }} />

          <Typography variant="body1" sx={{ mb: 2 }}>
            {snippet?.length > 180 ? snippet.slice(0, 180) + "..." : snippet}
          </Typography>
        </Box>

        <CardActions>
          <Button variant="contained" color="primary">
            Read More →
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
