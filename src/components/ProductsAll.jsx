import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard";

export default function ProductsAll() {

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
            <div className="row row-cols-5">
            {product.map(item=> <ProductCard item={item} key={item.id}/>)}

            </div>
       
            
        </>
    )
}