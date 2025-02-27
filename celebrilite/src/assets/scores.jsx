import { Link } from "react-router-dom";

const sports = [
    { name: "Cricket", image: "static/images/cricket.jpg", path: "/cricket" },
    { name: "Badminton", image: "static/images/badminton.jpg", path: "/badminton" },
    { name: "Table Tennis", image: "static/images/tabletennis.jpg", path: "/tabletennis" },
    { name: "Carrom", image: "static/images/carrom.jpg", path: "/carrom" },
    { name: "Darts", image: "static/images/darts.jpg", path: "/darts" },
    { name: "Fun Friday", image: "static/images/funfriday.png", path: "/funfriday" }, 
];

const Scores = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center text-Red-400 mb-8">Choose Your Sport</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {sports.map((sport) => (
                    <Link to={sport.path} key={sport.name} className="group">
                        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <img
                                src={sport.image}
                                alt={sport.name}
                                className="w-full h-60 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-white text-3xl font-semibold">{sport.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Scores;
