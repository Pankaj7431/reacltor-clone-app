import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {getAuth, onAuthStateChanged } from "firebase/auth"
 

export default function Header() {
  const [pageState,setPageState] = useState("Sign In")
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setPageState('Profile');
      }
      else{
        setPageState('Sign In');
      }
    })
  }
  )
  function pathMatchRoute(route) {
    if (route === location.pathname) return true;
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0">
      <header
        className="flex justify-between items-center
      px-5 max-w-6xl mx-auto"
      >
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt=""
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-5">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold  text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-gray-800 border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-gray-800 border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-gray-800 border-b-red-400"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
