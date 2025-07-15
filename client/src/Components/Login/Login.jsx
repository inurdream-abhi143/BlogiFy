import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginContext } from "../../contexts/LoginContext";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const { loginInfo, setLoginInfo } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        if (!res.ok) throw new Error("No data found");
        return res.json();
      })
      .then((userInfo) => {
        localStorage.setItem("token", userInfo.token);
        const info = {
          username: userInfo.username,
          email: userInfo.email,
        };
        setLoginInfo(info);
        localStorage.setItem("userInfo", JSON.stringify(info));
        toast.success("Login successful!");

        const token = userInfo.token;
        const decode = jwtDecode(token);
        const role = decode.role;

        setAuth({ token, role });

        if (role === "admin") {
          navigate("/admin/");
        } else if (role === "publisher") {
          navigate("/publisher/");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(`Login failed: ${err.message}`);
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow-sm w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4 fw-bold text-primary">
          Welcome to Blogify
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
            />
            <div className="form-text">Enter your registered email</div>
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <div className="form-text">Enter your password</div>
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          {/* Submit */}
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary py-2 fw-semibold">
              Login
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-3">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="fw-bold text-decoration-none text-primary"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
