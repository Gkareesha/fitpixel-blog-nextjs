import React, {useState, useEffect, useContext} from 'react'
import Link from 'next/link';

import { getCategories } from '../services';


const Header = () => {
  const[categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto p-10 mb-8">
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
        <Link href='/' >
            <span className='cursor-pointer bold text-4xl text-white'>
                My NextJS Blog 
            </span>
        </Link>
        </div>
        <div className='hidden md:float-right md:contents'>
            {categories.map((category) => (
                <Link key={category.slug} href={`category/${category.slug}`}>
                    <span className='md:float-right mt-2 text-white ml-4 font-semibold cursor-pointer'>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Header
