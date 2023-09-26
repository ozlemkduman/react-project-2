import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard";
import { AllContext } from "../context/SiteContex";

export default function CategoryPage(){
    let {categoryName}=useParams()
    const[category,setCategory]=useState([]);
    const data= useContext(AllContext)
    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then(res=>res.json())
        .then(res=>setCategory(res))
    },[categoryName])
    
    return(
        <>
        <h3>KATEGORİ {categoryName.toUpperCase()}</h3>
        <div className="row row-cols-2">
            {category.map(item=> <ProductCard  item={item} key={item.id}/>)}

            </div>
        </>
    )
}