import {  useState } from 'react'
import SiteRoutes from './SiteRoutes'
import Navbar from './components/Navbar'

function App({ item }) {

  const user = { id: 1, name: "özlem" }

  const [isLogIn, setIsLogIn] = useState(() => {
    const user = localStorage.getItem("users");
    return user ? true : false;
  });


  const handleLogin = () => {
    setIsLogIn(true);
    localStorage.setItem("users", JSON.stringify(user))
    
  }

  const handleLogout = () => {
    setIsLogIn(false);
    localStorage.removeItem("users")

  }

  
  return (
    <>
      <Navbar isLogIn={isLogIn} handleLogout={handleLogout} handleLogin={handleLogin} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-5">

            <SiteRoutes item={item} handleLogout={handleLogout} handleLogin={handleLogin} isLogIn={isLogIn}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
