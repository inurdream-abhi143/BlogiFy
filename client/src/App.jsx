import { BrowserRouter, Routes, Route } from "react-router-dom";
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
const App = () => {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
};

export default App;
