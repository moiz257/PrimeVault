'use client'
import Image from 'next/image'
import Search from "@/assests/search.png"
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {
  
    const router=useRouter();

    const handleSearch =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if(name){
        router.push(`/List?name=${name}`)
    }

};
  return (
    <div>
        <form className='flex-1 flex justify-between gap-4 bg-gray-100 p-2 rounded-full ' onSubmit={handleSearch}>
            <input type="text" name='name' placeholder='Search' className=' flex-1 bg-transparent outline-none' />
            <button className='cursor=pointer'>
                <Image src={Search} alt='' width={16} height={16}/>
            </button>
        </form>
    </div>
  )
}

export default SearchBar