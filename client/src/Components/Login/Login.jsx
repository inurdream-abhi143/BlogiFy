import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  Paper,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // TODO: Add login logic here
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{ p: 4, borderRadius: 3, bgcolor: "#f5f5f5", width: "100%" }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Blogify
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <FormControl fullWidth margin="normal" error={!!errors.email}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
            />
            <FormHelperText>
              {errors.email?.message || "Enter your registered email"}
            </FormHelperText>
          </FormControl>

          {/* Password */}
          <FormControl fullWidth margin="normal" error={!!errors.password}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <FormHelperText>
              {errors.password?.message || "Enter your password"}
            </FormHelperText>
          </FormControl>

          {/* Submit Button */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "60%", py: 1 }}
            >
              Login
            </Button>
          </Box>

          {/* Link to Sign Up */}
          <Typography sx={{ mt: 2, textAlign: "center", fontSize: "1rem" }}>
            Don’t have an account?{" "}
            <Link to="/signup" style={{ fontWeight: "bold", color: "#1976d2" }}>
              Sign Up
            </Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
