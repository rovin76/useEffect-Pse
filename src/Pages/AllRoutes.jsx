import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Users from "./Users";
import UsersPage from "./UsersPage";
function AllRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
