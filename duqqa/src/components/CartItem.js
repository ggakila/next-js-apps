import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CartItem() {
	return (
		<div className="bg-white flex flex-col items-center justify-start pt-11 h-screen">
			<h1 className="text-2xl mb-4">Your Cart has 1 item(s)</h1>
			<div className="flex flex-row w-3/4 items-start justify-center gap-10 p-4 h-4/5">
				<div className="w-3/5 flex flex-row justify-between p-4 rounded-md border-t-2">
					{/* Container for Image */}
					<div className="flex items-center">
						<div className="flex items-center">
							<Image
								className="border rounded-md mr-4"
								src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								width={100}
								height={100}
								alt=""
							/>
							<div>
								<h1 className="text-lg font-bold mb-3">Apple Watch</h1>
								<p>White</p>
							</div>
						</div>
					</div>
					{/* Container for Select Element */}
					<div className="flex items-center">
						<div className="flex items-center">
							<select className="mx-4 px-4 py-2 border rounded-lg">
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select>
							<p className="text-lg mx-6 font-bold">$1220</p>
							<button className="mx-4 text-red-600">Remove</button>
						</div>
					</div>
				</div>
				<div className="px-10 bg-gray-100 w-1/3">
					<div className="flex justify-between mt-6 p-4 border-b-2">
						<h1 className="text-lg text-gray-700 p-4mb-4">SubTotal</h1>
						<p>$1200</p>
					</div>
					<div className="flex justify-between p-4 border-b-2">
						<h1 className="text-lg text-gray-700 mb-4">Tax</h1>
						<p>$0</p>
					</div>
					<div className="flex justify-between p-4 border-b-2">
						<h1 className="text-lg text-gray-700 mb-4">Shipping</h1>
						<p>$21</p>
					</div>
					<div className="flex justify-between p-4 border-b-2">
						<h1 className="text-lg text-gray-700 mb-4">Total</h1>
						<p>$1221</p>
					</div>
					<button className="bg-black text-gray-100 hover:bg-white hover:text-gray-900 px-4 py-4 text-md border rounded-md w-full mb-4">
						Checkout
					</button>
                    <Link href="/">
					<button className="bg-white text-gray-900  hover:bg-black hover:text-gray-100 px-4 py-4 text-md border rounded-md w-full mb-4">
						Continue shopping
					</button>
                    </Link>
				</div>
			</div>
		</div>
	);
}
