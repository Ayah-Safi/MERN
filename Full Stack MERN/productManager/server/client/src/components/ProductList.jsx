import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {props.products.map((product, i) =>
                <p key={i}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            )}
        </div>
    );
}

export default ProductList;
