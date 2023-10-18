import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";

const auth = getAuth(app);

// Kayıt alma bölümü
const createUser = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        // Signed in 
        return user;
    } catch (error) {
        throw error;
    }
}

// Giriş yapma bölümü
const signInUser = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        return user;
    } catch (error) {
        throw error;
    }
}

export { createUser, signInUser, auth }