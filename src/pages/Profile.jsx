import React, { useState } from "react";
import { getAuth, updateCurrentUser, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FcHome } from "react-icons/fc";

export default function Profile() {
  const auth = getAuth();
  const [FormData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = FormData;
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  function onLogout() {
    auth.signOut();
    navigate("/sign-in");
  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onsubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update Display Name in firebase Auth.
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        //update Display Name in firebase Auth.
        const dcoRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(dcoRef, {
          name,
        });
      }
      toast.success("Profile Updated");
    } catch (error) {
      toast.error("Could not update details");
    }
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
            disabled={!changeDetails}
            onChange={onChange}
            className={`w-full px-5 py-2 text-xl rounded-2xl 
          text-gray-600 border-gray-400 
          transition ease-in-out cursor-text mb-5
          ${changeDetails && "bg-red-100 focus:bg-red-200"}
          `}
          />
          <input
            type="text"
            id="email"
            value={email}
            disabled
            className={`w-full px-5 py-2 text-xl rounded-2xl 
          text-gray-600 border-gray-400 
          transition ease-in-out cursor-text mb-5
          `}
          />
          <div
            className="flex justify-between whitespace-nowrap 
          text-m sm:text-l mb-6 mx-1"
          >
            <p className="flex items-center">
              Do you want to change your Display name?
              <span
                onClick={() => {
                  changeDetails && onsubmit();
                  setChangeDetails((prevState) => !prevState);
                }}
                className="text-red-500 hover:text-red-600 
              transition ease-in-out duration-500 cursor-pointer
              ml-1"
              >
                {changeDetails ? "Apply Changes?" : "Edit"}
              </span>
            </p>
            <p
              onClick={onLogout}
              className="text-blue-500 hover:text-blue-600 cursor-pointer
            transition ease-in-out duration-500"
            >
              Sign Out
            </p>
          </div>
          <div className="">
            <button
              type="Submit"
              className="w-full bg-blue-500 text-white uppercase px-7 py-2 text-m font-medium 
              rounded-2xl shadow-md hover:bg-blue-600 transition ease-in-out duration-700 hover:shadow-lg
              active:bg-blue-800"
            >
              <Link to="/create-listing" className="flex justify-center items-center">
                <FcHome className="mr-2 text-3xl rounded-full bg-green-200 p-1 border-2"/>
                Sell or Rent your Home
              </Link>
            </button> 
          </div>
        </form>
      </div>
    </section>
  );
}
