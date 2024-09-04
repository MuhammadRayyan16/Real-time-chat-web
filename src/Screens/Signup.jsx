import { auth, db } from "./Database/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [psw, setPsw] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, psw)
            .then((userCredential) => {
                const user = userCredential.user;

                return addDoc(collection(db, "users"), {
                    email: email,
                    name: name,
                    userId: user.uid
                });
            })
            .then(() => {
                setName("");
                setEmail("");
                setPsw("");

                Swal.fire({
                    title: "Good job!",
                    text: "User signed up successfully!",
                    icon: "success"
                });

                navigate("/Login");
            })
            .catch((error) => {
                console.error("Error during signup or Firestore operation:", error);

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-center text-gray-600">Sign up</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Full Name"
                            required
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
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
                        Sign up
                    </button>
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link to="/Login" className="text-indigo-600 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
