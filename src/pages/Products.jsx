
import ProductsAll from "../components/ProductsAll";

export default function Products({handleClick,user}) {

    

    return (
        <>
            <ProductsAll user={user} handleClick={handleClick}/>
       
            
        </>
    )
}