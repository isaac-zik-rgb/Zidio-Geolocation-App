import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";


const SignIn = () => {
    return (
    <>
    <Navbar/>
    <div className="h-screen flex justify-center items-center">
    <div className="sm:w-1/2 py-8 ">
        <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="font-bold text-3xl">Sign in into your account </h2>
            <p className="font-medium text-lg text-gray-500 pb-4">
            Enter your details below
            </p>
        </div>
        <form className="flex flex-col m-auto max-w-[358px] gap-6">
            <div className="flex flex-col gap-1">
            <label
                className="font-medium text-base text-gray-700"
                htmlFor="email"
            >
                Email
            </label>
            <input
                className="border rounded-lg py-[10px] px-[14px]"
                type="email"
                placeholder="Your email..."
                required
            />
        </div>
        <div className="flex flex-col gap-1">
            <label
                className="font-medium text-base text-gray-700"
                htmlFor="password"
            >
                Password
            </label>
            <input
                className="border rounded-lg py-[10px] px-[14px]"
                type="password"
                placeholder="**********************"
                required
            />
            </div>
            <div className="flex justify-between">
            <div className="flex gap-1">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <Link
                to="password_reset"
                className="font-medium text-xs text-blue-800"
            >
                Forgot your password?
            </Link>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
            <button
                type="button"
                className="py-3 px-4 w-full rounded-md bg-blue-800 border-none text-white"
            >
                Sign In
            </button>
            <div className=" w-full flex flex-row text-black gap-4 items-center">
                <div className="w-full h-[1px] opacity-20 bg-black"></div>
                <p className="text-nowrap">or continue with</p>
                <div className=" w-full h-[1px] opacity-20 bg-black"></div>
            </div>
            
            <div className="flex gap-2 text-xs font-medium text-center">
                <p className="text-gray-800 ">Don’t have an account?</p>
                <Link to="/auth/signup" className="text-blue-800">
                Sign up
                </Link>
            </div>
        </div>
        </form>
    </div>
    </div>
    <Footer/>
    </>
    );
};
export default SignIn;