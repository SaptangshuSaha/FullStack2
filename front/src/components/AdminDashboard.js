import React from "react";
import axios from "axios";

function AdminDashboard() {
  const role = sessionStorage.getItem("role");

  if (role !== "ADMIN") {
    alert("Access Denied");
    window.location.href = "/";
  }

  const fetchAdmin = async () => {
    try {
      const res = await axios.get("http://localhost:5000/protected", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token")
        }
      });
      alert(res.data);
    } catch {
      alert("Error fetching admin data");
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