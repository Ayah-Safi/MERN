import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
    
const Main = (props) => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);




   

    const removeFromDom = productId => {
        console.log('remove from dom');
        setProducts(products.filter(product => product._id != productId));
    }

    const addToDom = product => {
        setProducts([...products, product]);
    }
    
    return (
        <div>
           <ProductForm addToDom={addToDom}/>
           <hr/>
           {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}
    
export default Main;