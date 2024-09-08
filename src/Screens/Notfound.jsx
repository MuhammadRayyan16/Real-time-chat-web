import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
            <p className="text-2xl text-gray-600 mt-4">Oops! Page not found.</p>
            <p className="text-lg text-gray-500 mt-2">
                The page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Go back Home
            </Link>
        </div>
    );
};

export default NotFound;
