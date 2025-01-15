import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', formData);
    } else {
      console.log('Registering with:', formData);
    }
  };

  return (
    <div className="container">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button className="toggle-button" onClick={toggleForm}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Login;