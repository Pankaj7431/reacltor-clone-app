import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className='flex items-center 
    text-white uppercase px-7 py-2 
    justify-center w-full bg-red-500 rounded-2xl hover:bg-red-700
    transition duration-700 ease-in-out font-medium'> 
    <FcGoogle 
    className='text-2xl bg-white mr-2 rounded-full'/> Continue With Google</button>
  )
}
