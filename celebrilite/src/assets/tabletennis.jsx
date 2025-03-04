import { useNavigate } from "react-router-dom";

const categories = [
    { name: "Men's Singles", image: "/static/images/mensinglett.webp" },
    { name: "Men's Doubles", image: "/static/images/mendoubtt.webp" },
    { name: "Women's Singles", image: "/static/images/womensinglett.webp" },
    { name: "Women's Doubles", image: "/static/images/womendoubtt.webp" },
    { name: "Mixed Doubles", image: "/static/images/mixdoubtt.webp" },
];

const Tabletennis = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/tabletennis/${encodeURIComponent(category.name)}`);
    };

    return (
        <div className="p-8">
            <h1 className="text-black text-3xl font-bold text-center mb-6">Table Tennis</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 p-4">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => handleCategoryClick(category)}
                    >
                        {/* Full-cover image */}
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        
                        {/* Always visible text (not just on hover) */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <h2 className="text-white text-2xl font-semibold text-center group-hover:text-yellow-400 transition-colors duration-300">
                                {category.name}
                            </h2>
                        </div>
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

export default Tabletennis;
