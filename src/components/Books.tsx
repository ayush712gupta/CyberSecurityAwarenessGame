import { Link } from 'react-router-dom';
import { ChevronLeft, Shield, ExternalLink, BookOpen } from 'lucide-react';

function Books() {
  const books = [
    {
      title: "The Art of Invisibility",
      author: "Kevin Mitnick",
      description: "The world's most famous hacker teaches you easy cloaking and counter-measures for citizens and consumers in the age of Big Brother and Big Data.",
      level: "Intermediate",
      category: "Privacy & Security",
      link: "https://www.amazon.com/Art-Invisibility-Worlds-Famous-Hacker/dp/0316380504",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1470"
    },
    {
      title: "Ghost in the Wires",
      author: "Kevin Mitnick",
      description: "The thrilling memoir of the world's most wanted computer hacker, detailing his escapades and eventual capture.",
      level: "Beginner",
      category: "Biography",
      link: "https://www.amazon.com/Ghost-Wires-Adventures-Worlds-Wanted/dp/0316037729",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1470"
    },
    {
      title: "Social Engineering: The Science of Human Hacking",
      author: "Christopher Hadnagy",
      description: "A deep dive into the psychological principles behind social engineering and how to defend against manipulation.",
      level: "Advanced",
      category: "Social Engineering",
      link: "https://www.amazon.com/Social-Engineering-Science-Human-Hacking/dp/111943338X",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1469"
    },
    {
      title: "Practical Malware Analysis",
      author: "Michael Sikorski & Andrew Honig",
      description: "The hands-on guide to dissecting malicious software, understanding its behavior, and preventing its spread.",
      level: "Expert",
      category: "Malware Analysis",
      link: "https://www.amazon.com/Practical-Malware-Analysis-Hands-Dissecting/dp/1593272901",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2670"
    },
    {
      title: "Applied Cryptography",
      author: "Bruce Schneier",
      description: "A comprehensive guide to encryption, digital signatures, and other cryptographic tools for securing digital information.",
      level: "Advanced",
      category: "Cryptography",
      link: "https://www.amazon.com/Applied-Cryptography-Protocols-Algorithms-Source/dp/1119096723",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=1694"
    },
    {
      title: "The Web Application Hacker's Handbook",
      author: "Dafydd Stuttard & Marcus Pinto",
      description: "Finding and exploiting security flaws in web applications, with practical examples and solutions.",
      level: "Intermediate",
      category: "Web Security",
      link: "https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1470"
    }
  ];

  const getLevelColor = (level: string) => {
    const colors = {
      Beginner: 'text-green-400',
      Intermediate: 'text-yellow-400',
      Advanced: 'text-orange-400',
      Expert: 'text-red-400'
    };
    return colors[level as keyof typeof colors] || 'text-gray-400';
  };

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
              <Shield className="w-8 h-8 text-cyan-400" />
              <h1 className="text-4xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>
                Cybersecurity Books
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 
                    transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${book.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />
                  
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-5 h-5 text-cyan-400" />
                        <span className={getLevelColor(book.level)}>{book.level}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{book.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">by {book.author}</p>
                      <p className="text-gray-300 mb-4 line-clamp-3">{book.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-400">{book.category}</span>
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-cyan-600/20 hover:bg-cyan-500/30 
                          text-cyan-300 px-4 py-2 rounded-lg transition-colors"
                      >
                        View Book <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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

export default Books;