import React from "react";
import axios from "axios";

function UserDashboard() {
  const role = sessionStorage.getItem("role");

  if (!role) {
    window.location.href = "/";
  }

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/protected", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token")
        }
      });
      alert(res.data);
    } catch {
      alert("Error fetching data");
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2>User Dashboard</h2>

      <button className="btn btn-success me-2" onClick={fetchData}>
        Get Profile
      </button>

      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default UserDashboard;