import Reac,{useContext} from 'react'
import Button from '@mui/material/Button';
import CartContext from '../../Store/Cart-Context';

function ShowProduct(props) {

        const {addToCart} = useContext(CartContext);
        function addToCartHandler(){
            const newItem ={
                id:props.id,
                title:props.title,
                price:props.price,
                image:props.image
            }
           addToCart(newItem);
        }

        return  <figure className="product ml-5 mt-2" >
        <img width="250px" src={props.image} alt="Apple_Watch" />
        <h2> {props.tilte}</h2>
        <h3>{props.price}$</h3>
        <p>{props.description && props.description.substring(0,100)}</p>
        <Button  onClick={addToCartHandler}   variant='outlined' size='small'>AddToCart</Button>
        </figure>
    
}

export default ShowProduct
