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
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<AllBlogs />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/publisher/*" element={<PublisherLayout />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
