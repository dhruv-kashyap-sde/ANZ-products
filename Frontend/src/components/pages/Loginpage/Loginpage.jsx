import React from 'react';
import './Loginpage.css';

const Loginpage = () => {
  return (
    <div className="login-form-container">
      <div className="login-card">
        <h2> Admin Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className='basic-button' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
