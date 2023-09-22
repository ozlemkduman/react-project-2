import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function ProductInfo({ handleClick ,user}) {

    const { id } = useParams();
    const navigate = useNavigate()
    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setSingleProduct(json))
    }, [id]);

    if (!singleProduct) return <p>Ürün yükleniyor...</p>; // Yüklenme mesajı
    const handleBackButtonClick = () => {
        navigate("/products");
    };
    

    return (
        <div className="container ">
            <div className="row">
                <div className="col-sm-12 m-4 ">
                    <div className=" product-info-card p-3 d-flex flex-column align-items-center border rounded">
                        <img src={singleProduct.image} alt={singleProduct.title} />
                        <h2 className="mb-4">{singleProduct.title}</h2>
                        <p>{singleProduct.description}</p>
                        <div className="d-flex justify-content-around">
                            {user && <button className="btn btn-primary me-3" onClick={() => handleClick(singleProduct)}>{singleProduct.price} $</button>}
                            <button className="btn btn-warning" onClick={handleBackButtonClick} >Turn to Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
