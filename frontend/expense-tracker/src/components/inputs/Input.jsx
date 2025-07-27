import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ type, value, label, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col">
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="input-box flex items-center justify-between bg-[#f3f7fb] px-2 rounded-md border">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none py-2 block"
          value={value}
          onChange={(e) => onChange(e)}
          aria-label={label}
        />
        <>
        {type === "password"  &&
          (showPassword ? (
            <FaRegEye
              size={22}
              className="text-primary cursor-pointer"
              onClick={toggleShowPassword}
            />
          ):(
            <FaRegEyeSlash
              size={22}
              className="text-slate-400 cursor-pointer"
              onClick={toggleShowPassword}
            />
          ))}
          </>
      </div>
    </div>
  );
};

export default Input;
