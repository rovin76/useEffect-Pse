import React, { useEffect, useState } from "react";
import axios from "axios";
const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "http//reqres.in/api/users",
      method: "GET"
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  console.log(data);
  return <div>Users</div>;
};
export default Users;
