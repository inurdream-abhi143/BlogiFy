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
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onRegisterUser = (data) => {
    console.log("Form Submitted:", data);

    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    userSignup(userInfo);
    reset();
    navigate("/login");
  };

  const userSignup = (userInfo) => {
    // console.log("hello", userInfo);
    // debugger;
    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Faied to  signup ");
        return res.json();
      })
      .then((newUser) => {
        toast.success("User signup successfuly");
      })
      .catch((err) => {
        toast.warning(`signup error, ${err.message}`);
      });
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "650px",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          p: 4,
          borderRadius: 3,
          width: "100%",
          bgcolor: "#f9f9f9",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up for BlogiFy
        </Typography>
        <form onSubmit={handleSubmit(onRegisterUser)}>
          {/* Username */}
          <FormControl fullWidth margin="normal" error={!!errors.username}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              {...register("username", { required: "Username is required" })}
            />
            <FormHelperText>
              {errors.username?.message || "Enter your username"}
            </FormHelperText>
          </FormControl>

          {/* Email */}
          <FormControl fullWidth margin="normal" error={!!errors.email}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
            />
            <FormHelperText>
              {errors.email?.message || "Enter your email"}
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
              {errors.password?.message || "Enter a secure password"}
            </FormHelperText>
          </FormControl>

          {/* Confirm Password — YOUR TURN to validate match */}
          <FormControl
            fullWidth
            margin="normal"
            error={!!errors.confirmPassword}
          >
            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
            <Input
              id="confirm-password"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",

                validate: (value) =>
                  value === watch("password") || "password does not Match ",
              })}
            />
            <FormHelperText>
              {errors.confirmPassword?.message || "Re-enter your password"}
            </FormHelperText>
          </FormControl>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ width: "60%", py: 1 }}
            >
              Create Account
            </Button>
            <Typography
              sx={{
                fontSize: "1.2rem",
                m: ".5rem",
                mt: "1rem",
                textAlign: "center",
              }}
            >
              Have an Account{" "}
              <span>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#1976d2",
                  }}
                >
                  Login
                </Link>
              </span>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
