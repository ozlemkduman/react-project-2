
import React, { useState } from "react"
import { register } from "../Services/Firebase"
export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    async function onSubmit(e) {
        e.preventDefault();

      const  user = await register(email, password)
        
    }

    return (
        <>
            <form action="submit" onSubmit={onSubmit}>
                <input type="text"
                    className="name"

                    id=""
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Name"
                />
                <input type="password"
                    className="name"

                    id=""
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit"  >kayıt ol</button>

            </form>

        </>
    )
}