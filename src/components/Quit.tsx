import { Link } from 'react-router-dom';
import { Shield, LogOut, Home } from 'lucide-react';

function Quit() {
  return (
    <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url("../BG.png")',
          
        }}
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="bg-[#0B0F19]/80 p-8 rounded-2xl backdrop-blur-sm border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 max-w-md w-full text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>
              Quit Game
            </h1>
          </div>

          <p className="text-gray-300 mb-8">Are you sure you want to quit the game?</p>

          <div className="space-y-4">
            <Link 
              to="/"
              className="w-full flex items-center justify-center gap-2 bg-cyan-600/20 hover:bg-cyan-500/30 
                text-cyan-300 py-3 px-6 rounded-lg transition-all duration-300 border border-cyan-500/30 
                hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Home className="w-5 h-5" />
              Return to Menu
            </Link>
            
            <button 
              className="w-full flex items-center justify-center gap-2 bg-red-600/20 hover:bg-red-500/30 
                text-red-300 py-3 px-6 rounded-lg transition-all duration-300 border border-red-500/30 
                hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/20"
              onClick={() => window.close()}
            >
              <LogOut className="w-5 h-5" />
              Quit Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quit;