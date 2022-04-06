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
            src={require("/Users/blehjo/projects/Bleh-Nmah/frontend-bleh-nmah/src/assets/landing-page/the-kids-are-losing-their-minds-cropped-2.jpg")}
          />
          <div className="absolute inset-0" aria-hidden="true" />
        </div>
        <div className="relative text-center max-w-7xl mx-auto py-24 px-4 flex flex-col items-center sm:py-32 sm:px-6 lg:px-8">
          <h1 className="header text-4xl font-extrabold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">Bleh Nmah</h1>
          {/* <p className="about-blurb mt-6 text-xl font-medium xl:text-2xl text-stone-50 max-w-3xl">
            Welcome to Bleh Nmah, Explore my collections from when I started my career in art up until my current works.
          </p> */}
        </div>
      </div>
    </>
  )
}