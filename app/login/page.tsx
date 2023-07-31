import React from "react";

export default function page() {
  return (
    <div className="login-box">
      <h2 className="text-3xl">Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required className="focus-within:none" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}
