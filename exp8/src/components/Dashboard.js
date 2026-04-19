import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/protected", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      setData(res.data);
    } catch {
      alert("Unauthorized");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>

      <button className="btn btn-success me-2" onClick={fetchData}>
        Fetch Data
      </button>

      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>

      <p className="mt-3">{data}</p>
    </div>
  );
}

export default Dashboard;