import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("auth", true);
        window.location.href = "/rules";
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Admin Login</h2>
                <form onSubmit={handleSubmit} className="w-full">
                    <input className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Login</button>
                </form>
                <p className="mt-4 text-sm text-gray-600"><b>Note:</b>This is only for Admin</p>
            </div>
        </div>
    );
}

export default Login;
