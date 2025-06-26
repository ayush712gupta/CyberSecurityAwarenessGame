import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Timer, Trophy, Shield } from 'lucide-react';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const quizQuestions: Record<string, QuizQuestion[]> = {
  easy: [
    {
      question: "What is the primary purpose of a firewall?",
      options: [
        "To monitor network traffic and block unauthorized access",
        "To speed up internet connection",
        "To store passwords securely",
        "To encrypt emails"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of these is a strong password?",
      options: [
        "password123",
        "qwerty",
        "P@ssw0rd!2023",
        "abc123"
      ],
      correctAnswer: 2
    },
    {
      question: "What is phishing?",
      options: [
        "A type of computer virus",
        "A method of stealing personal information by pretending to be trustworthy",
        "A way to speed up your computer",
        "A type of encryption"
      ],
      correctAnswer: 1
    },
    {
      question: "What does MFA stand for in cybersecurity?",
      options: [
        "Multi-Factor Authentication",
        "Multiple Firewall Access",
        "Main Framework Authorization",
        "Mega File Access"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following is an example of social engineering?",
      options: [
        "A hacker exploiting a software vulnerability",
        "A scam email tricking users into revealing passwords",
        "A virus that deletes system files",
        "A firewall blocking unauthorized traffic"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of these is a safe practice when using public Wi-Fi?",
      options: [
        "Accessing bank accounts without a VPN",
        "Using strong passwords and enabling two-factor authentication",
        "Downloading unknown files",
        "Disabling antivirus software to improve speed"
      ],
      correctAnswer: 1
    },
    {
      question: "What does HTTPS stand for?",
      options: [
        "HyperText Transfer Protocol Secure",
        "High Tech Transfer Protocol System",
        "Hyperlink Transfer Trusted Protocol",
        "Home Transport Technology Protocol Secure"
      ],
      correctAnswer: 0
    },
    {
      question: "Which type of malware locks you out of your files until a ransom is paid?",
      options: [
        "Virus",
        "Trojan",
        "Ransomware",
        "Spyware"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the best way to protect yourself from identity theft?",
      options: [
        "Using the same password for all accounts",
        "Sharing personal information on social media",
        "Monitoring financial statements and using strong passwords",
        "Clicking on every email link you receive"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the main purpose of an antivirus program?",
      options: [
        "To increase internet speed",
        "To protect against malware and cyber threats",
        "To create backups of files",
        "To provide anonymous browsing"
      ],
      correctAnswer: 1
    }
],
medium: [
  {
    question: "What is two-factor authentication?",
    options: [
      "Using two different passwords",
      "Using two different usernames",
      "Using two different methods to verify identity",
      "Using two different computers"
    ],
    correctAnswer: 2
  },
  {
    question: "Which encryption protocol is considered secure for websites?",
    options: [
      "HTTP",
      "HTTPS",
      "FTP",
      "SMTP"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a VPN used for?",
    options: [
      "To make your internet faster",
      "To store files securely",
      "To encrypt your internet traffic and hide your location",
      "To block all websites"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is an example of a strong password?",
    options: [
      "12345678",
      "P@ssw0rd2024!",
      "qwerty123",
      "password"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the main purpose of a firewall?",
    options: [
      "To monitor and block unauthorized network traffic",
      "To store sensitive data securely",
      "To increase internet speed",
      "To encrypt data on a hard drive"
    ],
    correctAnswer: 0
  },
  {
    question: "What type of attack exploits human psychology to gain access to sensitive data?",
    options: [
      "SQL Injection",
      "Social Engineering",
      "Brute Force Attack",
      "Denial of Service Attack"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is an example of malware?",
    options: [
      "Firewall",
      "Antivirus",
      "Trojan Horse",
      "VPN"
    ],
    correctAnswer: 2
  },
  {
    question: "Which security practice is best for protecting personal data online?",
    options: [
      "Reusing passwords across multiple accounts",
      "Clicking on links in unsolicited emails",
      "Keeping software and security patches up to date",
      "Disabling two-factor authentication"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the purpose of a honeypot in cybersecurity?",
    options: [
      "To trap and analyze potential attackers",
      "To store sensitive data securely",
      "To speed up internet connection",
      "To encrypt files"
    ],
    correctAnswer: 0
  },
  {
    question: "Which of the following is a common method hackers use to steal passwords?",
    options: [
      "Phishing",
      "Defragmentation",
      "Firewall Bypassing",
      "Data Backup"
    ],
    correctAnswer: 0
  },
  {
    question: "What is ransomware?",
    options: [
      "A software that blocks access to files until a ransom is paid",
      "A type of firewall protection",
      "A secure encryption method",
      "A way to store passwords safely"
    ],
    correctAnswer: 0
  },
  {
    question: "What is an SQL injection attack?",
    options: [
      "An attack where malicious SQL code is inserted into a database query",
      "A way to encrypt SQL databases",
      "A backup method for databases",
      "A software update process"
    ],
    correctAnswer: 0
  },
  {
    question: "What does a DDoS attack do?",
    options: [
      "Steals user credentials",
      "Disrupts service by overwhelming a system with traffic",
      "Encrypts files until a ransom is paid",
      "Detects security vulnerabilities"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is an example of secure browsing?",
    options: [
      "Using public Wi-Fi without a VPN",
      "Logging into accounts on shared computers",
      "Only entering sensitive information on HTTPS websites",
      "Clicking on pop-up ads"
    ],
    correctAnswer: 2
  },
  {
    question: "What is an intrusion detection system (IDS)?",
    options: [
      "A system that detects and prevents cyber attacks",
      "A type of firewall",
      "A secure password management tool",
      "A backup storage device"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the safest way to store passwords?",
    options: [
      "Writing them down on paper",
      "Using a password manager",
      "Saving them in a text file on your computer",
      "Reusing passwords across multiple sites"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a brute-force attack?",
    options: [
      "An attack that guesses passwords by trying all possible combinations",
      "A technique that infects computers with malware",
      "A method of encrypting sensitive data",
      "A type of phishing attack"
    ],
    correctAnswer: 0
  },
  {
    question: "What does the term 'zero-day vulnerability' refer to?",
    options: [
      "A vulnerability that is unknown to the vendor and has no patch",
      "A system update that fixes known bugs",
      "A firewall rule blocking all traffic",
      "A type of phishing scam"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of a security patch?",
    options: [
      "To update software with new features",
      "To fix security vulnerabilities and improve protection",
      "To install antivirus software",
      "To back up user data"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is an effective way to prevent identity theft?",
    options: [
      "Using the same password for all accounts",
      "Regularly checking financial statements and using two-factor authentication",
      "Clicking on every email link received",
      "Posting personal details on social media"
    ],
    correctAnswer: 1
  }
],

hard : [
  {
    question: "What is a zero-day vulnerability?",
    options: [
      "A security flaw that has existed for zero days",
      "A vulnerability that is known to the vendor but has no patch yet",
      "A type of malware that deletes all files",
      "A security flaw that takes zero days to fix"
    ],
    correctAnswer: 1
  },
  {
    question: "What is SQL injection?",
    options: [
      "A way to speed up database queries",
      "A method of backing up SQL databases",
      "A type of database software",
      "A technique to exploit database vulnerabilities through input fields"
    ],
    correctAnswer: 3
  },
  {
    question: "What is a man-in-the-middle attack?",
    options: [
      "An attack where someone intercepts communications between two parties",
      "An attack that targets middle management",
      "A type of virus that affects only some computers",
      "A method of password cracking"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the primary purpose of a rootkit?",
    options: [
      "To speed up computer performance",
      "To provide unauthorized privileged access to a system",
      "To scan for vulnerabilities in a network",
      "To encrypt files for secure storage"
    ],
    correctAnswer: 1
  },
  {
    question: "Which attack exploits the predictable sequence of TCP sequence numbers?",
    options: [
      "Man-in-the-middle attack",
      "TCP session hijacking",
      "DDoS attack",
      "Phishing attack"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of a honeypot in cybersecurity?",
    options: [
      "To attract and trap attackers",
      "To speed up internet traffic",
      "To encrypt user passwords",
      "To block malware from entering a system"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the primary goal of an Advanced Persistent Threat (APT)?",
    options: [
      "To quickly damage systems and leave",
      "To establish long-term access for espionage or sabotage",
      "To cause temporary system disruptions",
      "To perform large-scale email spamming"
    ],
    correctAnswer: 1
  },
  {
    question: "Which cybersecurity framework is widely used for risk management?",
    options: [
      "ISO 27001",
      "ITIL",
      "COBIT",
      "Six Sigma"
    ],
    correctAnswer: 0
  },
  {
    question: "What does the 'CIA triad' stand for in cybersecurity?",
    options: [
      "Cybersecurity, Integrity, Authentication",
      "Confidentiality, Integrity, Availability",
      "Control, Investigation, Audit",
      "Compliance, Intelligence, Analysis"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a buffer overflow attack?",
    options: [
      "An attack that floods a network with excessive traffic",
      "An attack that exploits a program's memory management flaw",
      "An attack that steals user credentials",
      "An attack that blocks a legitimate user from accessing a system"
    ],
    correctAnswer: 1
  },
  {
    question: "What is privilege escalation?",
    options: [
      "A method to increase storage capacity",
      "A process where a user gains higher access rights than intended",
      "A technique to improve network security",
      "A type of social engineering attack"
    ],
    correctAnswer: 1
  },
  {
    question: "What type of malware encrypts a user's files and demands payment for decryption?",
    options: [
      "Spyware",
      "Ransomware",
      "Trojan horse",
      "Adware"
    ],
    correctAnswer: 1
  },
  {
    question: "What is cross-site scripting (XSS)?",
    options: [
      "A way to filter malicious scripts from web applications",
      "An attack that injects malicious scripts into web applications",
      "A method to improve website loading speeds",
      "A cybersecurity protocol for secure online transactions"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a botnet?",
    options: [
      "A network of computers used for legitimate computing tasks",
      "A group of interconnected IoT devices",
      "A network of compromised computers used for malicious activities",
      "A secure VPN network used by businesses"
    ],
    correctAnswer: 2
  },
  {
    question: "What is a polymorphic virus?",
    options: [
      "A virus that can change its code to evade detection",
      "A virus that only affects mobile devices",
      "A virus that targets only cloud services",
      "A virus that requires user interaction to spread"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the primary function of a firewall?",
    options: [
      "To prevent unauthorized access to or from a network",
      "To detect and remove malware from a system",
      "To encrypt network traffic",
      "To manage user authentication"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the main goal of social engineering attacks?",
    options: [
      "To exploit human psychology to gain unauthorized access",
      "To infect computers with malware",
      "To disable network firewalls",
      "To improve social media security"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a race condition vulnerability?",
    options: [
      "A vulnerability where multiple processes attempt to access the same resource simultaneously",
      "A type of malware that spreads quickly",
      "A security flaw that only affects high-speed networks",
      "A vulnerability related to password encryption"
    ],
    correctAnswer: 0
  },
  {
    question: "What is an air-gapped system?",
    options: [
      "A system physically isolated from other networks for security reasons",
      "A system that uses only cloud-based security",
      "A system that only operates on wireless networks",
      "A system that encrypts all outgoing traffic"
    ],
    correctAnswer: 0
  },
  {
    question: "What is spear phishing?",
    options: [
      "A targeted phishing attack aimed at specific individuals or organizations",
      "A general phishing email sent to many recipients",
      "A technique used to improve email security",
      "A type of denial-of-service attack"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a supply chain attack?",
    options: [
      "An attack that targets a company’s suppliers or vendors",
      "A method of disrupting logistics networks",
      "A way to increase supply chain efficiency",
      "A phishing technique targeting supply managers"
    ],
    correctAnswer: 0
  },
  {
    question: "What is an evil twin attack?",
    options: [
      "A rogue Wi-Fi network impersonating a legitimate one",
      "A form of data duplication attack",
      "An attack that targets cloud storage",
      "A duplicate phishing email technique"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a watering hole attack?",
    options: [
      "An attack where hackers compromise a commonly visited website",
      "A method to overload DNS servers",
      "A denial-of-service technique",
      "An attack on physical network infrastructure"
    ],
    correctAnswer: 0
  }
]
};

const levelConfig = {
  easy: { questions: 10, time: 30, color: 'cyan', bgColor: 'cyan-600' },
  medium: { questions: 20, time: 25, color: 'red', bgColor: 'red-600' },
  hard: { questions: 30, time: 20, color: 'red', bgColor: 'red-800' }
};

function Quizzes() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    if (!selectedLevel || quizComplete) return;

    if (timeLeft > 0 && !isAnswered) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleAnswer(-1);
    }
  }, [timeLeft, isAnswered, selectedLevel, quizComplete]);

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
    setTimeLeft(levelConfig[level as keyof typeof levelConfig].time);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizComplete(false);
  };

  const handleAnswer = (selectedIndex: number) => {
    if (!selectedLevel || isAnswered) return;
    
    setIsAnswered(true);
    setSelectedAnswer(selectedIndex);
    
    const currentQuestion = quizQuestions[selectedLevel][currentQuestionIndex];
    if (currentQuestion && selectedIndex === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(nextQuestion, 1500);
  };

  const nextQuestion = () => {
    if (!selectedLevel) return;

    if (currentQuestionIndex < quizQuestions[selectedLevel].length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeLeft(levelConfig[selectedLevel as keyof typeof levelConfig].time);
      setIsAnswered(false);
      setSelectedAnswer(null);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setSelectedLevel(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(30);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setQuizComplete(false);
  };

  if (!selectedLevel) {
    return (
      <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("../BG.png")',
            
          }}
        />
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="bg-[#0B0F19]/80 p-8 rounded-2xl backdrop-blur-sm border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-cyan-400" />
              <h1 className="text-4xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>
                Select Quiz Level
              </h1>
            </div>

            <div className="grid gap-4">
              {Object.entries(levelConfig).map(([level, config]) => (
                <button
                  key={level}
                  onClick={() => handleLevelSelect(level)}
                  className={`w-full text-xl px-8 py-4 rounded-lg 
                    bg-${config.color}-600/20 hover:bg-${config.color}-500/30 
                    text-${config.color}-300 transition-all duration-300 
                    border border-${config.color}-500/30 hover:border-${config.color}-400/50 
                    hover:shadow-lg hover:shadow-${config.color}-500/20`}
                  style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.3)' }}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)} Level
                  <span className="block text-sm mt-1">
                    {config.questions} questions • {config.time} seconds per question
                  </span>
                </button>
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
    );
  }

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("../BG.png")',
            
          }}
        />
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="bg-[#0B0F19]/80 p-8 rounded-2xl backdrop-blur-sm border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            <div className="text-center">
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">Quiz Complete!</h2>
              <p className="text-2xl text-cyan-300 mb-8">
                Your Score: {score}/{quizQuestions[selectedLevel].length}
              </p>
              <div className="space-y-4">
                <button
                  onClick={resetQuiz}
                  className="w-full px-8 py-3 rounded-lg bg-cyan-600/20 hover:bg-cyan-500/30 text-cyan-300 
                    transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50"
                >
                  Try Another Level
                </button>
                <Link 
                  to="/"
                  className="block w-full px-8 py-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 
                    transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50 text-center"
                >
                  Back to Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[selectedLevel][currentQuestionIndex];
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400">Error loading question. Please try again.</p>
          <button
            onClick={resetQuiz}
            className="mt-4 px-6 py-2 bg-cyan-600/20 text-cyan-300 rounded-lg"
          >
            Back to Level Selection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url("../BG.png")',    
        }}
      />
      <div className="relative z-10 min-h-screen p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button 
              onClick={resetQuiz}
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Change Level
            </button>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-cyan-400">
                <Timer className="w-5 h-5 mr-2" />
                <span className="font-mono">{timeLeft}s</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <Trophy className="w-5 h-5 mr-2" />
                <span>{score}/{quizQuestions[selectedLevel].length}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1F2E]/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">
              Question {currentQuestionIndex + 1} of {quizQuestions[selectedLevel].length}
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              {currentQuestion.question}
            </p>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !isAnswered && handleAnswer(index)}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    isAnswered
                      ? index === currentQuestion.correctAnswer
                        ? 'bg-green-500/20 border-green-500'
                        : index === selectedAnswer
                        ? 'bg-red-500/20 border-red-500'
                        : 'bg-gray-800/50 border-transparent'
                      : 'bg-gray-800/50 hover:bg-gray-700/50 border-transparent'
                  } border ${
                    isAnswered ? 'cursor-default' : 'cursor-pointer'
                  }`}
                  disabled={isAnswered}
                >
                  <span className="text-gray-200">{option}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizzes;