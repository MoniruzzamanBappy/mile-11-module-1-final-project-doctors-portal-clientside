import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmitSignup = (e) => {
    e.preventDefault();
  };
  const handleHaveAccount = () => {
    navigate("/login");
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-4 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl mb-9 font-bold">Sign Up</h1>
      </div>
      <form
        onSubmit={handleSubmitSignup}
        className="grid grid-cols-1 pt-2.5 justify-items-center gap-3"
        action=""
      >
        <div className="w-full max-w-md">
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-md"
          />
        </div>
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
        <input
          class="btn text-white w-full max-w-md btn-accent"
          type="submit"
          value="Sign Up"
        />
      </form>
      <div className="grid grid-cols-1  justify-items-center">
        <p className="pt-2">
          <span
            onClick={handleHaveAccount}
            className="text-secondary cursor-pointer"
          >
            Already have an account?
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

export default Signup;
