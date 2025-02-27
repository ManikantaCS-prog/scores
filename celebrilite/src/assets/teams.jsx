
import { useState } from "react";

const teams = [
    {
        id: 1,
        name: "Order of the Phoenix",
        logo: "static/images/order.png",
        members: [
            "Rajashekar", "Lakshmi", "Sai Nandan", "Pratap", "Satish Perla", "Keerthi", "Mayur",
            "Addanki Sravani", "Sri Harsha", "Manoj", "Raja", "Sai Aashrith", "Prem", "Shashikanth",
            "Sponditha", "Uma", "Gangadhar", "Goutham", "Sai Krishna", "Nikitha", "Sai Harsha",
            "Deera", "Ravi Teja",
        ],
    },
    {
        id: 2,
        name: "Hufflepuffs",
        logo: "static/images/hufflepuff.png",
        members: [
            "Naveen Babu Yarlagadda",
            "Mahesh Budgie",
            "Venkat Guru",
            "Sanjeva Chepyala",
            "Geethasowjanya Dommeti",
            "Ravi Kiran Kurapati",
            "Saidachary Nadikooda",
            "Ajay Wankhade",
            "Mahender Kudumula",
            "Krishna Kuppa",
            "Venkatesh Naroju",
            "Anusha Perumalla",
            "Pavan Kumar Bandarupalli",
            "Samara Simha Reddy",
            "Teja Budda",
            "Srivathsa Kavirayuni",
            "Ankit Ghate",
            "Sarthak Das",
            "Karthik Karanam",
            "Prathmesh Nikam",
            "Samrat Sen",
            "Shailesh Doiphode",
            "Trilok Mullapudi",
            "Uday Kumar Maduri",
            "Mahesh Guguloth",
            "Anil Putta",
        ],
    },
    {
        id: 3,
        name: "The Goblins",
        logo: "static/images/goblins.png",
        members: [
            "Nitesh Kothyari",
            "Kadem Narsimha Teja",
            "Amol Drago",
            "Rohit Yendapally",
            "Raj Adapa",
            "Prasad Chinni",
            "Okesh G",
            "Niraj Vinod Walke",
            "Pravallika S",
            "Suprabha T",
            "Jyothirmayi K",
            "Jagadeesh Kurakula",
            "Shiva Areva",
            "Ashok Nalla",
            "Venkatesh Pvav",
            "Prasanna Kumar Nadella",
            "Arun Venkumahanti",
            "Umamaheswara Gupta Darsi",
            "Ganesh Sheral",
            "Ragini Muthireddy",
            "Poojitha Penmetsa",
        ],
    },
    {
        id: 4,
        name: "Gryffindors",
        logo: "static/images/gry.png",
        members: [
            "Vaggu Venkatesh",
            "Rangu Naveen",
            "Penmetsa Srikanth",
            "Chatla Nikhil Kumar",
            "Anappindi Nagamani",
            "Maharaju Praveen",
            "Bhaskar Savilla",
            "Srimantha Kumar Sethi",
            "Vamsi Naidu",
            "Yathishnayan Majji",
            "Kiran Kumar Garagaparthi",
            "Manoj Kumar Biroj",
            "Vijay Sagar Kotha Uppari",
            "Niharika Naidu",
            "Satya Sriram Suda",
            "Khadar Shaik",
            "Sashank Madhavarapu",
            "Sai Venkata Tarun Jammalamadaka",
            "Malleswari Kalanadhabhatla",
            "Vivek Sonawane",
        ],
    },
    {
        id: 5,
        name: "Ravenclaws",
        logo: "static/images/ravenclaw.png",
        members: [
            "Prasanna Kumar",
            "Ajay",
            "Ravi Medi",
            "Harshad",
            "Hameed",
            "Mayur",
            "Arpita",
            "Lavanya",
            "Sakshi Pande",
            "Sai Kumar Badham",
            "Venkat Reddy",
            "Koteshwar",
            "Praneeth Chada",
            "Soumendra Dalai",
            "Aditi",
            "Areef",
            "Ashish",
            "Khanishram",
            "Manikanta Dangeti",
            "Naveen Budama",
            "Sharanya",
            "Shubham",
            "Suresh",
            "Supriya",
            "Anjalir Nagururi",
        ],
    },
    {
        id: 6,
        name: "Dark Wizards",
        logo: "static/images/Death.png",
        members: [
            "Satya",
            "Kalyan T",
            "Siva Karan",
            "Mani Teja",
            "Kunal",
            "Deep",
            "Meghana",
            "Swati",
            "Sai Ram",
            "Naga Palapothu",
            "Vikas",
            "Pooja Patil",
            "Sagar E",
            "Anjani",
            "Kalyan Shetty",
            "Sai Venkat",
            "Divikar",
            "Vivek Ramanujan",
            "Rohit G",
            "Supriya",
            "Pavan",
            "Sai Sandya",
        ],
    },
    {
        id: 7,
        name: "The Marauders",
        logo: "static/images/maru.png",
        members: [
            "Srikanth Enugula",
            "Krishna Mohan Sripada",
            "Bhagya Sree Ande",
            "Jhansi Talasani",
            "Gnaneswar",
            "Raja Vamshi Kalli",
            "Venkata Sai Saran",
            "Pavan Sai Valluri",
            "Suman Penchala",
            "Murali",
            "Biswajit Maharana",
            "Jagan Paniharam",
            "Bala Alla",
            "Rana Bagadi",
            "Manish Monjgiri",
            "Siva Dindi",
            "Prudhvi Kothaplii",
            "Ayesha",
            "Srinivas Mourya",
            "Himanshu",
            "Sahil Bhat",
            "Rohini Ramba",
            "Swapnil",
            "Kishore Kancherla",
            "Prerna",
        ],
    },
    {
        id: 8,
        name: "The Dragons",
        logo: "static/images/dragon.png",
        members: [
            "Aditya Berlikar",
            "Afzal Ahmed",
            "Anil Kumar Kavati",
            "Bharath Nellore",
            "Deena Vanapalii",
            "Krishnam Natte",
            "Muralidhar Boodaraju",
            "Pradeep Kumar",
            "Rakesh Bhupathiraju",
            "Ravi Meruga",
            "Shashwath Singh",
            "Sudhakar Talupula",
            "Vamshi Saddanapu",
            "Vamsikrishna Burugadda",
            "Vani Tekula",
            "Vinay Rallabandi",
            "Baji Shaik",
        ],
    },
    
];


import PropTypes from "prop-types"; // Import PropTypes for validation


export default function Teams() {
    const [selectedTeam, setSelectedTeam] = useState(null);

    return (
        <div className="min-h-screen  p-8 ">
            {selectedTeam ? (
                <TeamDetails team={selectedTeam} onBack={() => setSelectedTeam(null)} />
            ) : (
                <TeamsList onSelectTeam={setSelectedTeam} />
            )}
        </div>
    );
}

// Team List Component
function TeamsList({ onSelectTeam }) {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-8"> Teams</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 justify-items-center">
                {teams.map((team) => (
                    <div
                        key={team.id}
                        onClick={() => onSelectTeam(team)}
                        className="flex flex-col items-center cursor-pointer  text-lg font-semibold hover:text-red-600"
                    >
                        <img
                            src={team.logo}
                            alt={team.name}
                            className="w-40 h-40 object-contain transition-transform duration-200 ease-in-out hover:scale-110"
                        />
                        <p className="mt-2 text-xl font-bold">{team.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

// Team Details Component
function TeamDetails({ team, onBack }) {
    return (
        <div className="relative flex flex-col items-center text-gray-900 bg-white max-w-2xl mx-auto p-6 rounded-lg shadow-lg border border-gray-200
                        before:absolute before:inset-0 before:bg-white before:opacity-50 before:rounded-lg"
            style={{
                backgroundImage: `url(${team.logo})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "brightness(1)" // Lightens the image
            }}
        >
            {/* Team Name */}
            <h2 className="text-3xl font-bold mb-6 z-10">{team.name}</h2>

            {/* Team Members Grid */}
            <div className="grid grid-cols-2 gap-4 p-4 z-10">
                {team.members.map((member, index) => (
                    <div key={index}
                        className="bg-gray-200 text-gray-800 px-6 py-4 rounded-md shadow-md text-center font-medium
                                   hover:bg-blue-100 transition duration-200">
                        {member}
                    </div>
                ))}
            </div>

            {/* Back Button */}
            <button
                onClick={onBack}
                className="mt-6 px-6 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition duration-200 z-10"
            >
                ← Back to Teams
            </button>
        </div>
    );
}



// ✅ Add PropTypes for validation
TeamsList.propTypes = {
    onSelectTeam: PropTypes.func.isRequired,
};

TeamDetails.propTypes = {
    team: PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        members: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    onBack: PropTypes.func.isRequired,
};
