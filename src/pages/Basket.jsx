import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Basket() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const getProduct = JSON.parse(localStorage.getItem("products")) || []

        setProduct(getProduct);
        product.push(getProduct);

    }, [])
    let prices=()=>{
        const getPrices = JSON.parse(localStorage.getItem("products")) || []
        let priceArray = getPrices.map(item => item.price);
        let result= priceArray.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
        let totalPrice= Math.floor(result * 100) / 100;
        return totalPrice
    };
    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="list-group">
                            {product.map(item =>
                                <Link key={item.id} className="list-group-item  d-flex justify-content-between" to={`/product-info/${item.id}`}
                                >
                                    <span className="text-decoration-none text-body-secondary" key={item.id}>{item.title.substring(0, 50)}  </span>
                                    <span className="text-decoration-none text-body-secondary " >{item.price} $</span></Link>
                            )}
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="list-group border rounded text-body-secondary ">
                            <a className="list-group-item text-center">Toplam Tutar</a>
                            <a className="list-group-item text-end">{ `${prices()} $`}</a>
                            <button className="btn btn-primary btn-sm">Satın Al</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}