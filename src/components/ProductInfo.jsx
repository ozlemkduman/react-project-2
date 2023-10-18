import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AllContext } from "../context/SiteContext";
import { UserContext } from "../context/UserContext";

export default function ProductInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState(null);
  const data = useContext(AllContext);
  const dataCtx = useContext(UserContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
  }, [id]);

  if (!singleProduct) return <p>Ürün yükleniyor...</p>; // Yüklenme mesajı
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm-12 m-4 ">
          <div className=" product-info-card p-3 d-flex flex-column align-items-center border rounded">
            <img src={singleProduct.image} alt={singleProduct.title} />
            <h2 className="mb-2">{singleProduct.title}</h2>
            <p>{singleProduct.description}</p>
            <span
              className="card-price "
              style={{
                padding: "5px",
                marginBottom: "20px",
                height: "20px",
                fontSize: "18px",
                width: "100px",
              }}
            >
              {singleProduct.price}$
            </span>

            <div className="d-flex justify-content-around">
              {dataCtx.controlUser && (
                <button
                  className="btn btn-primary me-3"
                  onClick={() => data.handleClick(singleProduct)}
                >
                  {data.buttonValue[singleProduct.id] ||
                    data.initialButtonValue(singleProduct.id)}
                </button>
              )}
              <button
                className="btn btn-warning"
                onClick={handleBackButtonClick}
              >
                Turn to Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
