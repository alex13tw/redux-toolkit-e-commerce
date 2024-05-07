import { createSlice, configureStore } from '@reduxjs/toolkit'

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        totalAmount:0,
        totalPrice:0,

    },
    reducers:{
        addToCart(state,action){
        const productID =action.payload
        try {
            const exist =state.cart.find(
                (product)=>  
                product.id === productID.id &&
                product.size === productID.size &&
                product.color === productID.color     
            );
            if(exist){
                exist.amount++;
                exist.totalPrice +=productID.price;
                state.totalAmount++;
                state.totalPrice +=productID.price;
            }else{
                state.cart.push({
                    id:productID.id,
                    price:productID.price,
                    size:productID.size,
                    image:productID.image,
                    amount:1,
                    text:productID.text,
                    totalPrice:productID.price,
                    name:productID.name,
                    color:productID.color  
                    
                }  
                );
                state.totalAmount++;
                state.totalPrice +=productID.price;
            }
        } catch (error) {
            return err
        }
        },
    removeFromCart(state,action){
        const productID =action.payload
        try {
            const exist =state.cart.find(
                (product)=>  
                product.id === productID.id &&
                product.size === productID.size &&
                product.color === productID.color
                
            );
            if(exist.amount===1){
                state.cart=state.cart.filter((product)=>product.id!==productID.id ||
                 product.size !== productID.size ||
                product.color !== productID.color
            );
            state.totalAmount--;
            state.totalPrice -=productID.price;  
               
            }else{
                exist.amount--;
                exist.totalPrice -= productID.price;
                state.totalAmount--;
                state.totalPrice -=productID.price;
            }
            
            
        } catch (err) {
            return err;
        }
    }
    }
})

export const { addToCart , removeFromCart} =cartSlice.actions;
export default cartSlice.reducer