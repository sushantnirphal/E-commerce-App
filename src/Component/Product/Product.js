import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Product = (props) =>{

    return  <figure className="product" >
    <img width="250px" src={props.image} alt="Apple_Watch" />
    <h2> {props.tilte}</h2>
    <h3>{props.price}$</h3>
    <p>{props.description && props.description.substring(0,100)}</p>
    <Button to={`/products/${props.id}`} component={Link} variant='outlined' size='small'>BuyNow</Button>
    </figure>
}

export default Product;