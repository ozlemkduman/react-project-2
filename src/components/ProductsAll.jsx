import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard";

export default function ProductsAll({handleClick}) {

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
            <div className="row row-cols-4">
            {product.map(item=> <ProductCard handleClick={handleClick} item={item} key={item.id}/>)}

            </div>
       
            
        </>
    )
}