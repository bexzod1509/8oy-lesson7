import React, { useEffect, useState } from "react";
import axios from "../../api/index";
import "./Alluser.css";
function Alluser() {
  let user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("/users/search", { params: { limit: 100 } })
      .then((res) => setData(res.data.data.users))
      .catch((err) => console.log(err.message));
  }, []);
  let User = data?.map((el) => (
    <div key={el.id} className="d2">
      <img src="https://dummyjson.com/icon/emilys/128" alt="" />
      <h2>
        {el.FirstName} {el.LastName}
      </h2>
      <p>{el.phones[0]}</p>
    </div>
  ));
  return (
    <div>
      <div className="d">
        <div className="d1">{user ? User : <></>}</div>
      </div>
    </div>
  );
}

export default Alluser;
