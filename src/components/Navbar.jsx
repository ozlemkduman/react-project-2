import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { auth } from "../services/Firebase";
import { UserContext } from "../context/UserContext";
export default function Navbar() {
  const dataCtx = useContext(UserContext);

  const signOutUser = async () => {
    await signOut(auth);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container ">
          <Link to={"/"} className="navbar-brand">
            Privacy Shop
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink to={"/"} className="nav-link">
                Anasayfa
              </NavLink>
              <NavLink to={"/products"} className="nav-link">
                Ürünler
              </NavLink>
              <NavLink to={"/about"} className="nav-link">
                Hakkımızda
              </NavLink>
              <NavLink to={"/contact"} className="nav-link">
                İletişim
              </NavLink>

              {dataCtx.controlUser === false ? (
                <>
                  <NavLink to={"/register"} className="nav-link">
                    Kayıt Ol
                  </NavLink>
                  <NavLink to={"/Login"} className="nav-link">
                    Giriş
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to={"/"} className="nav-link " onClick={signOutUser}>
                    Logout
                  </NavLink>
                  <NavLink to="/basket" className="nav-link ">
                    Sepet
                  </NavLink>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
