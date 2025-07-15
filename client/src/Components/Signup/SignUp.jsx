import React from "react";
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
    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to signup");
        return res.json();
      })
      .then(() => {
        toast.success("User signed up successfully");
      })
      .catch((err) => {
        toast.warning(`Signup error: ${err.message}`);
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow-sm w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4 fw-bold text-primary">
          Sign Up for BlogiFy
        </h2>
        <form onSubmit={handleSubmit(onRegisterUser)} noValidate>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              Username
            </label>
            <input
              id="username"
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              {...register("username", { required: "Username is required" })}
            />
            <div className="form-text">Enter your username</div>
            {errors.username && (
              <div className="invalid-feedback">{errors.username.message}</div>
            )}
          </div>

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
                  message: "Invalid email address",
                },
              })}
            />
            <div className="form-text">Enter your email</div>
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
            <div className="form-text">Enter a secure password</div>
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label
              htmlFor="confirm-password"
              className="form-label fw-semibold"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Password does not match",
              })}
            />
            <div className="form-text">Re-enter your password</div>
            {errors.confirmPassword && (
              <div className="invalid-feedback">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary py-2 fw-semibold">
              Create Account
            </button>
          </div>

          {/* Already have an account? */}
          <div className="text-center mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="fw-bold text-decoration-none text-primary"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
