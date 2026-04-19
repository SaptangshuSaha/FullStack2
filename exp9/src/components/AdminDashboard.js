import React from "react";
import axios from "axios";

function AdminDashboard() {
  const role = sessionStorage.getItem("role");

  // 🔐 Protect route
  if (role !== "ADMIN") {
    alert("Access Denied");
    window.location.href = "/";
  }

  const fetchAdmin = async () => {
    try {
      const username = sessionStorage.getItem("user");
      const password = sessionStorage.getItem("password");

      const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
        auth: {
          username,
          password
        }
      });

      alert(res.data.message);
    } catch (error) {
      alert("Error fetching admin data");
      console.log(error);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>

      <button className="btn btn-danger me-2" onClick={fetchAdmin}>
        Admin Data
      </button>

      <button className="btn btn-secondary" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;