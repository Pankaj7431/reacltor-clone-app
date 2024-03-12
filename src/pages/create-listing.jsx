import React, { useState } from "react";

export default function CreateListing() {
  const [formData, setFormdata] = useState({
    type: "sell",
    name: "",
    bedroom: 1,
    bathroom: 1,
    parking: false,
    furnished:false,
    address:"",
    description:"",
    offer:false,
    regularPrice: 0,
  });
  const { type, name, bedroom, bathroom, parking, furnished, address, description, offer, regularPrice } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto ">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>

      <form className="mb-10">
        <p className="text-lg mt-6 font-semibold ">Sell / Rent</p>
        <div className="flex mt-3">
          <button
            type="button"
            id="type"
            value="sell"
            onClick={onChange}
            className={`mr-2 px-7 py-4 font-medium text-sm uppercase 
          shadow-lg rounded-l hover:shadow-xl focus:shadow-xl
          transition ease-in-out w-full 
          ${type === "sell" ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            Sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={onChange}
            className={`ml-3 px-7 py-4 font-medium text-sm uppercase 
          shadow-lg rounded-l hover:shadow-xl focus:shadow-xl
          transition ease-in-out w-full 
          ${type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            Rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold ">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onClick={onChange}
          placeholder="Property Name"
          maxLength="52"
          minLength="10"
          required
          className="w-full px-4 py-2 text-lg text-gray-400 
        bg-white border border-gray-300 rounded-l
        transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white
        focus:border-slate-600 focus:shadow-xl"
        />
        <div className="flex space-x-7">
          <div className="">
            <p className="text-xl mt-5 font-semibold ">Beds</p>
            <input
              type="number"
              id="bedroom"
              value={bedroom}
              onClick={onChange}
              maxLength="10"
              minLength="1"
              required
              className="w-full px-4 py-2 text-lg text-gray-400 
        bg-white border border-gray-300 rounded-l
        transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white
        focus:border-slate-600 focus:shadow-xl"
            />
          </div>

          <div className="">
            <p className="text-xl mt-5 font-semibold ">Bathroom</p>
            <input
              type="number"
              id="bedroom"
              value={bathroom}
              onClick={onChange}
              maxLength="10"
              minLength="1"
              required
              className="w-full px-4 py-2 text-lg text-gray-400 
        bg-white border border-gray-300 rounded-l
        transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white
        focus:border-slate-600 focus:shadow-xl"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold ">Furnished</p>
        <div className="flex mt-3">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`mr-2 px-7 py-4 font-medium text-sm uppercase 
          shadow-lg rounded-l hover:shadow-xl focus:shadow-xl
          transition ease-in-out w-full 
          ${!furnished ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            Yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-4 font-medium text-sm uppercase 
          shadow-lg rounded-l hover:shadow-xl focus:shadow-xl
          transition ease-in-out w-full 
          ${ furnished ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold ">Parking Spot</p>
        <div className="flex mt-3">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={`mr-2 px-7 py-4 font-medium text-sm uppercase 
          shadow-lg rounded-l hover:shadow-xl focus:shadow-xl
          transition ease-in-out w-full 
          ${! parking ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-4 font-medium text-sm uppercase 
          shadow-lg rounded-l hover:shadow-xl focus:shadow-xl
          transition ease-in-out w-full 
          ${parking ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold ">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onClick={onChange}
          placeholder="Enter Your address"
          required
          className="w-full px-4 py-2 text-lg text-gray-400 
        bg-white border border-gray-300 rounded-l
        transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white
        focus:border-slate-600 focus:shadow-xl"
        />
        <p className="text-lg mt-2 font-semibold ">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onClick={onChange}
          placeholder="Describe Your property"
          required
          className="w-full px-4 py-2 text-lg text-gray-400 
        bg-white border border-gray-300 rounded-l
        transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white
        focus:border-slate-600 focus:shadow-xl"
        />
        <p className="text-lg mt-6 font-semibold ">Offer</p>
        <div className="flex mt-3">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`mr-2 px-7 py-4 font-medium text-sm uppercase 
          shadow-lg rounded-l hover:shadow-xl focus:shadow-xl
          transition ease-in-out w-full 
          ${ !offer ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            Yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-4 font-medium text-sm uppercase 
          shadow-lg rounded-l hover:shadow-xl focus:shadow-xl
          transition ease-in-out w-full 
          ${ offer ? "bg-white text-black" : "bg-slate-600 text-white"}`}
          >
            No
          </button>
        </div>
        <div className="flex">
            <div className="">
            <p className="text-xl mt-5 font-semibold ">Regular Price</p>
            <input
              type="number"
              id="regularPrice"
              value={regularPrice}
              onClick={onChange}
              min="50"
              max="50000000"
              required
              className="w-full px-4 py-2 text-lg text-gray-400 
        bg-white border border-gray-300 rounded-l
        transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white
        focus:border-slate-600 focus:shadow-xl"
            />

            </div>
            
          </div>
          {type==="rent" && (
            <div className="">
                 <p className="w-full whitespace-nowrap text-md">$/Month</p>
            </div>
          )}
      </form>
    </main>
  );
}
