
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";


const Register = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-full h-screen flex justify-center mt-10 mx-auto">
        <div className="px-10 py-5 border-2">
          <div className="text-center">
            <h2 className="font-bold text-3xl tracking-widest">SIGN UP HERE</h2>
            <p className="font-medium text-[13px] text-gray-500 pb-4 mt-1">Enter Your Details Below</p>
          </div>

          <form className="mt-5">
            <div className="">
              <input className="border rounded-lg py-[10px] px-[14px] w-[400px]" type="text" placeholder="Full name" name="Full-name" required/>
            </div>

            <div className="mt-7">
              <input className="border rounded-lg py-[10px] px-[14px] w-[400px]" type="text" placeholder="Phone" name="tel" required/>
            </div>

            <div className="mt-7">
              <input className="border rounded-lg py-[10px] px-[14px] w-[400px]" type="text" placeholder="Username" name="username" required/>
            </div>

            <div className="mt-7">
              <input className="border rounded-lg py-[10px] px-[14px] w-[400px]" type="text" placeholder="Password" name="password" required/>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              <input type="checkbox" name="agree" id="agree" />
              <label className="text-xs font-medium" htmlFor="agree">I agree with the <span className="text-blue-800">Terms</span>{" "} and <span className="text-blue-800">Condition</span> </label>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center mt-7">
              <button type="submit" className="py-3 px-4 w-full rounded-md bg-gray-800 border-none text-white">Sign Up</button>

              <div className=" w-full flex flex-row text-black gap-4 items-center">
                <div className="w-full h-[1px] opacity-20 bg-black"></div>
                <p className="text-nowrap">or continue with</p>
                <div className=" w-full h-[1px] opacity-20 bg-black"></div>
              </div>

              <div className="flex gap-2 text-xs font-medium text-center">
                <p className="text-gray-800 ">Already have an account?</p>
                <Link to="/auth/" className="text-blue-800">Sign in</Link> 
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10">
      <Footer/>
      </div>
    </div>
  )
}
export default Register
// const Sigup = () => {
//   return (
//     <>
//     <Navbar/>
//     <div className="h-screen flex justify-center align-center">
//       <div className="sm:w-1/2 bg-black">
//         <div className="flex flex-col justify-center items-center gap-4">
//           <h2 className="font-bold text-3xl">Sign up to your account</h2>
//           <p className="font-medium text-lg text-gray-500 pb-4">
//             Enter your details below
//           </p>
//         </div>
//         <form className="flex flex-col m-auto max-w-[358px] gap-6">
//           <div className="flex flex-col gap-1">
//             <label
//               className="font-medium text-base text-gray-700"
//               htmlFor="full name"
//             >
//               Full Name
//             </label>
//             <input
//               className="border rounded-lg py-[10px] px-[14px]"
//               type="full name"
//               placeholder="Your full name..."
//               required
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label
//               className="font-medium text-base text-gray-700"
//               htmlFor="tel"
//             >
//               Phone number
//             </label>
//             <input
//               className="border rounded-lg py-[10px] px-[14px]"
//               type="tel"
//               placeholder="Enter phone number..."
//               required
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label
//               className="font-medium text-base text-gray-700"
//               htmlFor="username"
//             >
//               Preferred Username
//             </label>
//             <input
//               className="border rounded-lg py-[10px] px-[14px]"
//               type="username"
//               placeholder="Enter Username..."
//               required
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label
//               className="font-medium text-base text-gray-700"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="border rounded-lg py-[10px] px-[14px]"
//               type="password"
//               placeholder="**********************"
//               required
//             />
//           </div>
//           <div className="flex justify-between">
//             <div className="flex gap-1">
//               <input type="checkbox" name="agree" id="agree" />
//               <label className="text-xs font-medium" htmlFor="agree">
//                 I agree with the <span className="text-blue-800">Terms</span>{" "}
//                 and <span className="text-blue-800">Condition</span>
//               </label>
//             </div>
//           </div>
//           <div className="flex flex-col gap-4 justify-center items-center">
//             <button
//               type="submit"
//               className="py-3 px-4 w-full rounded-md bg-blue-800 border-none text-white"
//             >
//               Sign Up
//             </button>
//             <div className=" w-full flex flex-row text-black gap-4 items-center">
//               <div className="w-full h-[1px] opacity-20 bg-black"></div>
//               <p className="text-nowrap">or continue with</p>
//               <div className=" w-full h-[1px] opacity-20 bg-black"></div>
//             </div>
//               <div className="flex gap-2 text-xs font-medium text-center">
//               <p className="text-gray-800 ">Already have an account?</p>
//               <Link to="/auth/" className="text-blue-800">
//                 Sign in
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//     <div className="mt-10"><Footer/></div>
//     </>
//   );
// };

// export default Sigup;