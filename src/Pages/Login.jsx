import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const { state, dispatch } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then((res) => {
        alert("success");
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((res) => {
        console.log("error");
      });
  };
  if (state.isAuth) {
    return <Navigate to="/users" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login;
