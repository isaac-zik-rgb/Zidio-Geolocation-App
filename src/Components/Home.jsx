import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="w-full bg-home_hero h-[30rem] bg-cover bg-center text-white flex flex-col justify-center items-center mx-auto">
        <h2 className="text-center text-4xl z-10 w-[34rem] uppercase font-bold">Never Lose Your Way Again. <span className="capitalize text-2xl">Save Your Spot, Anywhere, Anytime!</span></h2>
      </section>
      <div className="absolute top-[64px] inset-0 bg-black opacity-50 h-[30rem]"></div>
      <Footer />
    </>
  );
}
