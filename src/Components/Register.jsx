
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";



const Sigup = () => {
  return (
    <>
    <Navbar/>
    <div className="h-screen flex justify-center items-center">
      <div className="sm:w-1/2 py-8 mt-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-bold text-3xl">Sign up to your account</h2>
          <p className="font-medium text-lg text-gray-500 pb-4">
            Enter your details below
          </p>
        </div>
        <form className="flex flex-col m-auto max-w-[358px] gap-6">
          <div className="flex flex-col gap-1">
            <label
              className="font-medium text-base text-gray-700"
              htmlFor="full name"
            >
              Full Name
            </label>
            <input
              className="border rounded-lg py-[10px] px-[14px]"
              type="full name"
              placeholder="Your full name..."
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="font-medium text-base text-gray-700"
              htmlFor="tel"
            >
              Phone number
            </label>
            <input
              className="border rounded-lg py-[10px] px-[14px]"
              type="tel"
              placeholder="Enter phone number..."
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="font-medium text-base text-gray-700"
              htmlFor="username"
            >
              Preferred Username
            </label>
            <input
              className="border rounded-lg py-[10px] px-[14px]"
              type="username"
              placeholder="Enter Username..."
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
              <input type="checkbox" name="agree" id="agree" />
              <label className="text-xs font-medium" htmlFor="agree">
                I agree with the <span className="text-blue-800">Terms</span>{" "}
                and <span className="text-blue-800">Condition</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              type="submit"
              className="py-3 px-4 w-full rounded-md bg-blue-800 border-none text-white"
            >
              Sign Up
            </button>
            <div className=" w-full flex flex-row text-black gap-4 items-center">
              <div className="w-full h-[1px] opacity-20 bg-black"></div>
              <p className="text-nowrap">or continue with</p>
              <div className=" w-full h-[1px] opacity-20 bg-black"></div>
            </div>
              <div className="flex gap-2 text-xs font-medium text-center">
              <p className="text-gray-800 ">Already have an account?</p>
              <Link to="/auth/" className="text-blue-800">
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="mt-10"><Footer/></div>
    </>
  );
};

export default Sigup;