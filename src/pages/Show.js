import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {fetchProductById} from '../lib/api.js'
import Product from '../Component/Product/Product.js';
import CircularProgress from '@mui/material/CircularProgress'
import ShowProduct from '../Component/ShowProduct/ShowProduct.js';


function Show() {
    const { productId }=useParams();
    const [product,setProduct] = useState(null);

    useEffect(()=>{
        (async()=>{
            try {
                const data= await fetchProductById(productId);
                setProduct(data)
               
             } catch (e) {
                 console.log('something went wrong');
             }
        })()
        
    })

    if (!product) {
        return <CircularProgress />
    }

    return (
        <div>
            
            <h1 className='mt-32 text-3xl font-bold'>Show page</h1>
            {
                product
                &&
                <ShowProduct
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                />
            }
        </div>
    )
}

export default Show







