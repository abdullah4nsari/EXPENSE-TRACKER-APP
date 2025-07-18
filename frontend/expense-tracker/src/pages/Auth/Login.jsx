import React, { useState, useContext } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link,useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail, validatePassword } from "../../utils/helper";
import {API_PATHS} from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
import { UserContext } from "../../context/UserContext";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

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
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
        email,
        password,
      });
      const {token, user } = response.data;

      if(token){
        localStorage.setItem("token", token);
        updateUser(user)
        navigate("/dashboard");
      }
    } catch (error) {
      if(error.response && error.response.data.message){
        setError(error.response.data.message);
      }else{
        setError("Something went wrong. please try again.");
      }
    }
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
