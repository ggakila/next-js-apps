import Link from "next/link";
import Image from "next/image";
import Checkout from "@/components/Checkout"

export default function CartItem() {
	return (
		<div className="flex flex-col items-center justify-start pt-11 h-screen">
			<h1 className="text-2xl mb-4">Your Cart has 1 item(s)</h1>
			<div className="flex  sm:flex-col md:flex-row w-3/4 items-start justify-center gap-10 p-4 h-4/5">
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
				<Checkout />
			</div>
		</div>
	);
}
