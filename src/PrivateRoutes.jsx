import { Navigate } from "react-router-dom";

export default function PrivateRoutes({user,children}){
    if (!user?.eMail) {
        return <Navigate to="/" replace/>
    }else{
        return children
    }
    
}