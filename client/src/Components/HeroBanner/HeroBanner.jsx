import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import Hero_banner from "../../assets/Hero_banner.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${Hero_banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        zIndex: 1,
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.55)", // darker for contrast
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.7rem", sm: "3.5rem", md: "4.5rem" },
            color: "white",
            textShadow: "3px 3px 10px rgba(0,0,0,0.7)",
            lineHeight: 1.2,
          }}
        >
          Welcome to{" "}
          <Box component="span" sx={{ color: "#facc15" }}>
            BlogiFy
          </Box>
        </Typography>

        <Typography
          sx={{
            mt: 3,
            fontSize: { xs: "1.4rem", sm: "1.8rem" },
            color: "#f3f4f6",
            lineHeight: 1.8,
            maxWidth: "750px",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          <Box component="span" sx={{ color: "#3b82f6", fontWeight: "bold" }}>
            Read.
          </Box>{" "}
          <Box component="span" sx={{ color: "#9333ea", fontWeight: "bold" }}>
            Write.
          </Box>{" "}
          <Box component="span" sx={{ color: "#10b981", fontWeight: "bold" }}>
            Discover.
          </Box>
          <br />
          <Box
            component="span"
            sx={{
              mt: 2,
              display: "inline-block",
              color: "#f472b6",
              fontWeight: 700,
              fontSize: "1.6rem",
            }}
          >
            Dive into thousands of blogs — or create your own masterpiece today.
          </Box>
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          mt={6}
          alignItems="start"
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#facc15",
              color: "#1f2937",
              fontSize: "1.25rem",
              fontWeight: 700,
              px: 5,
              py: 1.8,
              borderRadius: "12px",
              boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
              transition: "transform 0.2s ease",
              "&:hover": {
                backgroundColor: "#fde047",
                transform: "scale(1.05)",
              },
            }}
          >
            Explore Blogs
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#ffffff",
              color: "#ffffff",
              fontSize: "1.25rem",
              fontWeight: 700,
              px: 5,
              py: 1.8,
              borderRadius: "12px",
              boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "#e5e7eb",
                transform: "scale(1.05)",
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
