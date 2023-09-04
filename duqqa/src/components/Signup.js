import React, { useState } from "react";
import { FaGoogle, FaYahoo, FaFacebook } from "react-icons/fa"; // Import icons

export default function Signup() {
  const details = {
    email: "",
    password: "",
    rememberMe: false,
    emailError: "",
    passError: ""
  };

  const [userData, setUserData] = useState({ ...details });

  const handleChange = (e) => {
    const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    let passError = "";
    let emailError = "";

    if(!userData.email) {
      emailError = "Please enter an Email address";
      setUserData({...details});
    }
    if(!userData.password) {
      passError = "Please enter a Password";
      setUserData({...details});
    }else if(userData.password.length < 8 ){
      passError = "Password requires at least 8 characters";
      setUserData({...details});
    }

    if (passError || emailError) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        emailError,
        passError,
      }));
      event.preventDefault();
    } else {
      alert(JSON.stringify(userData));
      setUserData({ ...details });
   }

  };

  return (
		<div className="border rounded-lg overflow-hidden grid md:grid-cols-2 w-full h-screen md:w-full lg:w-2/3 lg:h-2/3 bg-white shadow-sm leading-loose tracking-wide">
			<div className="left flex flex-col items-center justify-center bg-black text-white p-24 relative ">
				<span className="text-6xl font-bold font-tilt p-4 ">duqqa</span>
				<h1 className="text-2xl p-2"> Welcome back</h1>
				<p className="text-sm text-gray-400 leading-loose tracking-wide p-2">Don't have an account ?</p>
				{/* <button
					className="bg-black border border-gray-500 text-gray-200 hover:bg-gray-100 hover:text-gray-700 py-2 my-2 px-4 rounded-full w-2/3 sm:w-1/2 md:w-full"
					type="submit"
				>
					Sign up
				</button> */}
				<button
					className="bg-black text-gray-500 hover:text-gray-100  py-2 px-4 w-full rounded-full "
					type="submit"
				>
					Sign up
				</button>
			</div>
			<div className="flex right flex-1 flex-col items-center justify-center relative">
				{" "}
				{/* Center the form */}
				<form
					className="text-left"
					onSubmit={handleSubmit}
				>
					<div className="mb-4">
						<label
							className="inline-block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email Address
						</label>
						<input
							className="w-full py-2 px-5 border rounded-md"
							name="email"
							type="email"
							id="email"
							value={userData.email}
							onChange={handleChange}
							placeholder="Email address"
						/>
						{userData.emailError && (
							<p className="text-red-500">{userData.emailError}</p>
						)}
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="w-full p-2 border rounded-md"
							name="password"
							type="password"
							id="password"
							value={userData.password}
							onChange={handleChange}
							placeholder="Password"
						/>
						{userData.passError && (
							<p className="text-red-500">{userData.passError}</p>
						)}
					</div>
					<div className="mb-4 flex items-center">
						<input
							type="checkbox"
							checked={userData.rememberMe}
							onChange={handleChange}
							id="remember"
							name="rememberMe"
							className="mr-2"
						/>
						<label
							htmlFor="remember"
							className="text-sm text-gray-600"
						>
							Remember Me
						</label>
					</div>
					<div className="mb-4 text-sm text-gray-600">
						<a
							href="#"
							className="hover:underline"
						>
							Forgot Password?
						</a>
					</div>
					<button
						className="bg-black text-gray-200 hover:bg-gray-100 hover:text-gray-800 hover:border hover:border-gray-700 py-2 px-4 rounded-full w-full"
						type="submit"
					>
						Sign in
					</button>
					<div className="mt-4">
						<p className="text-gray-600">Or sign in with:</p>
						<div className="flex justify-center mt-2">
							{/* Social sign-in icons */}
							<button className="bg-blue-600 text-white rounded-full p-2 mx-2">
								<FaGoogle />
							</button>
							<button className="bg-purple-600 text-white rounded-full p-2 mx-2">
								<FaYahoo />
							</button>
							<button className="bg-blue-800 text-white rounded-full p-2 mx-2">
								<FaFacebook />
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
