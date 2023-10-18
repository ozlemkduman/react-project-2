import { useState } from "react";
import { createUser } from "../services/Firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = await createUser(email, password);
      navigate("/login");
    } catch (err) {
      setErrorMessage(err.message);
      console.log(err.message);
      switch (err.code) {
        case "auth/email-already-exists":
          setErrorMessage(
            "Bu e-posta zaten mevcut bir kullanıcı tarafından kullanılıyor. "
          );
          break;
        case "auth/email-already-in-use":
          setErrorMessage("Bu kullanıcı zaten mevcut.");
          break;
        case "auth/invalid-email":
          setErrorMessage("E-posta adresi girmelisiniz. ");
          break;
        case "auth/wrong-password":
          setErrorMessage("Yanlış parola girdiniz. ");
          break;
        case "auth/too-many-requests":
          setErrorMessage("Çok fazla sayıda  hata yaptınız. ");
          break;
        case "auth/user-not-found":
          setErrorMessage("Böyle bir kullanıcı yok! ");
          break;
        case "auth/weak-password":
          setErrorMessage("Şifrenizi en az 6 karakter girin. ");
          break;
        case "auth/missing-password":
          setErrorMessage("Lütfen e-mail ve şifrenizi tam olarak giriniz. ");
          break;
      }
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm">
          <h2>Kayıt Ol</h2>
          <hr />
          <form className="w-50">
            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label ">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onSubmit}
            >
              Giriş Yap
            </button>
          </form>
          <br />
          <div>{errorMessage}</div>
        </div>
      </div>
    </>
  );
}
