import { useContext } from "react";
import { Link } from "react-router-dom";
import { getAuth,  } from "firebase/auth";
import { AllContext } from "../context/SiteContex";

export default function ProductCard({ item }) {
    const data=useContext(AllContext)

    const styleImage = {
        width: "100%",
        height: "100px",
        objectFit: "fill"
    }
    const styleCard = {
        width: "220px",
        height: "400px",
        borderRadius: "20px",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        textAlign: "center"
    }

    const auth = getAuth()
    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm mb-3" style={styleCard}>
                        <div className="card d-flex flex-column align-items-center mb-1 " style={styleCard} >
                            <div className="images" style={{ width: "100px" }} >
                                <img src={item.image} style={styleImage} className="card-img-top" alt={item.title} />

                            </div>
                            <div className="card-body d-flex flex-column justify-content-between " >
                                <h5 className="card-title" style={{ padding: "5px", height: "100px", fontSize: "22px", width: "100px" }}>{item.title.substring(0, 15)} </h5>
                                <p className="card-text" style={{ padding: "5px", height: "70px", fontSize: "18px", width: "100px" }}>{item.description.substring(0, 20)} </p>
                                <div className="d-flex justify-content-center " style={{ height: "35px", fontSize: "18px", width: "80px", textAlign: "center" }} >

                                    {data.controlUser === true && < button onClick={() => data.handleClick(item)} className="btn btn-primary btn-sm me-1" style={{ height: "35px", fontSize: "16px", width: "85px", textAlign: "center" }}>{item.price}$</button>}
                                <Link to={`/product-info/${item.id}`} style={{ height: "35px", fontSize: "16px", width: "85px", textAlign: "center" }} className="btn btn-warning btn-sm ms-1">İncele</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}