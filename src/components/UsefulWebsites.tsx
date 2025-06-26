import { Link } from 'react-router-dom';
import { ChevronLeft, Shield, ExternalLink, Globe, Lock, Terminal, Book, Users, Code, Shield as ShieldIcon } from 'lucide-react';

function UsefulWebsites() {
  const websites = [
    {
      title: "OWASP",
      description: "The Open Web Application Security Project® provides free tools, resources, and community support for web security.",
      category: "Security Standards",
      icon: Shield,
      link: "https://owasp.org/"
    },
    {
      title: "HackerOne",
      description: "Bug bounty platform connecting businesses with cybersecurity researchers to find and fix vulnerabilities.",
      category: "Bug Bounty",
      icon: Terminal,
      link: "https://www.hackerone.com/"
    },
    {
      title: "Have I Been Pwned",
      description: "Check if your email or phone is in a data breach. Free service monitoring data breaches worldwide.",
      category: "Security Check",
      icon: Lock,
      link: "https://haveibeenpwned.com/"
    },
    {
      title: "Cybrary",
      description: "Free online cybersecurity training and certification courses for all skill levels.",
      category: "Learning",
      icon: Book,
      link: "https://www.cybrary.it/"
    },
    {
      title: "VirusTotal",
      description: "Analyze suspicious files, domains, IPs and URLs to detect malware and other breaches.",
      category: "Security Tools",
      icon: ShieldIcon,
      link: "https://www.virustotal.com/"
    },
    {
      title: "ExploitDB",
      description: "Archive of public exploits and corresponding vulnerable software, maintained by Offensive Security.",
      category: "Security Research",
      icon: Code,
      link: "https://www.exploit-db.com/"
    },
    {
      title: "Security Headers",
      description: "Analyze and improve your website's security headers with this scanning tool.",
      category: "Web Security",
      icon: Globe,
      link: "https://securityheaders.com/"
    },
    {
      title: "Bleeping Computer",
      description: "Latest news and resources about cybersecurity, malware, and tech support.",
      category: "News & Updates",
      icon: Terminal,
      link: "https://www.bleepingcomputer.com/"
    },
    {
      title: "Reddit r/netsec",
      description: "Community-driven discussion about network and information security.",
      category: "Community",
      icon: Users,
      link: "https://www.reddit.com/r/netsec/"
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
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0B0F19]/80 p-8 rounded-2xl backdrop-blur-sm border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-cyan-400" />
              <h1 className="text-4xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>
                Useful Cybersecurity Websites
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websites.map((site, index) => {
                const IconComponent = site.icon;
                return (
                  <div 
                    key={index}
                    className="bg-cyan-600/10 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/50 
                      transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">{site.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4 h-20">{site.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-400">{site.category}</span>
                      <a
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-cyan-600/20 hover:bg-cyan-500/30 
                          text-cyan-300 px-4 py-2 rounded-lg transition-colors"
                      >
                        Visit Site <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link 
              to="/"
              className="mt-8 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsefulWebsites;