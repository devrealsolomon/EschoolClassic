import "./App.css";

import { Route, Routes, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import LandingPage from "./pages/LandingPage";

import EditSchool from "./pages/EditSchool";
import Teachers from "./pages/Teachers";

import AddSchoolDetails from "./pages/AddSchoolDetails";
import CreateEvent from "./pages/CreateEvent";
import Events from "./pages/Events";

import OverView from "./pages/OverView";
import Management from "./pages/Management";
import Logout from "./pages/Logout";
import SingleEvent from "./pages/SingleEvent";
import Payment from "./pages/Payment";
import UserEvents from "./pages/UserEvents";
import SearchSchools from "./pages/SearchSchools";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Blogs from "./pages/admin/Blogs";
import Schools from "./pages/admin/Schools";
import AddUserDetails from "./pages/admin/AddUserDetails";
import AdminLogin from "./pages/admin/Login";
import AdminRegister from "./pages/admin/Register";
import AdminLogout from "./pages/admin/Logout";
import AdminOverView from "./pages/admin/OverVew";
import AdminManagement from "./pages/admin/Management";
import EditUser from "./pages/admin/EditUser";
import CreateBLog from "./pages/admin/CreateBlog";
import SchoolOverview from "./pages/SchoolOverview";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/SchoolGallery";
import CreateGallery from "./pages/CreateGallery";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<AddSchoolDetails />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/landing_page" element={<LandingPage />} />
        <Route path="/" element={<OverView />} />
        <Route path="/edit_school" element={<EditSchool />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Teachers />} />
        <Route path="/management" element={<Management />} />
        <Route path="/create_event" element={<CreateEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/school/:school_id" element={<UserEvents />} />
        <Route path="/search_schools" element={<SearchSchools />} />
        <Route path="/search" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs/:blog_id" element={<SingleBlog />} />
        <Route
          path="/school_overview/:school_id"
          element={<SchoolOverview />}
        />

        {/* admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/details" element={<AddUserDetails />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/landing_page" element={<LandingPage />} />
        <Route path="/admin" element={<AdminOverView />} />
        <Route path="/admin/edit_profile" element={<EditUser />} />
        <Route path="/admin/management" element={<AdminManagement />} />
        <Route path="/admin/create_blog" element={<CreateBLog />} />
        <Route path="/admin/logout" element={<AdminLogout />} />
        <Route path="/admin/blogs" element={<Blogs />} />
        <Route path="/blogs/:blog_id" element={<SingleBlog />} />
        <Route path="/admin/schools" element={<Schools />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/create_gallery" element={<CreateGallery />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
