import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { featuredBlogs } from "./FeaturedBlog"; // your mock data
import BlogCard from "./BlogCard/BlogCard";

const BlogList = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f9fafb" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          mb={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Featured Blogs
        </Typography>

        <Grid container spacing={2}>
          {featuredBlogs.map((blog, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
              <BlogCard blogs={blog} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogList;
