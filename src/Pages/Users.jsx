import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";
const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "https://reqres.in/api/users",
      method: "GET"
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  return (
    <div>
      {data.map((use) => (
        <div key={v4}>
          <img src={use.avatar} width="100px" alt="img" />
          <p>
            Name: {use.first_name} {use.last_name}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Users;
