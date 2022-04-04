import React from 'react';
import {useState} from "react";
import {useQuery} from "react-query";
import Item from "./Components/Item";
import Cart from './Components/Cart'
import Grid from '@mui/material/Grid';

//styles
import {Wrapper, StyleButton} from "./App.styles";
import Badge from '@mui/material/Badge';

//Components Loader
import LinearProgress from '@mui/material/LinearProgress';
import Drawer from '@mui/material/Drawer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

//Cart Type
export type CartItemType = {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    amount:number;
    image:string
}

const getProducts = async () : Promise<CartItemType[]> =>
    await (await fetch("https://fakestoreapi.com/products")).json()

function App() {
    const [isCarOpen, setIsCarOpen]= useState(false)
    const [cartItems, setCartItems]= useState([] as CartItemType[])
    const {data, isLoading, error} = useQuery<CartItemType[]>("products", getProducts)

    const getTotalItems = (items:CartItemType[]) =>
        items.reduce((ack:number, item)=> ack + item.amount, 0)

    const handleAddToCart = (clickedItem: CartItemType) => {
        setCartItems(prev => {
            //1- qilinadigan ish (Is the alaready added the cart) yaniy productlarimiz cartga qo'shilgan bo'lsa
            const isItemCart = prev.find(item => item.id === clickedItem.id)
            if(isItemCart){
                return prev.map(item => (
                    item.id === clickedItem.id ? {...item, amount:item.amount +1}: item
                ))
            }
            // First item the item is added (yaniy 1 marta cartga qo'shilgan Card bo'lasa)
            return [...prev, {...clickedItem, amount:1}]
        })
    }

    const handleRemoveFromCert = (id:number) => {
        setCartItems(prev =>
            prev.reduce((ack, item) => {
                if(item.id === id){
                    if(item.amount === 1) return ack
                    return  [ ...ack, {...item, amount: item.amount - 1}]
                }else{
                    return [ ...ack, item]
                }
            }, [] as CartItemType[])
        )
    }

    if(isLoading) return  <LinearProgress />
    if(error) return <div>Something went wrong...</div>
  return (
    <Wrapper>
        <Drawer anchor="right" open={isCarOpen} onClose={() => setIsCarOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCert}/>
        </Drawer>
        <StyleButton  onClick={() => setIsCarOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon />
            </Badge>
        </StyleButton>
        <Grid container spacing={3}>
            {data?.map(item => (
                <Grid item key={item.id} xs={12} sm={3}>
                    <Item  item={item} handleAddToCart={handleAddToCart}/>
                </Grid>
            ))
            }
        </Grid>
    </Wrapper>
  );
}

export default App;
