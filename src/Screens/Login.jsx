import { auth } from "./Database/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [psw, setPsw] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, psw)
            .then((userCredential) => {
                setEmail("");
                setPsw("");

                alert('User logged in successfully!');
                navigate("/Home");
            })
            .catch((error) => {
                console.error("Error during login:", error);
                alert(`Error: ${error.message}`);
            });
    }

    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        name="pswd"
                        placeholder="Password"
                        required
                        value={psw}
                        onChange={(event) => setPsw(event.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;