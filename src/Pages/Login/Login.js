import React from "react";

const Login = () => {
  return (
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Email</span>
        </label>
        <label class="input-group">
          <span>Email</span>
          <input
            type="email"
            placeholder="info@site.com"
            class="input input-bordered"
          />
        </label>
        <label class="label">
          <span class="label-text">Your Password</span>
        </label>
        <label class="input-group">
          <span>Password</span>
          <input
            type="password"
            placeholder="********"
            class="input input-bordered"
          />
        </label>
      </div>
  );
};

export default Login;
