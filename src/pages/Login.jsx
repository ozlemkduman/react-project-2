
  export default function Login({ handleLogin, userEmail, userPassword, setUserEmail, setUserPassword }) {


    return (
        <>
            <div className="row">
                <div className="col-sm">
                    <form className="w-50">
                        <div className="mb-3 ">
                            <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
                            <input type="email"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password"
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                                className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleLogin} >Giriş Yap</button>

                    </form>
                </div>
            </div>

        </>
    )
}
 