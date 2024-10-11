"use client"
import Image from 'next/image'
import React from 'react'

const CartModel = () => {

const cartItems = true

  return (
    <div className='w-max absolute rounded-md p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 flex flex-col bg-white top-12 right-0'>
    {!cartItems ? (

    <div className=''>Cart Is Empty</div>
    ) : (
         <>
         <h2 className=' text-xl mb-4'>Shopping Cart</h2>
        {/* //List */}
        <div className=' flex gap-8 flex-col'>
            {/* Items */}
        <div className=' flex gap-4'>

          <Image src="https://images.pexels.com/photos/24871914/pexels-photo-24871914/free-photo-of-red-poppies-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='' width={72} height={96} className=' object-cover rounded-md'/>
           <div className=' flex flex-col justify-between w-full'>
            {/* Top */}       
            <div>
            {/* Title */}
            <div className=' flex justify-between items-center gap-8'>

              <h1 className=' font-semibold'>Product</h1>
              <div className=' p-1 bg-gray-50 rounded-sm'>$49</div>
            
            </div>
            <div className=' text-sm text-gray-500'>
            {/* Description */}
              Available
            </div>
            </div>
            {/* Bottom */}
            <div className=' flex justify-between text-sm'>
              <span className='text-gray-500'>Qty.2</span>
              <span className='text-blue-500'>Remove</span>
            </div>
           </div>
          </div>
            {/* Items */}
        <div className=' flex gap-4'>

          <Image src="https://images.pexels.com/photos/24871914/pexels-photo-24871914/free-photo-of-red-poppies-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='' width={72} height={96} className=' object-cover rounded-md'/>
           <div className=' flex flex-col justify-between w-full'>
            {/* Top */}       
            <div>
            {/* Title */}
            <div className=' flex justify-between items-center gap-8'>

              <h1 className=' font-semibold'>Product</h1>
              <div className=' p-1 bg-gray-50 rounded-sm'>$49</div>
            
            </div>
            <div className=' text-sm text-gray-500'>
            {/* Description */}
              Available
            </div>
            </div>
            {/* Bottom */}
            <div className=' flex justify-between text-sm'>
              <span className='text-gray-500'>Qty.2</span>
              <span className='text-blue-500'>Remove</span>
            </div>
           </div>
          </div>
          </div>

          {/* //Bottom */}
        <div>
            <div className=' flex items-center justify-between font-semibold mt-4'>
                <span>Subtotal</span>
                <span>$90</span>
            </div>
            <p className=' text-gray-500 mt-2 mb-4 text-sm'>Lorem ipsum dolor sit amet.</p>
            <div className='flex justify-between text-sm'>
                <button className=' rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
                <button className=' rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
            </div>
        </div>
        </>
    )}

    </div>
  )
}

export default CartModel