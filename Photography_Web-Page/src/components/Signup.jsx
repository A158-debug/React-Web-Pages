import React from "react";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import backgraound from '../images/bg.svg'
import avatars from "../images/avatar.svg"

const Signup = () => {
  return (
    <div className="flex flex-row">
     <div className="basis-1/2 hidden lg:block md:block items-center justify-center self-center"><img src={backgraound} alt="" /></div>
      <div className="flex md:basis-1/2 basis-full lg:basis-1/2 min-h-full items-center justify-center py-9 px-4 sm:px-4 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="">
            <img
              className="mx-auto h-12 w-auto"
              src={avatars}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight  text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or &nbsp;
              <a
                href="./"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Don't have an account ?
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6  " action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="my-2">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <div className="my-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="./"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
            <div className="flex flex-row justify-center align-items-center ">
              <div className="basis-1/3 self-center mx-1"><hr class=" w-30 h-px bg-gray-100 rounded border"></hr></div>
              <div className="basis-1/3 text-center"><p>Or continue with</p></div>
              <div className="basis-1/3 self-center mx-1"><hr class=" w-30 h-px bg-gray-100 rounded border "></hr></div>
            </div>
            
            <div className="flex flex-row justify-items-center">
              <div className="basis-1/3  m-1 p-2 rounded border-blue-300 border flex justify-center align-items-center cursor-pointer hover:shadow-md"><img src={google} alt="" className="h-5 w-5"/></div>
              <div className="basis-1/3  m-1 p-2 rounded border-blue-300 border flex justify-center align-items-center cursor-pointer hover:shadow-md"><img src={facebook} alt="" className="h-5 w-5"/></div>
              <div className="basis-1/3  m-1 p-2 rounded border-blue-300 border flex justify-center align-items-center cursor-pointer hover:shadow-md"><img src={github} alt="" className="h-5 w-5"/></div> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
