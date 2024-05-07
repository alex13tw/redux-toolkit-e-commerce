import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from '../Error/Error';
 
import {singleProduct , filterProduct,
  filterGender , 
  sortByPrice , 
  filterByColor , 
  filterBySize} from '../../features/Slices/productSlice'
  
const FilteredProducts = () => {
  const products = useSelector((state)=>state.products.filteredproduct);
  const { type } = useParams();

  const error = useSelector((state)=>state.products.error);

  const genderButtons =["male","female"]
  const colorButtons =["red","green","purple","yellow","orange","blue","black","brown"];
  const sizeButtons =["S","M","L","XL"];

  const dispatch = useDispatch();
  return (
    <div>
     <div className='pt-16'>
      <div className='pl-14'>
      <h1 className='text-4xl front-inter text-gray-600 font-bold tracking-normal leading-none'>{type}</h1>
      <div className='flex items-center justify-between p-8'>
        <div className='flex items-center'>
          {genderButtons.map((item,index)=>{
            return <div key={index}>
              <Button
              color='gray'
              size='lg'
              variant='outlined'
              className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
              onClick={()=>dispatch(filterGender(item))}
              >
              {item}
              </Button>
              </div>
          })}
              <Button
              color='gray'
              size='lg'
              variant='outlined'
              className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
              onClick={()=>dispatch(sortByPrice())}
              >
              High Button
              </Button>
              <Menu>
      <MenuHandler>
        <Button
        color='gray'
        size='lg'
        variant='outlined'
        className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
        >Select a Color
        </Button>
      </MenuHandler>
      <MenuList>
            {colorButtons.map((item,index)=>{
              return <MenuItem style={{color:item}} key={index}
              onClick={()=>dispatch(filterByColor(item))}
              >{item}</MenuItem>
            })}

        
       
      </MenuList>
    </Menu>
    <Menu>
      <MenuHandler>
        <Button
        disabled={type==="Bags"}
        color='gray'
        size='lg'
        variant='outlined'
        className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
        >Select a Size
        </Button>
      </MenuHandler>
      <MenuList>
            {sizeButtons.map((item,index)=>{
              return <MenuItem key={index}
              onClick={()=>dispatch(filterBySize(item))}
              >{item}</MenuItem>
            })}

        
       
      </MenuList>
    </Menu>
           
        </div>
        <div className='pr-14'>
          <Button
          color='gray'
        size='lg'
        variant='outlined'
        className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
        onClick={()=>dispatch(filterProduct(type))}
          >Clear Filter</Button>
        </div>
      </div>
      </div>
      {error?
      <Error/>:
      <div className='grid grid-cols-4 justify-items-center py-8 gap-12'>
      {products?.filter((product)=>product.type===type).map((product,index)=>{
  return (
    <div key={index}>
    <ProductCard 
    id={product.id} 
    name={product.name}
    text={product.text} 
    img={product.img}
    price={product.price}
    colors={product.color}
    />
  </div>)
})}
      </div>
      }
      
     </div>
      
    </div>
  )
}

export default FilteredProducts


