import React from "react";

const Card = ({ children, className = "" }) => {
    return (
        <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`}>
            {children}
        </div>
    );
};

const Cricket = () => {
    const pointsTable = {
        A: [
            { team: "India", played: 5, won: 4, lost: 1, nrr: "+1.2" },
            { team: "Australia", played: 5, won: 3, lost: 2, nrr: "+0.8" },
            { team: "England", played: 5, won: 2, lost: 3, nrr: "-0.5" },
            { team: "Pakistan", played: 5, won: 1, lost: 4, nrr: "-1.0" },
        ],
        B: [
            { team: "New Zealand", played: 5, won: 4, lost: 1, nrr: "+1.4" },
            { team: "South Africa", played: 5, won: 3, lost: 2, nrr: "+0.6" },
            { team: "Sri Lanka", played: 5, won: 2, lost: 3, nrr: "-0.3" },
            { team: "West Indies", played: 5, won: 1, lost: 4, nrr: "-1.2" },
        ],
    };

    const groupMatches = {
        A: [
            { date: "2025-02-23", time: "19:00", venue: "Delhi", team1: "India", team2: "Australia", score: "250/7 - 240/9", result: "India won by 10 runs" },
            { date: "2025-02-22", time: "14:00", venue: "London", team1: "England", team2: "Pakistan", score: "180/6 - 175/8", result: "England won by 5 runs" },
        ],
        B: [
            { date: "2025-02-25", time: "18:00", venue: "Mumbai", team1: "New Zealand", team2: "South Africa", score: "265/5 - 230/9", result: "New Zealand won by 35 runs" },
            { date: "2025-02-24", time: "15:30", venue: "Sydney", team1: "Sri Lanka", team2: "West Indies", score: "190/8 - 185/7", result: "Sri Lanka won by 3 wickets" },
        ],
    };

    const semiFinals = [
        { date: "2025-02-28", time: "20:00", venue: "Dubai", team1: "India", team2: "New Zealand", score: "To be played", result: "Semi Final 1" },
        { date: "2025-02-28", time: "20:00", venue: "Cape Town", team1: "Australia", team2: "South Africa", score: "To be played", result: "Semi Final 2" },
    ];

    const finalMatch = { date: "2025-03-02", time: "19:30", venue: "Melbourne", team1: "Winner SF1", team2: "Winner SF2", score: "To be played", result: "Final" };


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <Card className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Points Table</h2>
                <div className="grid grid-cols-2 gap-8">
                    {Object.entries(pointsTable).map(([group, teams]) => (
                        <div key={group}>
                            <h3 className="text-xl font-semibold mb-2 text-center">Group {group}</h3>
                            <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
                                <thead className="bg-blue-500 text-white">
                                    <tr>
                                        <th className="p-3">Team</th>
                                        <th className="p-3">Played</th>
                                        <th className="p-3">Won</th>
                                        <th className="p-3">Lost</th>
                                        <th className="p-3">NRR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teams.map((team, index) => (
                                        <tr key={index} className="text-center odd:bg-gray-100 even:bg-white">
                                            <td className="p-3 font-semibold">{team.team}</td>
                                            <td className="p-3">{team.played}</td>
                                            <td className="p-3">{team.won}</td>
                                            <td className="p-3">{team.lost}</td>
                                            <td className="p-3">{team.nrr}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </Card>

            <div className="grid grid-cols-2 gap-8 mb-6">
                {Object.entries(groupMatches).map(([group, matches]) => (
                    <Card key={group}>
                        <h2 className="text-2xl font-bold mb-4 text-center">Group {group} Matches</h2>
                        <div className="space-y-4">
                            {matches.map((match, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <p className="text-lg font-semibold text-center">{match.team1} vs {match.team2}</p>
                                    <p className="text-center text-gray-500">{match.date} | {match.time} | {match.venue}</p>
                                    <p className="text-center text-gray-600">{match.score}</p>
                                    <p className="text-center text-green-600 font-semibold">{match.result}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>

            <Card>
                <h2 className="text-2xl font-bold mb-4 text-center">Knockout Matches</h2>
                <div className="grid grid-cols-2 gap-8 mb-6">
                    {semiFinals.map((match, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <p className="text-lg font-semibold text-center">{match.team1} vs {match.team2}</p>
                            <p className="text-center text-gray-500">{match.date} | {match.time} | {match.venue}</p>
                            <p className="text-center text-red-600 font-semibold">{match.result}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <p className="text-lg font-semibold text-center">{finalMatch.team1} vs {finalMatch.team2}</p>
                    <p className="text-center text-gray-500">{finalMatch.date} | {finalMatch.time} | {finalMatch.venue}</p>
                    <p className="text-center text-red-600 font-semibold">{finalMatch.result}</p>
                </div>
            </Card>
        </div>
    );
};

export default Cricket;
