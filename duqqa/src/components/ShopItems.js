'use client'
import React, { useEffect, useState } from "react";
import EcommerceCard from "@/components/EcommerceCard";

export default function ShopItems() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data =>{
      const prods = data.products;
      console.log(prods);
      setProducts(prods);
    })
	}, []);
	return (
		<div className=" text-gray-900 w-full flex flex-wrap justify-center gap-[80px]">
			{products.map((product) => (
				<EcommerceCard
					key={product.id}
					id={product.id}
					title={product.title}
					price={product.price}
				/>
			))}
		</div>
	);
}
