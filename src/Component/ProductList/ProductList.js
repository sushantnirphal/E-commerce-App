import Product from '../Product/Product';
import '../Product/Product.module.css';
function ProductList(props) {
   

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      
    {
       props.products.map(function (product){
          return <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
          />
        })
     }
    </div>

  
  )
}

export default ProductList
