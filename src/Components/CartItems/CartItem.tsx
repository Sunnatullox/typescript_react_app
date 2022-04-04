import {CartItemType} from "../../App";
import {Wrapper} from "./CartItem.style";
import React from "react";
import Button from "@mui/material/Button";

type Props = {
    item:CartItemType;
    addToCart : (clickedItem : CartItemType) => void;
    removeFromCart:(id:number) => void;
}

const CartItem :React.FC<Props> = ({item, addToCart, removeFromCart}) => {
    return(
        <Wrapper>
            <h3>{item.title}</h3>
            <div className="info">
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.amount * item.price)}</p>
            </div>
            <div className='buttons'>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(item.id)}>
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => addToCart(item)}>
                    +
                </Button>
            </div>
            <img src={item.image} alt={item.title}/>
        </Wrapper>
    )
}
export default CartItem
