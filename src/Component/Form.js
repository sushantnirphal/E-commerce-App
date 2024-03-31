import React,{useRef} from 'react'
import {v4 as uuid} from 'uuid'




function Form(props) {

    const NameInputRef = useRef();
    const ImgUrlRef = useRef();
    const PriceInputRef = useRef();
    const DescInputRef = useRef();


    const formSubmitHandler= (event)=>{
        event.preventDefault();
        console.log('form submitted');
       

        const newProduct ={
            id:uuid(),
            name:NameInputRef.current.value,
            ImgUrl:ImgUrlRef.current.value,
            price:PriceInputRef.current.value,
            desc:DescInputRef.current.value,
        }
        
        props.addProduct(newProduct);
    }

  return (
    <form >
      <h2>This is the Form</h2>
      <div>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' placeholder='Name of product' ref={NameInputRef}/>
      </div>
      <div>
      <label htmlFor="imgUrl">imgUrl</label>
      <input type="text" id='imgUrl' placeholder='imgurl' ref={ImgUrlRef} />
      </div>

      <div>
      <label htmlFor="price">Price</label>
      <input type="number" id='price' placeholder='price of product' ref={PriceInputRef} />
      </div>
      <div>
      <label htmlFor="desc">Desc</label>
      <input type="text" id='desc' placeholder='desc of product' ref={DescInputRef} />
      </div>
      <button>Add</button>

    </form>
  )
}

export default Form
