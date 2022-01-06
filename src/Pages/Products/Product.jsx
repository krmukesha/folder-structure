import React, { useState } from 'react'

const Product = () => {
    const[value, setValue]=useState(0)
    let result;
    function inputHandler(){
        setValue(result = value+1)
    }
    return (
        <div className="container">
        <div className="row">
            <h1>Product</h1>
            <p>{value}</p>
            <button className='btn btn-primary w-25 m-auto' onClick={inputHandler}>Positive</button>
        </div>
    </div>
    )
}

export default Product
