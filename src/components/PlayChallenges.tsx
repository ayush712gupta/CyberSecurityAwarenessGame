import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function PlayChallenges() {
  const navigate = useNavigate();
  const [, setSelectedChallenge] = useState<string | null>(null);

  const challengeTopics = [
    {
      id: "intro-cybersecurity",
      name: "Introduction to Cybersecurity",
      difficulty: "Beginner",
      color: "green"
    },
    {
      id: "phishing-defense",
      name: "Phishing Defense Simulator",
      difficulty: "Intermediate",
      color: "yellow"
    },
    {
      id: "sql-1d",
      name: "SQL Injection ",
      difficulty: "Advanced",
      color: "red"
    },
    {
      id: "Password1",
      name: "Password Testing",
      difficulty: "Easy",
      color: "green"
    },
    {
      id: "encrypt-decrypt",
      name: "Encryption And Decryption Simulation",
      difficulty: "Intermediate",
      color: "yellow"
    },
    {
      id: "MITM",
      name: "Man In The Middle Attack ",
      difficulty: "Advanced",
      color: "red"
    },
    {
      id: "TFA",
      name: "Two Factor Authentication ",
      difficulty: "Easy",
      color: "green"
    },
    {
      id: "DFS",
      name: "Digital Footprint Simulator",
      difficulty: "Intermediate",
      color: "yellow"
    },
    {
      id: "BFA",
      name: "Brute Force Attack Simulator",
      difficulty: "Advanced",
      color: "red"
    },
    {
      id: "CHS",
      name: "Cyber Hygiene Simulator",
      difficulty: "Easy",
      color: "green"
    },
    {
      id: "DDOS",
      name: "Denial OF Service (DDOS) Attack Simulator",
      difficulty: "Intermediate",
      color: "yellow"
    },
    {
      id: "XSS",
      name: "Cross Site Scripting",
      difficulty: "Advanced",
      color: "red"
    },



    // Add more challenges as needed
  ];

  const handleChallengeSelect = (challengeId: string) => {
    setSelectedChallenge(challengeId);
    if (challengeId === "intro-cybersecurity") {
      navigate('/Intro-1d');
    } else if (challengeId === "phishing-defense") {
      navigate('/phishing-defense-3d');
    }
    else if (challengeId === "encrypt-decrypt") {
      navigate('/encrypt-decrypt-1d');
    }
    else if (challengeId === "sql-1d") {
      navigate('/sql-injection-1d');
    }
    else if (challengeId === "MITM") {
      navigate('/MITM-1d');
    }
    else if (challengeId === "TFA") {
      navigate('/TFA-1d');
    }
    else if (challengeId === "Password1") {
      navigate('/PT-1d');
    }
    else if (challengeId === "DFS") {
      navigate('/DFS-1d');
    }
    else if (challengeId === "BFA") {
      navigate('/BFA-1d');
    }
    else if (challengeId === "CHS") {
      navigate('/CHS-1d');
    }
    else if (challengeId === "DDOS") {
      navigate('/DDOS-1d');
    }
    else if (challengeId === "XSS") {
      navigate('/XSS-1d');
    }
  };

  const getButtonColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-400/80 hover:bg-green-400 text-white';
      case 'yellow':
        return 'bg-yellow-600/80 hover:bg-yellow-600 text-gray-100';
      case 'red':
        return 'bg-red-800/80 hover:bg-red-800 text-gray-300';
      default:
        return 'bg-cyan-600/80 hover:bg-cyan-600 text-white';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Menu
        </button>

        <h1 className="text-4xl font-bold text-white mb-12 text-center tracking-wider">
          CyberGuard Chronicles: Training Modules
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {challengeTopics.map((challenge) => (
            <button
              key={challenge.id}
              onClick={() => handleChallengeSelect(challenge.id)}
              className={`aspect-square rounded-lg font-bold p-6 shadow-lg 
                transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center
                ${getButtonColor(challenge.color)}`}
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
            >
              <span className="text-lg mb-2">{challenge.name}</span>
              <span className="text-sm opacity-80">{challenge.difficulty}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayChallenges;