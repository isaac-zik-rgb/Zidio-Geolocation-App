// import React, { useState } from "react";
// import logo from "../../assets/Tech_Harbor_Logo.png";
// // import { navItems } from "./NavItems";
// // import { authLinks } from "./NavItems";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState(null);

//   const handleMenuClick = (id) => {
//     setActiveMenu(id);
//   };

//   return (
//     <nav className="bg-[#F3F9FD] p-2 flex items-center gap-10 px-10">
//       <div className="container mx-auto flex items-center justify-between border">
//         <img src={logo} alt=" Tech Habor logo" />

//         <ul className="flex flex-row space-x-10">
//           {navItems.map(({ id, title, path }) => (
//             <li key={id} className="relative text-black list-none group">
//               <Link
//                 to={path}
//                 className={`inline-block ${id === activeMenu ? "active" : ""}`}
//                 onClick={() => handleMenuClick(id)}
//               >
//                 {title}
//                 <div className="absolute bottom-0 left-[14.5px] transform -translate-x-1/2 w-6 h-1 rounded-lg bg-blue-500 opacity-0 group-hover:opacity-100 focus:opacity-100 active:opacity-100"></div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex gap-5">
//         {authLinks.map((item) => (
//           <div>
//             <div className="inline-block">
//               <Link to={item.path} key={item.id} className="">
//                 <button className={getButtonStyle(item.title)}>
//                   {item.title}
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </nav>
//   );
// }

// const getButtonStyle = (title) => {
//   switch (title.toLowerCase()) {
//     case "sign in":
//       return "rounded-2xl border border-dark-blue text-dark-blue px-6 py-2  text-center";
//     case "register":
//       return "rounded-2xl border bg-dark-blue text-white px-6 py-2 text-center ";

//     default:
//       return "rounded-2xl border border-dark-blue  border-solid text-dark-blue px-6 py-2  text-center";
//   }
// };


// export const navItems = [
//   {
//     id: "1",
//     title: "Home",
//     path: "/",
//   },
//   {
//     id: "2",
//     title: "About us",
//     path: "/about",
//   },
//   {
//     id: "3",
//     title: "Client",
//     path: "/client",
//   },
//   {
//     id: "4",
//     title: "Portfolio",
//     path: "/portfolio",
//   },

//   {
//     id: "5",
//     title: "Contact us",
//     path: "contact",
//   },
// ];

// export const authLinks = [
//   {
//     id: "1",
//     title: "Signin",
//     path: "/auth",
//   },
//   {
//     id: "2",
//     title: "Register",
//     path: "/auth/signup",
//   },
// ];
