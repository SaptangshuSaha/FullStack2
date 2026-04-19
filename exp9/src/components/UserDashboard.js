import React from "react";
import axios from "axios";

function UserDashboard() {
  const role = sessionStorage.getItem("role");

  // 🔐 Protect route
  if (!role) {
    window.location.href = "/";
  }

  const fetchData = async () => {
    try {
      const username = sessionStorage.getItem("user");
      const password = sessionStorage.getItem("password");

      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: {
          username,
          password
        }
      });

      alert(res.data.message);
    } catch (error) {
      alert("Error fetching user data");
      console.log(error);
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