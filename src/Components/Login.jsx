import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisiblity = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    var displaymessage = "";
    const handleSubmit = async (e) => {
        e.preventDefault();

        //create user
        const user = {
            email,
            password,
        };
        try {
            const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        console.log("Token:", token);
        localStorage.setItem("token", token);
        window.location.href = "/dashboard";

       
      } else {
        const { message } = await response.json();
        displaymessage = message;
        //Display an error message
        console.log("logined failed with message:", message);
      
      }
         }catch(error) {
            console.log(error);
        }

    };
    return (
    <div>
        <Navbar/>
        <div className="w-full flex justify-center mt-10 mx-auto">
            <div className="px-10 py-5 border-2">
                <div className="text-center">
                <h2 className="font-bold text-3xl tracking-widest">SIGN IN HERE</h2>
                <p className="font-medium text-[13px] text-gray-500 pb-4 mt-1">Enter Your Details Below</p>
                <h3 className="text-red-500">{displaymessage}</h3>
            
                </div>

                <form className="mt-5">
                    <div className="mt-7">
                        <input className="border rounded-lg py-[10px] px-[14px] w-[400px]" type="email" placeholder="Email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    </div>

                    <div className="mt-7">
                        <input className="border rounded-lg py-[10px] px-[14px] w-[400px]"
                        type={showPassword ? "text" : "password"} 
                        placeholder="**************************"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                        <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        onClick={togglePasswordVisiblity}
                        className="absolute top-1/2 transform -translate-y-1/2  cursor-pointer"
                        />
                    </div>

                    <div className="flex justify-between gap-2 mt-8">
                        <div className="flex items-center">
                            <input type="checkbox" name="agree" id="agree" />
                            <label className="text-xs font-medium ml-1" htmlFor="agree">Remember Me</label>
                        </div>
                        <Link to="password_reset" className="font-medium text-xs text-blue-800"> Forgot your password?</Link>
                    </div>

                    <div className="mt-16">
                        
                            <button type="button"
                            onClick={handleSubmit} 
                            className="py-3 px-4 w-full rounded-md bg-gray-800 border-none text-white">Sign In</button>
                        

                        <div className=" w-full flex flex-row text-black gap-4 items-center mt-3">
                            <div className="w-full h-[1px] opacity-20 bg-black"></div>
                            <p className="text-nowrap">or continue with</p>
                            <div className=" w-full h-[1px] opacity-20 bg-black"></div>
                        </div>
                        
                        <div className="flex gap-2 text-xs font-medium text-center justify-center mt-10">
                            <p className="text-gray-800 ">Don’t have an account?</p>
                            <Link to="/register" className="text-blue-800">
                            Sign up
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div className="mt-10">
            <Footer/>
            </div>
        </div>
    );
    }
export default Register;

// const SignIn = () => {
//     return (
//     <>
//     <Navbar/>
//     <div className="h-screen flex justify-center items-center">
//     <div className="sm:w-1/2 py-8">
//         <div className="flex flex-col justify-center items-center gap-4">
//             <h2 className="font-bold text-3xl">Sign in into your account </h2>
//             <p className="font-medium text-lg text-gray-500 pb-4">
//             Enter your details below
//             </p>
//         </div>
//         <form className="flex flex-col m-auto max-w-[358px] gap-6">
//             <div className="flex flex-col gap-1">
//             <label
//                 className="font-medium text-base text-gray-700"
//                 htmlFor="username"
//             >
//                 Username
//             </label>
//             <input
//                 className="border rounded-lg py-[10px] px-[14px]"
//                 type="username"
//                 placeholder="Your username..."
//                 required
//             />
//         </div>
//         <div className="flex flex-col gap-1">
//             <label
//                 className="font-medium text-base text-gray-700"
//                 htmlFor="password"
//             >
//                 Password
//             </label>
//             <input
//                 className="border rounded-lg py-[10px] px-[14px]"
//                 type="password"
//                 placeholder="**********************"
//                 required
//             />
//             </div>
//             <div className="flex justify-between">
//             <div className="flex gap-1">
//                 <input type="checkbox" name="remember" id="remember" />
//                 <label htmlFor="remember">Remember me</label>
//             </div>
//             <Link
//                 to="password_reset"
//                 className="font-medium text-xs text-blue-800"
//             >
//                 Forgot your password?
//             </Link>
//             </div>
//             <div className="flex flex-col gap-4 justify-center items-center">
//            <Link to= "/dashboard">
//              <button 
//                 type="button"
//                 className="py-3 px-4 w-full rounded-md bg-blue-800 border-none text-white"
//             >
//                 Sign In
//             </button>
//             </Link>
//             <div className=" w-full flex flex-row text-black gap-4 items-center">
//                 <div className="w-full h-[1px] opacity-20 bg-black"></div>
//                 <p className="text-nowrap">or continue with</p>
//                 <div className=" w-full h-[1px] opacity-20 bg-black"></div>
//             </div>
            
//             <div className="flex gap-2 text-xs font-medium text-center">
//                 <p className="text-gray-800 ">Don’t have an account?</p>
//                 <Link to="/auth/SignUp" className="text-blue-800">
//                 Sign up
//                 </Link>
//             </div>
//         </div>
//         </form>
//     </div>
//     </div>
//     <Footer/>
//     </>
//     );
// };
// export default SignIn;