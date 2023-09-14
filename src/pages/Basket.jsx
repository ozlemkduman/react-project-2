import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Basket({ removeItemProduct }) {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const getProduct = JSON.parse(localStorage.getItem("products")) || []

        setProduct(getProduct);
        product.push(getProduct);

    }, [removeItemProduct])
    let prices = () => {
        const getPrices = JSON.parse(localStorage.getItem("products")) || []
        let priceArray = getPrices.map(item => item.price);
        let result = priceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        let totalPrice = Math.floor(result * 100) / 100;
        return totalPrice
    };

    function isThereProduct(key) {
        const item = JSON.parse(localStorage.getItem(key));
        return item && item.length !== 0;    }

    const controlProduct = isThereProduct("products")
    console.log(controlProduct);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        {controlProduct ?
                            <div className="list-group">
                                {product.map(item =>
                                    <React.Fragment key={item.id}>
                                        <Link className="list-group-item  d-flex justify-content-between" to={`/product-info/${item.id}`}
                                        >
                                            <img style={{ width: "30px" }} src={item.image} alt={item.title} />
                                            <span className="text-decoration-none text-body-secondary" >{item.title}  </span>
                                            <span className="text-decoration-none text-body-secondary " >{item.price} $</span>
                                        </Link>
                                        <button className="btn btn-warning btn-sm" onClick={() => removeItemProduct(item)} >Sil</button>

                                    </React.Fragment>
                                )}
                            </div> :
                            <div className="list-group">
                                <li className="list-group-item  d-flex justify-content-between"
                                >Sepetiniz Boş...
                                </li>
                            </div>
                        }

                    </div>
                    <div className="col-sm-3">
                        <div className="list-group border rounded text-body-secondary ">
                            <a className="list-group-item text-center">Toplam Tutar</a>
                            <a className="list-group-item text-end ">{`${prices()} $`}</a>
                            <button className="btn btn-primary btn-sm">Satın Al</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}