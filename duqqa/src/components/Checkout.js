import React from 'react'
import Link from 'next/link'

export default function Checkout() {
  return (
    <div className="px-10 mt-2 pb-4 bg-gray-100 w-1/3">
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
  )
}
