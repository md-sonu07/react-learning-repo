import React from 'react'
import { FaWhatsapp  } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";


function Footer() {
  return (
    <footer className='flex justify-between max-lg:flex-col gap-4 md:px-25 px-10 py-10 bg-primary text-secondary'>
      <div className=''>
        <h1 className='text-3xl font-bold'>MegaMart</h1>
        <p className='font-bold text-sm pt-6 pb-2'>Contact Us</p>
        <p className='flex items-center mt-2 gap-2'><FaWhatsapp/><span>  What's App</span></p>
        <p className='pl-6'>+1 202-918-2132</p>
        <p className='flex items-center mt-4 gap-2'><FiPhoneCall /><span>Call Us</span></p>
        <p className='pl-6'>+1 202-918-2132</p>
        <h3 className='font-bold my-4'>Download App</h3>
        <div>
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
      </div>
      <div className='max-lg:hidden'>
        <h1 className='border-b-2 mb-4  font-semibold'>Most Popular Categories</h1>
        <PopularCategories name='Men'/>
        <PopularCategories name='Women'/>
        <PopularCategories name='Smart Phones'/>
        <PopularCategories name='Men'/>
        <PopularCategories name='Men'/>
        <PopularCategories name='Men'/>
      </div>
      <div>
        <h1 className='border-b-2 text-2xl mb-4 font-semibold'>Customer Services</h1>
        <PopularCategories name='About Us'/>
        <PopularCategories name='Terms& Condition'/>
        <PopularCategories name='FAQ'/>
        <PopularCategories name='Privacy Policy'/>
        <PopularCategories name='E-waste Policy'/>
        <PopularCategories name='Cancellation & Return Police'/>
      </div>
    </footer>
  )
}

function PopularCategories({name}){
    return (
        <>
        <div>
            <li className='list-disc mx-4 text-md py-1 '>{name}</li>
        </div>
        </>
    )
}

export default Footer
