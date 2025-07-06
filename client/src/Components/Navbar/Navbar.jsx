import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#1f2937",
        boxShadow: 3,
        height: "80px", //  Custom height here
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: "80px !important", //  Force height of toolbar
        }}
      >
        {/* Left Logo */}
        <Typography
          variant="h2" //  font size can be customized here
          component={Link}
          to="/"
          sx={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "32px", //  override default font size
          }}
        >
          BlogiFy
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3, height: "80px" }}>
          {["Home", "Blogs", "About", "Contact"].map((text, idx) => (
            <Button
              key={idx}
              component={Link}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              sx={{
                color: "white",
                fontSize: "24px",
                textTransform: "none",
                "&:hover": { color: "#facc15" },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        {/* Right: Login + Search */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<RiLoginBoxLine />}
            component={Link}
            to="/login"
            sx={{
              fontSize: "18px", //  button font size
              backgroundColor: "#facc15",
              color: "#1f2937",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#fde047",
              },
            }}
          >
            Login
          </Button>

          <TextField
            size="small"
            placeholder="Search for blogs"
            sx={{
              width: "350px",
              input: {
                color: "white",
                backgroundColor: "#374151",
                fontSize: "18px", // 👈 input font size
              },
              "& fieldset": { border: "none" },
              borderRadius: "6px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    sx={{
                      color: "#1f2937",
                      backgroundColor: "#facc15",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#fde047",
                      },
                    }}
                  >
                    <FaSearch />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
