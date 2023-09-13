import ProductsAll from "../components/ProductsAll";

export default function Home({item,handleClick}){
    return(
        <>
        <ProductsAll item={item} handleClick={handleClick} />
        </>
    )
}