import React from 'react'
import { Button } from "@material-tailwind/react";
import clothes from '../../assets/images/clothes.jpg'
import { filterProduct } from '../../features/Slices/productSlice';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";


const NavigateButtons = () => {
    const buttons =['Hoodies',
    'Dresses',
    'Suits',
    'Shoes',
    'T-Shirts',
    'Jeans',
    'Jackets',
    'Bags',]
  const dispatch = useDispatch();
  return (
    <div>
        <div className=' flex items-center justify-center py-8'>
        {buttons.map((button,index)=>{
          return <div key={index} className='mr-4'>
          <Link to={"/filtered/" + button}>
          <button 
           onClick={()=>dispatch(filterProduct(button))}
           color='gray' size='lg' variant='outlined' className=' rounded-lg p-2 bg-gray-300 style:solid hover:bg-green-300 duration-300 ease-in-out' >
          {button}</button>
          </Link>
         
            
          </div>
        })}

        </div>
      <div className='bg-green-300 p-2 w-[55%] mx-auto rounded-md'>
        <h3 className='text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none'>UP TO 50%</h3>
      </div>
      <div className='flex justify-center items-center py-4'>
        <img className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600' src={clothes} alt="" />
      </div>
    </div>
  )
}

export default NavigateButtons
