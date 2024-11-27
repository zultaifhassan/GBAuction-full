import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import Auction from "./Pages/Auction.js/Auction"
import './App.css'
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Dashlayout from "./Pages/Dashboard/dashlayout/Dashlayout";
import Profile from "./Pages/Dashboard/Profile/Profile";
import Product from "./Pages/Productpage/Product";
import Admin from "./Pages/Admindashboard/Admin";
import ConatctTable from "./components/Tables/Contact/ConatctTable";
import DashboardMain from "./Pages/Admindashboard/DashboardMain/DashboardMain";
import UserTabs from "./Pages/Dashboard/userTabs/UserTabs";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminTabs from "./Pages/Admindashboard/AdminTabs/AdminTabs";
import ReviewForm from "./Pages/Dashboard/ReviewForm/ReviewForm";
import MybidsTab from "./components/Tables/Mybids/MybidsTab";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/dashboard" element={<Dashlayout />}>
          <Route path="dash-main" element={<Dashboard/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="review" element={<ReviewForm />} />
          <Route path="mybids" element={<MybidsTab />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="admin-main" element={<DashboardMain />} />
          <Route path="contact-table" element={<ConatctTable />} />
          <Route path="admin-tabs" element={<AdminTabs />} />
          <Route path="product-detail" element={<UserTabs />} />
          <Route path="admin-profile" element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
