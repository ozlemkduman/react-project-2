import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function ProductInfo({ handleClick }) {

    const { id } = useParams();

    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setSingleProduct(json))
    }, [id]);

    if (!singleProduct) return <p>Ürün yükleniyor...</p>; // Yüklenme mesajı


    return (
        <div className="container ">
            <div className="row">
                <div className="col-sm-12 m-4 ">
                    <div className=" product-info-card p-3 d-flex flex-column align-items-center border rounded">
                        <h2 className="mb-4">{singleProduct.title}</h2>
                        <p>{singleProduct.description}</p>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-primary me-3" onClick={() => handleClick(singleProduct)}>{singleProduct.price} $</button>
                            <Link to="/basket" className="btn btn-warning" >Turn to Basket</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
