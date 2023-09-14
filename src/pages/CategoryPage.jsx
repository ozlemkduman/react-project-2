import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard";

export default function CategoryPage({handleClick,user}){
    let {categoryName}=useParams()
    const[category,setCategory]=useState([]);

    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then(res=>res.json())
        .then(res=>setCategory(res))
    },[categoryName])
    
    return(
        <>
        <h3>KATEGORİ {categoryName.toUpperCase()}</h3>
        <div className="row row-cols-2">
            {category.map(item=> <ProductCard user={user} handleClick={handleClick} item={item} key={item.id}/>)}

            </div>
        </>
    )
}