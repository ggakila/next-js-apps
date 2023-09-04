import React from "react";



export default function Hero() {
	return (
		<div className="hero flex flex-col items-center justify-center w-full h-1/2 md:h-1/3 overflow-hidden">
			<div className="text-center py-4 px-32 ">
                <h1 className="text-4xl md:text-6xl text-center mb-6  text-black">"Unlock a World of Convenience and Savings: "</h1>
				<h3 className="text-xl md:text-3xl mb-4">Join Our Community to Shop Smarter, Shop Easier, and Redefine Your Retail Experience.</h3>
            </div>
			<button className="bg-black text-gray-200 py-5 px-16 text-xl hover:text-gray-800 hover:bg-gray-100 border rounded-full hover:border-black ">Get Started</button>
		</div>
	);
}
