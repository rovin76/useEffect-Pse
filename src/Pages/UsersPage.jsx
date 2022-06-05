import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const param = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios({
      url: `https://reqres.in/api/users/${param.id}`,
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
      {
        <div key={data.id}>
          <img src={data.avatar} width="100px" alt="img" />
          <p>
            Name: {data.first_name} {data.last_name}
          </p>
        </div>
      }
    </div>
  );
};
export default UserPage;
