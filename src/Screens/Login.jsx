import { auth } from "./Database/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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


                Swal.fire({
                    title: "Good job!",
                    text: "User logged in successfully!",
                    icon: "success"
                });

                navigate("/Home");
            })
            .catch((error) => {
                console.error("Error during login:", error);


                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-4xl font-bold text-center text-gray-600">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            required
                            value={psw}
                            onChange={(event) => setPsw(event.target.value)}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
