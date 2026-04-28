import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import Ikon untuk Error dan Loading
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    /* navigate, state & handleChange */
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    /* process form */
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(""); // Reset error setiap kali submit ulang

        axios
            .post("https://dummyjson.com/user/login", {
                username: dataForm.email, // API DummyJSON pakai 'username'
                password: dataForm.password,
                expiresInMins: 30,
            })
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.data.message);
                    return;
                }
                // Redirect ke Dashboard jika berhasil login
                navigate("/"); 
            })
            .catch((err) => {
                if (err.response) {
                    setError(err.response.data.message || "An error occurred");
                } else {
                    setError(err.message || "An unknown error occurred");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    /* error & loading status */
    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null;

    const loadingInfo = loading ? (
        <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
            <ImSpinner2 className="me-2 animate-spin text-lg" />
            Mohon Tunggu...
        </div>
    ) : null;

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Welcome Back 👋
            </h2>

            {/* Indikator Error dan Loading */}
            {errorInfo}
            {loadingInfo}

            {/* Form utama */}
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email" // Penting: disesuaikan dengan dataForm state
                        value={dataForm.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password" // Penting: disesuaikan dengan dataForm state
                        value={dataForm.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="********"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading} // Mematikan tombol saat proses loading
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    Login
                </button>
            </form>
        </div>
    );
}