import React, { useState } from "react";
import {getAuth} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const auth =getAuth()
  const [FormData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = FormData;
  const navigate = useNavigate();
  function onLogout(){
    auth.signOut()
    navigate('/sign-in')
  }
  return (
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
      <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>

      <div className="w-full md:w-[50%] mt-6 px-3">
        <form>
          <input
            type="text"
            id="name"
            value={name}
            disabled
            className="w-full px-5 py-2 text-xl rounded-2xl 
          text-gray-600 border-gray-400 
          transition ease-in-out cursor-text 
          mb-5"
          />
          <input
            type="text"
            id="email"
            value={email}
            disabled
            className="w-full px-5 py-2 text-xl rounded-2xl 
          text-gray-600 border-gray-400 
          transition ease-in-out cursor-text
          mb-5
          "
          />
          <div className="flex justify-between whitespace-nowrap 
          text-m sm:text-lg mb-6 mx-1">
            <p className="flex items-center">
              Do you want to change your Display name?
              <span className="text-red-500 hover:text-red-600 
              transition ease-in-out duration-500 cursor-pointer
              ml-1">Edit</span>
            </p>
            <p onClick={onLogout} className="text-blue-500 hover:text-blue-600 cursor-pointer
            transition ease-in-out duration-500">
              Sign Out
            </p>
          </div>  
        </form>
      </div>
    </section>
  );
}
