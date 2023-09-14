import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard";

export default function ProductsAll({handleClick,user}) {

    const [product,setProduct]=useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(json=>setProduct(json))
    }, []);


    return (
        <>
        <h2>Tüm Ürünler</h2>
        <hr/>
        
            <div className="row row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
            {product.map(item=> <ProductCard user={user} handleClick={handleClick} item={item} key={item.id}/>)}

            </div>
       
            
        </>
    )
}