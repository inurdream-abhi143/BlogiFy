import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import Hero_banner from "../../assets/Hero_banner.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Hero_banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          Welcome To <span style={{ color: "#facc15" }}>BlogiFy</span>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 2,
            color: "white",
            maxWidth: "600px",
            textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          <Box
            component="span"
            sx={{ color: "#2563eb", fontWeight: 500, fontSize: "1.8rem" }}
          >
            Read.
          </Box>{" "}
          <Box
            component="span"
            sx={{ color: "#9333ea", fontWeight: 500, fontSize: "1.8rem" }}
          >
            Write.
          </Box>{" "}
          <Box
            component="span"
            sx={{ color: "#14b8a6", fontWeight: 500, fontSize: "1.8rem" }}
          >
            Discover.
          </Box>
          <br />
          <Box
            component="span"
            sx={{ color: "#f472b6", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Discover thousands of blogs, or write your own today.
          </Box>
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#facc15",
              color: "#fff",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              "&:hover": { backgroundColor: "#fbbf24" },
            }}
          >
            Explore More Blogs
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#fff",
              color: "#fff",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "#e5e7eb",
              },
            }}
          >
            Become Publisher
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroBanner;
