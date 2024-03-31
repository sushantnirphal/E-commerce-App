import ProductList from "../Component/ProductList/ProductList"
import { useEffect, useState } from "react";
import {v4 as uuid} from 'uuid';
import MainNavigation from "../Component/MainNavigation/MainNavigation";
import axios from "axios";
function AllProducts() {
    const intialProducts =[
        {
            id:uuid(),
            title:'Apple Watch-1',
            image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra2-202403_GEO_IN?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1708673881190",
            price:'$800',
            description:"Brand new watch of apple",
           
          },
            {
            id:uuid(),
            title:'Apple Watch-2',
            image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-s9-202403?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1707857916163",
            price:'$500',
            description:"Brand new watch of apple",
            
          },
            {
            id:uuid(),
            title:'Apple Watch-3',
            image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/49-cell-titanium-trail-green-gray-ultra_GEO_IN?wid=4000&hei=4000&fmt=p-jpg&qlt=95&.v=1693685876777",
            price:'$800',
            description:"Brand new watch of apple",
          
          },
            {
            id:uuid(),
            title:'Apple Watch -4',
            image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/40-nc-alum-starlight-sport-loop-starlight?wid=4000&hei=4000&fmt=p-jpg&qlt=95&.v=1694042115087",
            price:'$600',
            description:"Brand new watch of apple",
            
          }
        ]
        
        const [products,setProducts] =useState(intialProducts);
        
        const addProduct =  (product)=>{
        
          setProducts(()=>{
            return [...products,product]; 
          })
        }

       

        useEffect(()=>{
          async  function fetchData(){
                    try{
                    const res = await axios.get('https://fakestoreapi.com/products');
                    
                    setProducts(()=>{
                        return res.data;
                    })
                    console.log(res);
                    }
                     catch(error){
                        console.log(error);
                     }
            }

            fetchData();
        },[])
  return (
    <div>
   
    
    <h1 className="mt-20">All Products</h1>
   <ProductList className="" products={products}  />
    </div>
  )
}

export default AllProducts
