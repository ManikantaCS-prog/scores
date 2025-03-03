﻿import { useNavigate } from "react-router-dom";

const categories = [
    "Men's Singles",
    "Men's Doubles",
    "Women's Singles",
    "Women's Doubles",
    "Mixed Doubles",
];

const Carrom = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/carrom/${encodeURIComponent(category)}`);
    };

    return (
        <div className="p-8">
            <h1 className="text-black text-3xl font-bold text-center mb-6">Carrom</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 p-4">
                {categories.map((title) => (
                    <div
                        key={title}
                        className="p-6 w-56 h-56 bg-white shadow-lg rounded-xl flex items-center justify-center text-center text-xl font-semibold cursor-pointer hover:bg-gray-100 transition-all"
                        onClick={() => handleCategoryClick(title)}
                    >
                        {title}
                    </div>
                ))}
            </div>
            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700 transition-all"
            >
                ⬅ Back to Sports
            </button>
        </div>
    );
};

export default Carrom;