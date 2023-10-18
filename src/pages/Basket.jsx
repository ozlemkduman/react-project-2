import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AllContext } from "../context/SiteContext";
import { UserContext } from "../context/UserContext";

export default function Basket() {
    const data = useContext(AllContext)
    const ctxData = useContext(UserContext)
    const [product, setProduct] = useState([])

    useEffect(() => {
        const getProduct = JSON.parse(localStorage.getItem(`cart_${ctxData.userUid}`)) || []
        setProduct(getProduct);
        product.push(getProduct);


    }, [data.removeItemProduct])

    let prices = () => {
        const getPrices = JSON.parse(localStorage.getItem(`cart_${ctxData.userUid}`)) || []
        let priceArray = getPrices.map(item => item.price);
        let result = priceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        let totalPrice = Math.floor(result * 100) / 100;
        return totalPrice
    };
    function isThereProduct(key) {
        const item = JSON.parse(localStorage.getItem(key));
        return item && item.length !== 0;
    }
    const controlProduct = isThereProduct(`cart_${ctxData.userUid}`)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        {controlProduct ?
                            <div className="list-group">
                                {product.map(item =>
                                    <div key={item.id} className="list-group-item  d-flex flex-row justify-content-between">
                                        <Link className="list-group-item  d-flex   flex-fill" to={`/product-info/${item.id}`} >
                                            <img style={{ width: "30px" }} src={item.image} alt={item.title} />
                                            <span className="text-decoration-none text-body-secondary flex-fill ms-3 w-50"  >{item.title.substring(0, 25)}  </span>
                                            <span className="text-decoration-none text-body-secondary flex-fill ms-3 " >{item.price} $</span>
                                        </Link>
                                        <button className="btn btn-warning btn-sm " onClick={() => data.removeItemProduct(item)} >Sil</button>
                                    </div>
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