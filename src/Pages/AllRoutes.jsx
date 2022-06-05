import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Users from "./Users";

function AllRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Dashboard />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
