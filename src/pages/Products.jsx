
import ProductsAll from "../components/ProductsAll";

export default function Products({handleClick,user}) {

    

    return (
        <>
        <div className="row row-cols-3">
            <ProductsAll user={user} handleClick={handleClick}/>
            </div>
            
        </>
    )
}