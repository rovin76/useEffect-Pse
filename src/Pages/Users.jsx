import React, { useEffect, useState } from "react";
import axios from "axios";
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
  console.log(data);
  return (
    <div>
      {data.map((use) => (
        <div>
          <img src={use.avatar} width="100px" alt="img" />
          <p>
            {use.first_name} {use.last_name}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Users;
