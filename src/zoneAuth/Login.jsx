import React, { useState } from "react";
import register from "../assets/register.jpg?url";
import { Lock , Eye , EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    
  }
const handleShowPassword = () => {
  setShowPassword(!showPassword)
}
  return (
    <div
      className=" relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${register})` }}
    >
      <div
        id="filter"
        className=" flex justify-center items-center  inset-0 absolute bg-black/60"
      >
        <div className="bg-white p-2 w-[17rem] rounded">
          <form onSubmit={handleSubmit}>
            <div className="  my-2 flex flex-col justify-center items-center">
              <Lock />
              <h2>Connexion</h2>
            </div>
            <div>
              <label htmlFor="" className="block">
                Email
              </label>
              <input
                type="text"
                className="w-full border px-1 border-blue-600 rounded"
              />
            </div>
            <div className="relative">
              <label htmlFor="" className="block">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-blue-600 rounded px-1"
              />
              <div className="absolute top-7 right-4">
                <button onClick={handleShowPassword} type="button">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18}/>}
                </button>
              </div>
            </div>
            <div className="flex justify-end mt-4 gap-1">
              <button
                className=" text-[15px]  border border-gray-500 hover:bg-gray-100
               p-1 rounded px-2"
              >
                Annuller
              </button>
              <button
                className=" text-[15px]  bg-blue-600 hover:bg-blue-700
              text-white p-1 rounded px-2
              "
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
