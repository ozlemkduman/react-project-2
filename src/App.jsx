import { useContext } from 'react'
import SiteRoutes from './SiteRoutes'
import Navbar from './components/Navbar'
import { AllContext } from './context/SiteContex'

function App({ item }) {


 const data=useContext(AllContext)
 
  

  return (
    <>
      <Navbar  />
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 mt-5 ">
            {data.showToast &&
              <span className=" toast-body position-sticky z-3 top-0 start-100 w-25  p-2  border rounded text-bg-success">
                {data.toastMessage}
              </span>

            }

            <SiteRoutes
            
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
