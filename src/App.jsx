import { useEffect, useState } from 'react'
import SiteRoutes from './SiteRoutes'
import Navbar from './components/Navbar'

function App({ item }) {


 
 
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
  const [product,setProduct]=useState([])

  function removeItemProduct(e) {
    let getProduct = JSON.parse(localStorage.getItem("products"))
    const isThereProduct = getProduct.findIndex(item => e.id === item.id);
    if (isThereProduct >= 0) {
      getProduct = getProduct.filter(localItem => e.id !== localItem.id)
      localStorage.setItem("products",JSON.stringify(getProduct))
      
    }
    const updatedProductsInState = product.filter(item => item.id !== e.id);

    setProduct(updatedProductsInState)

    
  }


  return (
    <>
      <Navbar  />
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 mt-5 ">
            {showToast &&
              <span className=" toast-body position-sticky z-3 top-0 start-100 w-25  p-2  border rounded text-bg-success">
                {toastMessage}
              </span>

            }

            <SiteRoutes
              removeItemProduct={removeItemProduct}
              item={item}             
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
