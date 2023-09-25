import React from 'react'
import Image from 'next/image'

export default function EcommerceCard({product, id, title, price}) {
    
  return (
		<div className="card py-15 px-5 w-[300px] h-[200px] ">
			<div className="m-0 p-0 w-full h-full relative">
				<Image
					src={`https://i.dummyjson.com/data/products/${id}/thumbnail.jpg`}
					fill={true}
					alt="imeji"
					unoptimized
					style={{ objectFit: "contain" }}
				/>
			</div>
			<div className="flex justify-between my-5">
				<div className='text-gray-800 text-lg font-medium'>{title}</div>
				<div><span>$</span>{price}</div>
			</div>
		</div>
	);
}
