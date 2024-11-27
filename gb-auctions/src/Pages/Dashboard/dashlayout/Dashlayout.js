import Sidebar from "../../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import "./dashlayout.css";

const Dashlayout = () => {
  return (
    <div className="dash-layout-outer">
      <div className="max-width dashboard-layout">
        <div className="side-bar-dash">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashlayout;
