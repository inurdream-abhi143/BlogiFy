import { Routes, Route, useNavigate } from "react-router-dom";
import PublisherLayout from "./Publisher/PublisherLayout";
import AdminApp from "./AdminPannel/AdminApp";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import AllBlogs from "./Pages/AllBlogs";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
// import { ToastContainer, toast } from "react-toastify";
import UserProfile from "./UserProfile";
import ProtectedRoutes from "./ProtectedRoutes";
import RoleProtectedRoutes from "./RoleProtectedRoutes";
import PublisherApp from "./Publisher/PublisherApp";
import BlogView from "./Pages/BlogView";
import { useAuth } from "./contexts/AuthContext";
import { useEffect } from "react";
// import { useEffect } from "react";
const App = () => {
  const { auth, loading } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(auth.role);
  // }, []);
  useEffect(() => {
    if (loading) {
      return;
    }
    if (auth.role === "user") {
      navigate("/");
    } else if (auth.role === "publisher") {
      navigate("/publisher/");
    } else if (auth.role === "admin") {
      navigate("/admin/");
    } else {
      navigate("/login");
    }
  }, [auth.role]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="blogView/:id" element={<BlogView />} />

          {/* Protected Routes  */}
          <Route
            path="profile"
            element={
              <ProtectedRoutes>
                <UserProfile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="blogs"
            element={
              <ProtectedRoutes>
                <AllBlogs />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route
          path="/publisher/*"
          element={
            <RoleProtectedRoutes requiredRole="publisher">
              <PublisherApp />
            </RoleProtectedRoutes>
          }
        />

        {/* admin protected routes */}
        <Route
          path="/admin/*"
          element={
            <RoleProtectedRoutes requiredRole="admin">
              <AdminApp />
            </RoleProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default App;
