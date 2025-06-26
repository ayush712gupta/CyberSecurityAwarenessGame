import { Link } from 'react-router-dom';
import { ChevronLeft, Shield, ExternalLink } from 'lucide-react';

function MoreGames() {
  const games = [
    {
      title: "Cyber Defense Simulator",
      description: "Protect your network from incoming cyber attacks in real-time scenarios",
      difficulty: "Medium",
      category: "Strategy",
      link: "https://play.google.com/store/apps/details?id=cyber.security.learn.programming.coding.hacking.software.development.cybersecurity&hl=en"
    },
    {
      title: "Code Breaker Challenge",
      description: "Decrypt complex codes and prevent data breaches against the clock",
      difficulty: "Hard",
      category: "Puzzle",
      link: "https://www.hackthebox.com/"
    },
    {
      title: "Security Expert Training",
      description: "Learn cybersecurity fundamentals through interactive challenges",
      difficulty: "Easy",
      category: "Educational",
      link: "https://owasp.org/www-community/Initiatives/"
    },
    {
      title: "Phishing Frenzy",
      description: "Identify and stop phishing attempts in a corporate environment",
      difficulty: "Medium",
      category: "Simulation",
      link: "https://www.knowbe4.com/"
    },
    {
      title: "Firewall Fortress",
      description: "Configure and maintain network security systems under pressure",
      difficulty: "Hard",
      category: "Strategy",
      link: "https://www.tryhackme.com/"
    },
    {
      title: "Data Guardian",
      description: "Protect sensitive information from sophisticated breaches",
      difficulty: "Expert",
      category: "Puzzle",
      link: "https://www.root-me.org/"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url("../BG.png")',
          filter: 'blur(3px)'
        }}
      />
      <div className="relative z-10 min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0B0F19]/80 p-8 rounded-2xl backdrop-blur-sm border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-cyan-400" />
              <h1 className="text-4xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>
                Cybersecurity Games
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game, index) => (
                <div 
                  key={index}
                  className="flex flex-col bg-cyan-600/10 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/50 
                  transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 h-full"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">{game.title}</h3>
                    <p className="text-gray-400 mb-4">{game.description}</p>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm text-cyan-400">{game.category}</span>
                      <span className="text-sm text-yellow-400">{game.difficulty}</span>
                    </div>
                  </div>
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-cyan-600/20 hover:bg-cyan-500/30 
                    text-cyan-300 py-2 rounded-lg transition-colors"
                  >
                    Play Now <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <Link 
                to="/"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back to Menu
              </Link>
              <div className="text-sm text-cyan-600">
                External links open in new tab. Games hosted by partner platforms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreGames;