import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmitLogin = (e) => {
    e.preventDefault();
  };
  const handleNewAccount = () => {
    navigate("/signup");
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-8 mx-auto my-4">
      <div className="text-center">
        <h1 className="text-5xl mb-9 font-bold">Login</h1>
      </div>
      <form
        onSubmit={handleSubmitLogin}
        className="grid grid-cols-1 pt-2.5 justify-items-center gap-3"
        action=""
      >
        <div className="w-full max-w-md">
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="w-full max-w-md">
          <label class="label">
            <span class="label-text">Your Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input w-full max-w-md input-bordered "
          />
        </div>
        <div className="w-full max-w-md">
          <p className="cursor-pointer">Forgot Password ?</p>
        </div>
        <input
          class="btn w-full max-w-md text-white btn-accent"
          type="submit"
          value="Login"
        />
      </form>
      <div className="grid grid-cols-1  justify-items-center">
        <p className="pt-2">
          <span>New to Doctors Portal? </span>
          <span
            onClick={handleNewAccount}
            className="text-secondary cursor-pointer"
          >
            Create new account
          </span>
        </p>
        <div class="divider w-full max-w-md">OR</div>
        <button class="btn w-full max-w-md text-white bg-accent">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
