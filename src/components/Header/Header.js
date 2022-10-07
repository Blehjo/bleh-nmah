import React from 'react';
import './header.css';

export default function Header() {
  return (
    <>
      <div className="relative bg-maroon-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            alt="the kids are losing their minds painting"
            src={require("../../assets/landing-page/the-kids-are-losing-their-minds-cropped-2.jpg")}
          />
          <div className="absolute inset-0" aria-hidden="true" />
        </div>
        <div className="relative text-center max-w-7xl mx-auto py-24 px-4 flex flex-col items-center sm:py-32 sm:px-6 lg:px-8">
          <h1 className="header text-4xl font-extrabold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">Bleh Nmah</h1>
          <p className="header mt-6 text-xl font-medium xl:text-2xl text-stone-50 max-w-3xl">
            Welcome! Checkout my past collections and keep up with my current ones.
          </p>
          <button className="px-3 py-2 rounded-md border-2 border-orange-900 text-base font-medium text-5xl text-white hover:bg-orange-600 hover:text-white focus:bg-gray-800 focus:text-white">ENTER</button>
        </div>
      </div>
    </>
  )
}