import { useState, useEffect } from "react";

const categories = ["Cricket", "Carrom", "Table Tennis", "Darts", "Fun Friday", "Badminton"];

const initialTeams = [
    { name: "Team A", scores: [75, 80, 90, 85, 78, 88] },
    { name: "Team B", scores: [85, 89, 76, 92, 81, 80] },
    { name: "Team C", scores: [65, 72, 70, 68, 75, 78] },
    { name: "Team D", scores: [88, 85, 91, 89, 86, 90] },
    { name: "Team E", scores: [70, 68, 65, 72, 71, 75] },
    { name: "Team F", scores: [78, 80, 85, 88, 84, 83] },
    { name: "Team G", scores: [90, 95, 92, 88, 94, 96] },
    { name: "Team H", scores: [76, 74, 80, 79, 77, 81] },
];

const Leaderboard = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        // Calculate total scores and sort teams in descending order
        const sortedTeams = initialTeams
            .map((team) => ({
                ...team,
                total: team.scores.reduce((acc, score) => acc + score, 0),
            }))
            .sort((a, b) => b.total - a.total);

        setTeams(sortedTeams);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
                <h1 className="text-4xl font-bold text-center text-blue-700 py-4">
                    🏆 Leaderboard 🏆
                </h1>

                {/* Table Container */}
                <div className="overflow-hidden rounded-lg border border-gray-300">
                    <table className="w-full table-fixed border-collapse">
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg">
                                <th className="py-3 px-4 text-left w-16">Rank</th>
                                <th className="py-3 px-18 text-left w-48">Team</th>
                                {categories.map((category, i) => (
                                    <th key={i} className="py-3 px-2 text-center">{category}</th>
                                ))}
                                <th className="py-3 px-4 text-center w-24"></th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {teams.map((team, index) => (
                                <tr
                                    key={team.name}
                                    className={`shadow-md ${index === 0 ? "bg-yellow-400 font-bold" : "bg-gray-50"
                                        } hover:shadow-lg hover:bg-gray-200 transition-all rounded-lg`}
                                >
                                    <td className="py-3 px-4 text-lg text-center">{index + 1}</td>
                                    <td className="py-3 px-4 font-semibold">{team.name}</td>
                                    {team.scores.map((score, i) => (
                                        <td key={i} className="py-3 px-2 text-center">{score}</td>
                                    ))}
                                    <td className="py-3 px-4 text-center font-bold text-blue-600">
                                        {team.total}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
