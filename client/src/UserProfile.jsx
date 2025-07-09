import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import React, { useContext } from "react";
import { LoginContext } from "./contexts/LoginContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const { loginInfo } = useContext(LoginContext);

  const username = loginInfo?.username || "Guest User";
  const email = loginInfo?.email || "guest@example.com";
  const initials =
    username
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "GU";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");

    navigate("/");
  };
  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 6,
          borderRadius: 4,
          textAlign: "center",
          backgroundColor: "#ffffff", // 🟨 Set clean white background
          border: "1px solid #e0e0e0", // 🟦 Subtle border for distinction
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#3f51b5",
            width: 100,
            height: 100,
            fontSize: "2.5rem",
            margin: "0 auto 1.5rem",
          }}
        >
          {initials}
        </Avatar>

        {/* Username Row */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          mb={1}
        >
          <AccountCircleIcon sx={{ color: "#555" }} />
          <Typography variant="h5" fontWeight="bold">
            {username}
          </Typography>
        </Stack>

        {/* Email Row */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          mb={2}
        >
          <AlternateEmailIcon sx={{ color: "#555" }} />
          <Typography variant="body1" color="text.primary">
            {email}
          </Typography>
        </Stack>

        {/* Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          mt={4}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", px: 4 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{ textTransform: "none", px: 4 }}
          >
            Delete Account
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default UserProfile;
