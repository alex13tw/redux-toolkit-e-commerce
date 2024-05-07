import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../features/Slices/cartSlice'

const SingleProduct = () => {
  const product = useSelector((state)=>state.products.singleproduct)

  const productSize = product[0].size ? product[0].size[0]:"";
  const productColor = product[0].color ? product[0].color[0]:"";


  const [size,setSize]=useState(productSize);
  const [color,setColor]=useState(productColor);


  const { id} =useParams();
  
  const dispatch =useDispatch();
  return (
  <div> 
  {product.filter((product)=>product.id===id).map(( item , index )=>{
          return (
            <div key={index} className='flex justify-center item-center py-10'>
              <div className='pl-44 grow-[2]'>
                <img className='h-[850px] rounded-lg' src={item.img} alt={item.name} />
              </div>
              <div className='grow-[3]'>
                <div className='max-w-lg'>
                  <h5 className='text 2xl  font-bold font-inter tracking-normal leading-none  pb-5'>{item.name}</h5>
                  <p className='text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4'>15% off</p>
                  <p className='text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4'>{item.text}</p>
                  <div className='pb-4 '>  
                  <div>
                  <label htmlFor="size" className='text-yellow-800'>pick a size  </label> <br />
                  <select className='bg-gray' name="size" id="size" value={size} onChange={(e)=>setSize(e.target.value) }>
                    {item.size?.map((item,index)=>{
                      return (
                        <option key={index} value={item}>{item}</option>

                      )
                    })}
                  </select>
                  </div>
                  </div>

                  <div className='pb-4 '>  
                  <div>
                  <label htmlFor="color" className='text-red-600'>pick a Color  </label> <br />
                  <select className='bg-gray' name="color" id="color" value={color} onChange={(e)=>setColor(e.target.value) }>
                    {item.color.map((color,index)=>{
                      return (
                        <option key={index} value={color}>{color}</option>

                      )
                    })}
                  </select>
                  </div>
                  </div>  

                  <button type="button" onClick={()=>dispatch(addToCart({
                    id:item.id,
                    name:item.name,
                    image:item.img,
                    text:item.text,
                    size:size,
                    color:color,
                    price:item.price,
                    amount:1,
                    totalPrice:item.price,
                  }))} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>

                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SingleProduct
