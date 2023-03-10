import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Input from "./form/Input"


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setJwtToken } = useOutletContext();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email/pass", email,password)
        if (email ==="test@test.com") {
            setJwtToken("testJwt");
        }
    }
    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <Input
                    title = "Email Address"
                    type  = "email"
                    className = "form-control"
                    name = "email"
                    autoComplete = "email-new"
                    onChange = {(event) => setEmail(event.target.value)}
                    />

                <Input
                    title = "Password"
                    type  = "password"
                    className = "form-control"
                    name = "password"
                    autoComplete = "password-new"
                    onChange = {(event) => setPassword(event.target.value)}
                    />
                <hr/>
                <input 
                    type ="submit"
                    className="btn btn-primary"
                    value = "Login"
                    />
            </form>
        </div>
    )
}

export default Login