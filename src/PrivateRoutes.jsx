import { Navigate, useNavigate } from "react-router-dom";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";

export default function PrivateRoutes({user,children}){
    const navigate = useNavigate()
    const auth=getAuth()
    const [controlUser, setControlUser] = useState(false)
  
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setControlUser(true)
                // ...
            } else {
                setControlUser(false)
            }
        });
    }, [])
  


    if (controlUser===false) {
        navigate("/")
        return 
    }else{
        return children
    }
    
}