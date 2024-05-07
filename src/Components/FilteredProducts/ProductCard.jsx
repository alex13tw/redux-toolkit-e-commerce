import React from 'react'
import { useDispatch } from 'react-redux'
import { singleProduct } from '../../features/Slices/productSlice';
import { Link, useParams } from 'react-router-dom';



const ProductCard = ({id,name,text,price,colors,img}) => {
  const dispatch =useDispatch();
  const { type } =useParams();
  return (
    <Link to={`/filtered/${type}/`+id}>  
    <div onClick={()=>dispatch(singleProduct(id))} className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={img} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">
     {text}
    </p>
  </div>

  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {price}</span>
    {colors?.map((color,index)=>{
        return (<span key={index} style={{backgroundColor:color}} className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">.</span>)

    })}
  </div>
</div>
</Link>
  )
}

export default ProductCard
