'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Profile from "@/assests/profile.png"
import React, { useState } from 'react'
import cartModel from '@/assests/cart.png';
import CartModel from './CartModel';


const NavIcon = () => {
 
const [isProflieOpen, setProfileOpen] = useState(false);
const [isCartOpen, setCartOpen] = useState(false);

const router = useRouter()



const isLoggedIn = false
const handleProfile = ()=>{
  if(!isLoggedIn){
   router.push("login")
  }
  setProfileOpen((prev) => !prev);
}
  return (
    <div className=' flex items-center gap-4 xl:gap-6 relative'>
     <Image src={Profile} alt='' width={22} height={22} className='cursor-pointer' onClick={handleProfile}/>
     {isProflieOpen && 
        <div className='absolute p-4 rounded-md left-0 top-12 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
            <Link href="">Profile</Link>
            <div className=' mt-2 cursor-pointer'>Logout</div>
        </div>
     }
     <div className='relative cursor-pointer'>  
     <Image src={cartModel} alt='' width={22} height={22} onClick={()=> setCartOpen((prev)=>!prev)}/>
     
     <div className='absolute -top-4 -right-4 w-6 h-6 bg-Prime rounded-full text-white text-sm flex items-center justify-center '>2</div>
     </div>
     {isCartOpen &&(
      <CartModel/>
     )}
    </div>
  )
}

export default NavIcon