import { useNavigate } from "react-router-dom";

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
        </div>
    );
};

export default Carrom;