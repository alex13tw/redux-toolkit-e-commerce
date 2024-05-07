import { createSlice, configureStore } from '@reduxjs/toolkit'
import { storeData } from '../../assets/data/dummyData';

export const  productSlicer =createSlice({
    name:"products",
    initialState:{
        filteredproduct:JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
        singleproduct:JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
        error:false,
    },
    reducers:{
        filterProduct(state,action){
            try{
                const filter =storeData.filter((product)=>product.type===action.payload);
                state.filteredproduct=filter;
                console.log("the filter",filter);
                const saveState=JSON.stringify(filter);
                sessionStorage.setItem("filteredData",saveState)
                state.error=false;
            }catch(err){
                return err;      
            }   
        }, 
        singleProduct(state,action){
            try {
                const oneProduct=storeData.filter((product)=>product.id===action.payload);
                state.singleproduct=oneProduct;
                console.log("One Product ",oneProduct);
                const saveState=JSON.stringify(oneProduct);
                sessionStorage.setItem("oneProduct",saveState)
            } catch (error) {
                return err;

            }
        },
        filterGender(state,action){
            try {
             
                const gender=state.filteredproduct.filter((product)=>product.gender===action.payload)
                state.error=false; 
                state.filteredproduct=gender;
                const oneGenderType = gender.length >0;
                if(oneGenderType){
                    state.error=false;
                    const saveState=JSON.stringify(gender);
                    sessionStorage.setItem("filteredData",saveState)

                }else{
                    state.error=true;
                    state.filteredproduct=[];

                }
            }
            
            catch (err) {
                return err;
            }
        },
        sortByPrice(state,action){
            try {
             const price = state.filteredproduct.sort((a,b)=>a.price > b.price? -1:1) 
             state.filteredproduct=price;
             
             let count= price.length;

             if(count>1){
                const noError=false;
                state.error=noError;
                if(!noError){
                    state.filteredproduct=price;
                    const saveState=JSON.stringify(price);
                    sessionStorage.setItem("filteredData",saveState)
                }

             }else{
                state.error=true;
                state.filteredproduct=[];
             }
                
            } catch (error) {
                return err;
                
            }
        },
        filterByColor(state,action){
            try {
                const color = state.filteredproduct.filter((product)=>product.color.includes(action.payload))
                state.error=false;
                state.filteredproduct=color;
                if (color.length<=0) {
                    state.error=true;
                    state.filteredproduct=[];
                    
                } else {
                    state.error=false;
                    state.filteredproduct=color;
                    const saveState=JSON.stringify(color);
                    sessionStorage.setItem("filteredData",saveState)
                }
            } catch (error) {
                return error;
            }
        },
        filterBySize(state,action){
            try {
                const size = state.filteredproduct.filter((product)=>product.size.includes(action.payload))
                state.error=false;
                state.filteredproduct=size;
                if (size.length<=0) {
                    state.error=true;
                    state.filteredproduct=[];
                    
                } else {
                    state.error=false;
                    state.filteredproduct=size;
                    const saveState=JSON.stringify(size);
                    sessionStorage.setItem("filteredData",saveState)
                }
            } catch (error) {
                return error;
            }
        }
    }
})

export const { filterProduct , 
    singleProduct , 
    filterGender , 
    sortByPrice , 
    filterByColor , 
    filterBySize } = productSlicer.actions;
export default productSlicer.reducer