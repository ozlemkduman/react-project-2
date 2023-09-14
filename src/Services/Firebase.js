import app from "../firebaseConfig";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";



const auth = getAuth();



  export const register= async (email,password)=>{
   await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }


