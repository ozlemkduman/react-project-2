import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login({handleLogin}){

    
    return(
        <>
        <h2>Login ekranı</h2>
        <Link    to="/" className="btn btn-primary" onClick={ handleLogin} >Giriş Yap</Link>
        </>
    )
}