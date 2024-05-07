import React from 'react'
import {
    
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    
  } from "@material-tailwind/react";
  import { Tooltip, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../features/Slices/cartSlice';


  const Cart = ({openModel,setOpen})=>{

  const cart = useSelector((state)=>state.cart.cart);
  const totalPrice = useSelector((state)=>state.cart.totalPrice);
  const dispatch = useDispatch();
  return (<div>
  {cart.length>0 ?
   <Dialog
         className='border-0 outline-0'
        open={openModel}
        handler={()=>setOpen(false)}
        animate={{  
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Shopping Bag</DialogHeader>
        <DialogBody className='flex flex-col justify-center items-start '>
          {cart.map((item ,index ) => {
            return (
              <div key={index}>
                <div className='grid grid-cols-2 py-4' >
                  <div>
                    <img className='h-[125px] rounded-md'
                    src={item.image} 
                    alt={item.name} />
                    <h1>{item.length}</h1>
                    <div className='flex flex-col items-start'>
                    <h6 className='text-black text-3xl font-inter font-base tracking-normal leading-none pt-2'>{item.name}</h6>
                  </div>
                  <div className='max-w-xs'>
                    <p  className='text-black text-xs font-inter tracking-normal leading-none pt-2'>{item.text}</p>
                  </div>
                  </div>
                  <div>
                  <div>
                  <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>Selected Size : 
                  <span className='ml-2'>{item.size}</span>
                </p>
                <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>Selected Color : 
                  <span className='ml-2 rounded-full px-2' style={{backgroundColor:item.color}}></span>
                </p>
                <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>Selected Amount : 
                  <span className='ml-2'>{item.amount}</span>
                </p>
                <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>Single Item Price : 
                  <span className='ml-2'>{item.price}</span>
                </p>
                <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>Total Price : 
                  <span className='ml-2'>{item.totalPrice}</span>
                </p>
                <div className='pt-4'>
                 <Tooltip content='remove from the cart '
                 placement='bottom'>
                <button onClick={()=>dispatch(removeFromCart(item))}
                 size='sm' className='bg-red-700 text-white p-1 rounded-lg ' variant='filled' > Remove</button>
                 </Tooltip>

                </div>
                </div>
                  </div>
                  
                </div>
                
                
              </div>
            );
          })}
        </DialogBody>
        <DialogFooter className='flex justify-start items-center'>
        <p  className='text-black text-sm font-inter tracking-normal leading-none pt-2'>Total Price of All Products</p>
        <span className='ml-2'>{totalPrice}</span>
        </DialogFooter>
      </Dialog>
      :
      <Dialog
      className='border-0 outline-0'
        open={openModel}
        handler={()=>setOpen(false)}
        animate={{  
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Shopping Bag</DialogHeader>
        <DialogBody>
         <div>
          <h1 className='text-black text-3xl font-inter font-base tracking-normal leading-none py-4'>Your bag is empty</h1>
          <p className='text-black text-base font-inter  tracking-normal leading-none py-4'>Add some products</p>
         </div>
        </DialogBody>
      </Dialog>}
      
    </div>
  )
}

export default Cart
