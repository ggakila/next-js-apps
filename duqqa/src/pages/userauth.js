import React from 'react'
import Link from 'next/link';
import Signup from '@/components/Signup';


export default function userauth() {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-gray-100'>
      <div className='absolute top-5 right-5'>
        <Link href="/">
        Back Home
        
        </Link> 
        </div>
         
     <Signup />
    </div>
  )
}
