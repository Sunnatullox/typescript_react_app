import {CartItemType} from "../../App";
import { Wrapper} from "./Item.styles";
import React from "react";
import Button from '@mui/material/Button';


type Props = {
    item:CartItemType,
    handleAddToCart : (clickedItem:CartItemType)=> void
}

const Item: React.FC<Props> = ({item, handleAddToCart}) =>{
   return(
       <Wrapper>
            <img src={item.image} alt={item.title}/>
           <div>
                <h3>{item.title}</h3>
               <p>{item.description}</p>
               <h3>${item.price}</h3>
           </div>
           <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </Wrapper>
   )
}

export default Item
