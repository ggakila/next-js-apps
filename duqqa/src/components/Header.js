import React from "react";
import Link from "next/link";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";



export default function Header() {

	return (
		<div className="flex header w-full bg-black sm: px-12 md:px-24 text-gray-300 justify-between items-center py-5">
			<div className="header--logo">
				<h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold font-tilt">
					duqqa
				</h1>
			</div>
			<input
				className="sm:w-1/4 lg:w-1/4 sm:p-3 text-sm p-3 lg:p-3 bg-white text-gray-700  rounded-xl"
				type="text"
				placeholder="Search product..."
			></input>
			<div className="flex gap-10 sm:text-md md:text-xl">
				<MdOutlineFavoriteBorder />
				<Link href="/cart">
					<AiOutlineShoppingCart />
				</Link>
				<Link href="/userauth">
					<AiOutlineUser />
				</Link>
			</div>
		</div>
	);
}
