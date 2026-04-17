import { ShopContext } from "./ShopContext";
import { products } from "../assets/frontend_assets/assets";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search,setSearch]=useState('');
  const [showSearch,setShowSearch]=useState(false);
  const [cartItems, setCartItems]= useState({});
  const navigate = useNavigate()
  //size slection k toast notification 
  const addToCart= async(itemId,size)=>{
    if(!size){
      toast.error('Select Product Size');
      return;
    }
      let cartData= structuredClone(cartItems);//it creates a completely new copy, including all nested objects, instead of just copying the reference.
      if(cartData[itemId]){//jab item ka size same ho
        if(cartData[itemId][size]){
          cartData[itemId][size]+=1;
        }
        else{
          cartData[itemId][size]=1;
        }
      }
      else{
        cartData[itemId]={};
        cartData[itemId][size]=1;
      }
      setCartItems(cartData);
  }
const getCartCount=()=>{
  let totalCount=0;
  for(const items in cartItems){
    for(const item in cartItems[items]){
      try {
        if(cartItems[items][item]>0){
          totalCount+=cartItems[items][item];
        }
      } catch (error) {
        
      }
    }
  }
  return totalCount;
}
const updateQuantity = async(itemId,size,quantity)=>{
  let cartData=structuredClone(cartItems);
  cartData[itemId][size]=quantity;
  setCartItems(cartData);

}
const getCartAmount = () =>{
  let totalAmount = 0;

  for(const items in cartItems){
    let itemInfo = products.find((product)=> product._id === items);

    for(const item in cartItems[items]){
      try {
        if(cartItems[items][item] > 0){
          totalAmount += itemInfo.price * cartItems[items][item];
        }
      } catch (error) {

      }
    }
  }

  return totalAmount;
}
  useEffect(()=>{
    console.log(cartItems);
  },[cartItems])
  const value = {
    products,
    currency,
    delivery_fee,
    search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
