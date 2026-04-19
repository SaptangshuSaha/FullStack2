import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: {
          username: username.trim(),
          password: password.trim()
        }
      });

      if (res.status === 200) {
        const role = username.includes("admin") ? "ADMIN" : "USER";

        // 🔐 Store everything needed for future requests
        sessionStorage.setItem("user", username);
        sessionStorage.setItem("password", password); // 🔥 CRITICAL FIX
        sessionStorage.setItem("role", role);

        if (role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }
    } catch (error) {
      alert("Invalid credentials");
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <input
        className="form-control mb-2"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="form-control mb-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;