import ProductsAll from "../components/ProductsAll";

export default function Home({ item, handleClick,user }) {
    return (
        <>
            
            <ProductsAll user={user} item={item} handleClick={handleClick} />
        </>
    )
}