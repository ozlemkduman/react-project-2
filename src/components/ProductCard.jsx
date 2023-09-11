import { Link } from "react-router-dom";
import ProductInfo from "./ProductInfo";

export default function ({ item }) {
    return (
        <>
            <div className="row">
                <div className="col-sm">    
                    <div className="card p-2" >
                        <img src={item.image} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title} </h5>
                            <p className="card-text">{item.description.substring(0, 30)} </p>
                            <Link  to={`/product-info/${item.id}`} className="btn btn-primary lead" >{item.price}</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}