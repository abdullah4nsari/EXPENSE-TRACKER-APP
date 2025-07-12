import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link,useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail, validatePassword } from "../../utils/helper";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();
    {console.log("submit")}
    if(!validateEmail(email)){
      setError("Please enter a valid email address");
      return;
    }
    if(!validatePassword(password)){
      setError("Please enter the password");
      return;
    }

    setError("");

    //Logiin API call
  };
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl  font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          please enter your details to log in
        </p>
        <form onSubmit={handleLogin}>

          <Input
            type="email"
            value={email}
            placeholder="Abdullah@example.com"
            label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            value={password}
            placeholder="Enter Your Password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            LOGIN
          </button>
          

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{" "}
            <Link className='font-medium text-primary underline' to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
