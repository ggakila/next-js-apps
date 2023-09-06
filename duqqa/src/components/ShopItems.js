import React from 'react'
import { EcommerceCard } from "@/components/EcommerceCard";


export default function ShopItems() {
    const data = fetch('https://dummyjson.com/products')
.then(res => res.json());
console.log(data)
  return (
    <div className="bg-white text-gray-900 w-4/5">
     
      
    </div>
  )
}
