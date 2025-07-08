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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
// import { useEffect } from "react";

const Navbar = () => {
  const { loginInfo } = useContext(LoginContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // useEffect(() => {
  //   console.log(loginInfo);
  // });

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #1f2937 0%, #111827 100%)",
        boxShadow: 4,
        height: "130px",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: isMobile ? "wrap" : "nowrap",
          gap: isMobile ? 2 : 0,
          minHeight: "150px !important", // Match the AppBar height
        }}
      >
        {/* Logo */}
        <Typography
          variant="h3"
          component={Link}
          to="/"
          sx={{
            color: "#facc15",
            textDecoration: "none",
            fontWeight: "800",
            fontFamily: "'Raleway', sans-serif",
            pl: 2,
            fontSize: isMobile ? "2.5rem" : "3.5rem",
            lineHeight: 1,
          }}
        >
          BlogiFy
        </Typography>

        {/* Nav Links */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            py: isMobile ? 1 : 2,
          }}
        >
          {["Home", "Blogs", "About", "Contact"].map((text) => (
            <Button
              key={text}
              component={Link}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              sx={{
                fontSize: isMobile ? "1rem" : "2rem",
                color: "#f3f4f6",
                fontWeight: "600",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#facc15",
                  transform: "scale(1.05)",
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        {/* Login + Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: isMobile ? "wrap" : "nowrap",
            justifyContent: "center",
            px: 2,
            py: isMobile ? 1 : 2,
          }}
        >
          {loginInfo && loginInfo.username ? (
            <Typography
              sx={{
                color: "#facc15",
                fontSize: "1.5rem",
                fontWeight: 600,
              }}
            >
              Welcome, {loginInfo.username}
            </Typography>
          ) : (
            <Button
              variant="contained"
              startIcon={<RiLoginBoxLine size={22} />}
              component={Link}
              to="/login"
              sx={{
                fontSize: "22px",
                fontWeight: 600,
                backgroundColor: "#facc15",
                color: "#1f2937",
                borderRadius: "8px",
                textTransform: "none",
                px: 3,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#fde047",
                },
              }}
            >
              Login
            </Button>
          )}
          <TextField
            placeholder="Search blogs..."
            size="small"
            sx={{
              width: isMobile ? "100%" : "450px",
              input: {
                color: "white",
                backgroundColor: "#374151",
                padding: "14px 16px",
                fontSize: "1.2rem",
                height: "30px", // this height adds on top of padding
              },
              "& .MuiOutlinedInput-root": {
                height: "55px", // final input height
                borderRadius: "12px",
              },
              "& fieldset": { border: "none" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    sx={{
                      color: "#1f2937",
                      backgroundColor: "#facc15",
                      borderRadius: "10px",
                      width: "48px",
                      height: "48px",
                      "&:hover": {
                        backgroundColor: "#fde047",
                      },
                      fontSize: "22px",
                    }}
                  >
                    <FaSearch size={22} />
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
