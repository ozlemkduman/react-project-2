import { createContext ,useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/Firebase";
const AllContext = createContext();

const SiteContextProvider = ({ children }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("")



    function handleClick(item) {
        let basketAll = JSON.parse(localStorage.getItem("products")) ?? []
        const basketIndex = basketAll.findIndex(product => item.id === product.id)
        if (basketIndex >= 0) {
            basketAll = basketAll.filter(local => item.id !== local.id);
            setToastMessage("Ürün Kaldırıldı")
            setShowToast(true)
        } else {
            basketAll.push({ id: item.id, title: item.title, image: item.image, price: item.price })
            setToastMessage("Ürün Eklendi")
            setShowToast(true)
        }

        localStorage.setItem("products", JSON.stringify(basketAll))

        setTimeout(() => {
            setShowToast(false)

        }, 1000);


    }
    const [product, setProduct] = useState([])

    function removeItemProduct(e) {
        let getProduct = JSON.parse(localStorage.getItem("products"))
        const isThereProduct = getProduct.findIndex(item => e.id === item.id);
        if (isThereProduct >= 0) {
            getProduct = getProduct.filter(localItem => e.id !== localItem.id)
            localStorage.setItem("products", JSON.stringify(getProduct))

        }
        const updatedProductsInState = product.filter(item => item.id !== e.id);

        setProduct(updatedProductsInState)


    }

    //ProductCard

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

    const data = {
        showToast,
        toastMessage,
        product,
        setShowToast,
        setToastMessage,
        setProduct,
        handleClick,
        removeItemProduct,
        controlUser,
        setControlUser
    }





    return (
        <>
            <AllContext.Provider value={data}>
                {children}
            </AllContext.Provider>
        </>
    )
}

export { SiteContextProvider, AllContext }