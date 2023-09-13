import { useState } from 'react'
import SiteRoutes from './SiteRoutes'
import Navbar from './components/Navbar'
import { useNavigate } from 'react-router-dom';

function App({ item }) {



  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user || null;
  });

  const [isLogIn, setIsLogIn] = useState(() => {

    const user = localStorage.getItem("user");
    return user ? true : false;
  });


  const handleLogin = () => {
    const user = { eMail: userEmail, password: userPassword }
    setIsLogIn(true);
    setUserInfo(user)
    localStorage.setItem("user", JSON.stringify(user))
    navigate("/")

  }

  const handleLogout = () => {
    setIsLogIn(false);
    localStorage.removeItem("user")

  }
  
  function handleClick(item) {
    let basketAll = JSON.parse(localStorage.getItem("products")) ?? []
    const basketIndex = basketAll.findIndex(product => item.id === product.id)
    if (basketIndex >= 0) {
      basketAll = basketAll.filter(local => item.id !== local.id);
    } else {
      basketAll.push({ id: item.id,  title:item.title, price: item.price })
    }
    localStorage.setItem("products", JSON.stringify(basketAll))
    
  }

  

  return (
    <>
      <Navbar isLogIn={isLogIn} handleLogout={handleLogout} handleLogin={handleLogin} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-5">

            <SiteRoutes
              user={userInfo}
              item={item}
              handleLogout={handleLogout}
              handleLogin={handleLogin}
              isLogIn={isLogIn}
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              userPassword={userPassword}
              setUserPassword={setUserPassword}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
