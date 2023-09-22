import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";

const auth = getAuth(app);

// Kayıt alma bölümü
const createUser = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
            // Signed in 
            const user = userInfo.user;
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}

// Giriş yapma bölümü
const signInUser= async(email,password)=>{
    signInWithEmailAndPassword(auth,email,password).then(userInfo=>{
        const user=userInfo.user;
        return user
    })
}


export  {createUser,signInUser,auth}