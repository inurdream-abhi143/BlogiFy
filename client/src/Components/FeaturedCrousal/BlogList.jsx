import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const featuredBlogs = [
  {
    id: 1,
    title: "Mastering React in 2025",
    author: "Abhishek Dhiman",
    image:
      "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "Dive into hooks, context, suspense, and what’s next in React...",
  },
  {
    id: 2,
    title: "Top 10 Web Dev Trends",
    author: "DevTribe",
    image:
      "https://plus.unsplash.com/premium_photo-1661412605204-504ec6726508?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "From server components to edge deployments — stay ahead!",
  },
  {
    id: 3,
    title: "How to Stay Consistent as a Coder",
    author: "CodeZen",
    image:
      "https://plus.unsplash.com/premium_photo-1661297453206-7f61228e5323?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "Motivation fades. Habits don’t. Here’s how to build them...",
  },
  {
    id: 3,
    title: "How to Stay Consistent as a Coder",
    author: "CodeZen",
    image:
      "https://plus.unsplash.com/premium_photo-1661297453206-7f61228e5323?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "Motivation fades. Habits don’t. Here’s how to build them...",
  },
];

const BlogList = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f9fafb" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: "bold", mb: 6, color: "#1f2937" }}
      >
        Featured Blogs
      </Typography>

      <Grid container spacing={4} justifyContent="space-evenly">
        {featuredBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card
              sx={{
                position: "relative",
                height: 600,
                Width: "650px",
                mx: "auto",
                borderRadius: 4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              {/* Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  backgroundColor: "#facc15",
                  color: "#1f2937",
                  px: 2,
                  py: 0.5,
                  borderRadius: "20px",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  zIndex: 1,
                }}
              >
                🌟 Featured
              </Box>

              <CardMedia
                component="img"
                height="240"
                image={blog.image}
                alt={blog.title}
                sx={{ objectFit: "cover" }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 800, color: "#1f2937" }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  By {blog.author}
                </Typography>
                <Typography variant="body2" sx={{ color: "#374151" }}>
                  {blog.snippet}
                </Typography>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  fullWidth
                  size="large"
                  variant="outlined"
                  sx={{
                    fontWeight: 600,
                    borderColor: "#1f2937",
                    color: "#1f2937",
                    "&:hover": {
                      backgroundColor: "#facc15",
                      borderColor: "#facc15",
                      color: "#1f2937",
                    },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogList;
