import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // To toggle between login and registration
  const [error, setError] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  // Check for logged-in user on mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (savedUser) {
      setLoggedInUser(savedUser);
      navigate("/"); // Redirect to home if logged in
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://dummyjson.com/users");
      const users = response.data.users;
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setLoggedInUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save to localStorage
        alert(`Welcome, ${user.firstName} ${user.lastName}!`);
        navigate("/"); // Redirect to home
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check for existing users in localStorage (mock registration)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      setError("Username already exists");
      return;
    }

    // Add new user
    const newUser = { username, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    setError("");
    alert("Registration successful! You can now log in.");
    setIsRegistering(false); // Switch back to login form
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser"); // Remove user from localStorage
    alert("You have been logged out.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="login-container">
      {loggedInUser ? (
        <div className="logout-container">
          <h2>Welcome, {loggedInUser.firstName || loggedInUser.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : isRegistering ? (
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Register</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an account?{" "}
            <button
              type="button"
              className="switch-button"
              onClick={() => setIsRegistering(false)}
            >
              Login
            </button>
          </p>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <button
              type="button"
              className="switch-button"
              onClick={() => setIsRegistering(true)}
            >
              Register
            </button>
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;
