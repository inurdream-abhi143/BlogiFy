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
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginInfo, setLoginInfo } = useContext(LoginContext);
  const onSubmit = (data) => {
    const loginInfo = {
      email: data.email,
      password: data.password,
    };
    checkLogin(loginInfo);
  };
  const checkLogin = (loginInfo) => {
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("No data found");
        }
        return res.json();
      })
      .then((userInfo) => {
        localStorage.setItem("token", userInfo.token);
        const info = {
          username: userInfo.username,
          email: userInfo.email,
        };
        // console.log(info);
        setLoginInfo(info);
        localStorage.setItem("userInfo", JSON.stringify(info));
        toast.success("Login successful! ");
        const token = userInfo.token;
        const decode = jwtDecode(token);
        const role = decode.role;

        setAuth({ token, role });
        console.log("token", token);
        console.log("decode", decode);
        console.log(role);
        if (role === "admin") {
          navigate("/admin/");
        } else if (role === "publisher") {
          navigate("/publisher/");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(`login failed ${err.message}`);
      });

    // console.log(loginInfo);
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
