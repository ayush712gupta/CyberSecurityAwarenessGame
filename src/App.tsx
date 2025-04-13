import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Shield, GamepadIcon, BookOpen, Globe, LogOut } from 'lucide-react';
import PlayChallenges from './components/PlayChallenges';
import Quizzes from './components/Quizzes';
import UsefulWebsites from './components/UsefulWebsites';
import Books from './components/Books';
import Quit from './components/Quit';
import PhishingDefense3D from './components/PhishingDefense3D';
import EncryptAndDecrypt from './components/EncryptAndDecrypt';
import Chatbot from './components/Chatbot';
import SQL from './components/SQL';
import MITM from './components/MITM';
import Intro from './components/Intro';
import TFA from './components/TFA';
import PasswordTester from './components/PasswordTester';
import DFS from './components/DFS';
import BFA from './components/BFA';
import DDOS from './components/DDOS';
import CHS from './components/CHS';
import XSS from './components/XSS';

function Home() {
  const menuItems = [
    { name: 'Play Challenges', path: '/play-challenges', icon: GamepadIcon },
    { name: 'Quizzes', path: '/quizes', icon: Shield },
    { name: 'Useful Websites', path: '/useful-websites', icon: Globe },
    { name: 'Books', path: '/books', icon: BookOpen },
    { name: 'Quit', path: '/quit', icon: LogOut }
  ];

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-between px-8 md:px-16">
      <div className="bg-[#0B0F19]/80 p-8 rounded-2xl backdrop-blur-sm border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-cyan-400" />
          <h1 className="text-4xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>
            CyberGuard Chronicles
          </h1>
        </div>

        <nav>
          <ul className="space-y-4">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="block w-full text-xl px-8 py-3 rounded-lg bg-cyan-600/20 hover:bg-cyan-500/30 text-cyan-300 
                    transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 
                    hover:shadow-lg hover:shadow-cyan-500/20 text-center flex items-center justify-center gap-2"
                    style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.3)' }}
                  >
                    <IconComponent className="w-5 h-5" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("./BG.png")',
          }}
        />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play-challenges" element={<PlayChallenges />} />
          <Route path="/intro-cybersecurity" element={<PlayChallenges />} />
          <Route path="/quizes" element={<Quizzes />} />
          <Route path="/useful-websites" element={<UsefulWebsites />} />
          <Route path="/books" element={<Books />} />
          <Route path="/quit" element={<Quit />} />
          <Route path="/phishing-defense-3d" element={<PhishingDefense3D />} />
          <Route path="/encrypt-decrypt-1d" element={<EncryptAndDecrypt/>}/>
          <Route path="/sql-injection-1d" element={<SQL/>}/>
          <Route path="/MITM-1d" element={<MITM/>}/>
          <Route path="/Intro-1d" element={<Intro/>}/>
          <Route path="/TFA-1d" element={<TFA/>}/>
          <Route path="/PT-1d" element={<PasswordTester/>}/>
          <Route path="/DFS-1d" element={<DFS/>}/>
          <Route path="/BFA-1d" element={<BFA/>}/>
          <Route path="/CHS-1d" element={<CHS/>}/>
          <Route path="/DDOS-1d" element={<DDOS/>}/>
          <Route path="/XSS-1d" element={<XSS/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
