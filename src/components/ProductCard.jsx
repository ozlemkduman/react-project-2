import { useState } from "react";
import { Link } from "react-router-dom";

export default function ({ item, handleClick, user }) {

    return (
        <>

            <div className="row">
                <div className="col-sm">
                    <div className="card p-2" >
                        <img src={item.image} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title} </h5>
                            <p className="card-text">{item.description.substring(0, 30)} </p>
                            <div className="d-flex justify-content-center" >

                                {user && <button onClick={() => handleClick(item)} className="btn btn-primary btn-sm ">{item.price}$</button>}
                                <Link to={`/product-info/${item.id}`} className="btn btn-warning btn-sm">İncele</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}