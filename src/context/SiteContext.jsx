import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const AllContext = createContext();
const SiteContextProvider = ({ children }) => {

  const ctxData = useContext(UserContext)
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [buttonValue, setButtonValue] = useState({});

  const auth = getAuth();

  function initialButtonValue(id) {
    let basketAll = JSON.parse(localStorage.getItem(`cart_${ctxData.userUid}`)) || [];
    return basketAll.some((product) => product.id === id)
      ? "Sepetten Kaldır"
      : "Sepete Ekle";
  }

  function handleClick(item) {
    let basketAll = JSON.parse(localStorage.getItem(`cart_${ctxData.userUid}`)) || [];

    const inBasket = basketAll.some((product) => product.id === item.id);
    if (inBasket) {
      basketAll = basketAll.filter((local) => item.id !== local.id);
      setButtonValue((prev) => ({
        ...prev,
        [item.id]: initialButtonValue(item.id),
      }));
      setToastMessage("Ürün Kaldırıldı");
    } else {
      basketAll.push({
        id: item.id,
        uid: ctxData.userUid, 
        title: item.title,
        image: item.image,
        price: item.price,
      });

      console.log(basketAll);
      setButtonValue((prev) => ({
        ...prev,
        [item.id]: initialButtonValue(item.id),
      }));
      setToastMessage("Ürün Eklendi");
    }

    // Güncel sepeti, `cart_${ctxData.userUid}` anahtarı yerine "cart_<UID>" formatında bir anahtarla geri kaydedin.
    localStorage.setItem(`cart_${ctxData.userUid}`, JSON.stringify(basketAll));
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  }

  useEffect(() => {
    let basketAll = JSON.parse(localStorage.getItem(`cart_${ctxData.userUid}`)) || [];
    let newButtonValues = {};
    basketAll.forEach((product) => {
      newButtonValues[product.id] = initialButtonValue(product.id);
    });
    setButtonValue(newButtonValues);
  }, [localStorage.getItem(`cart_${ctxData.userUid}`)]);

  const [product, setProduct] = useState([]);

  function removeItemProduct(e) {
    let getProduct = JSON.parse(localStorage.getItem(`cart_${ctxData.userUid}`));
    const isThereProduct = getProduct.findIndex((item) => e.id === item.id);
    if (isThereProduct >= 0) {
      getProduct = getProduct.filter((localItem) => e.id !== localItem.id);
      localStorage.setItem(`cart_${ctxData.userUid}`, JSON.stringify(getProduct));
    }
    const updatedProductsInState = product.filter((item) => item.id !== e.id);

    setProduct(updatedProductsInState);
  }

  //Navbar, PrivateRoutes
  const [controlUser, setControlUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setControlUser(true);
        // ...
      } else {
        setControlUser(false);
      }
    });
  }, []);

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
    setControlUser,
    auth,
    buttonValue,
    setButtonValue,
    initialButtonValue,
  };

  return (
    <>
      <AllContext.Provider value={data}>{children}</AllContext.Provider>
    </>
  );
};

export { SiteContextProvider, AllContext };
