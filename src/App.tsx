import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  User,
  Target,
  Zap,
  Terminal,
  Lock,
  Cpu,
  Database,
  Globe,
  Search,
  Brain,
  Settings,
  Eye,
  Wifi,
  Server,
  Activity
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Cybersecurity Analyst',
    'Ethical Hacker',
    'Full Stack Developer',
    'Security Researcher'
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Mouse tracking for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Typing animation
    const typeText = () => {
      const currentText = roles[currentRole];
      let index = 0;
      setTypedText('');
      
      const typeInterval = setInterval(() => {
        if (index < currentText.length) {
          setTypedText(currentText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }, 2000);
        }
      }, 100);
    };

    typeText();
    const roleInterval = setInterval(typeText, 4000);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(roleInterval);
    };
  }, [currentRole]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: Target },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const skills = [
    { name: 'Cybersecurity', level: 95, color: 'from-cyan-400 to-blue-500', icon: Shield },
    { name: 'Python', level: 90, color: 'from-green-400 to-blue-500', icon: Code },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-red-500', icon: Terminal },
    { name: 'React', level: 80, color: 'from-blue-400 to-purple-500', icon: Globe },
    { name: 'Network Security', level: 92, color: 'from-red-400 to-pink-500', icon: Wifi },
    { name: 'Ethical Hacking', level: 88, color: 'from-purple-400 to-pink-500', icon: Lock },
    { name: 'SAP Systems', level: 75, color: 'from-orange-400 to-red-500', icon: Database },
    { name: 'Blue Prism RPA', level: 80, color: 'from-indigo-400 to-purple-500', icon: Settings },
  ];

  const projects = [
    {
      title: 'Drug Trafficking Detection System',
      description: 'AI/ML system for analyzing social media activity on WhatsApp, Telegram, and Instagram for detecting illicit communications using NLP and OSINT.',
      tech: ['React', 'Firebase', 'AI/ML', 'Python', 'NLP', 'OSINT'],
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      category: 'AI/Security'
    },
    {
      title: 'Virus Detection Platform',
      description: 'Python-based malware detection tool with real-time scanning capabilities using VirusTotal API and machine learning algorithms.',
      tech: ['Python', 'VirusTotal API', 'Machine Learning', 'Flask'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      category: 'Cybersecurity'
    },
    {
      title: 'E-commerce Platform with ML',
      description: 'Secure shopping platform with ML-based recommendations, secure payments, and advanced user analytics.',
      tech: ['React', 'Node.js', 'Firebase', 'Stripe', 'ML'],
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      category: 'Full-Stack'
    },
    {
      title: 'Legal Query Chatbot',
      description: 'AI-powered chatbot providing legal guidance and justice assistance with natural language processing.',
      tech: ['HTML/CSS', 'Flask', 'Python', 'NLP', 'AI'],
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      category: 'AI/Legal'
    },
    {
      title: 'Vulnerability Detection Tool',
      description: 'Automated vulnerability detection for embedded systems and OEM platforms using advanced scanning techniques.',
      tech: ['Python', 'Burp Suite', 'Nmap', 'Metasploit'],
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      category: 'Cybersecurity'
    },
    {
      title: 'WiFi Security Auditor',
      description: 'Authorized network security testing and vulnerability assessment tool for penetration testing.',
      tech: ['Python', 'Linux', 'Network Analysis', 'Kali Linux'],
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      category: 'Network Security'
    },
    {
      title: 'Grocery Billing System',
      description: 'Firebase-based billing system with QR scanner, weight-based pricing, and real-time inventory management.',
      tech: ['React', 'Firebase', 'QR Scanner', 'Real-time DB'],
      image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      category: 'Full-Stack'
    },
    {
      title: 'ATtiny Microcontroller Projects',
      description: 'Embedded systems projects including digital thermometers, LED patterns, IR controls, and motion sensors.',
      tech: ['C/C++', 'ATtiny', 'Arduino', 'Embedded Systems'],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      category: 'Embedded'
    }
  ];

  const experiences = [
    {
      title: 'Packaged App Development Associate – Intern',
      company: 'Accenture',
      period: 'May 2024 – Present',
      description: 'Working on RISE with SAP for LE-RUN ACN CIO digital transformation project. Gained expertise in SAP enterprise systems, WBSE, and cloud-based ERP workflows.',
      highlights: [
        'Blue Prism RPA and Cohere GenAI tools implementation',
        'Low-code application development',
        'Automated testing and deployment using Accenture Studio',
        'SAP enterprise systems integration'
      ],
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Intern',
      company: 'Slashmark (AICTE Partnership)',
      period: 'Feb 2024 – May 2024',
      description: 'Completed structured training in offensive and defensive cybersecurity with hands-on experience in ethical hacking and vulnerability assessment.',
      highlights: [
        'Vulnerability scans using Nmap and Zenmap',
        'Brute-force testing with Hydra',
        'IDS configuration with Snort and Fail2Ban',
        'Developed Cybersecurity Lab Manual with 12 experiments'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Research Project Developer – Finalist',
      company: 'Smart India Hackathon (SIH)',
      period: 'Jan 2024 – Present',
      description: 'Built software system for detecting drug trafficking activities on encrypted social media platforms using advanced ML and NLP techniques.',
      highlights: [
        'Natural Language Processing implementation',
        'Open Source Intelligence (OSINT) integration',
        'Custom-trained ML models development',
        'Automated pattern detection workflows'
      ],
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Self-Led Projects',
      period: '2023 – Present',
      description: 'Created full-stack applications using modern technologies with focus on security and user experience.',
      highlights: [
        'React, Firebase, TailwindCSS expertise',
        'Real-time database integrations',
        'Security and authentication implementation',
        'Role-based access control systems'
      ],
      icon: Code,
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Embedded Systems Enthusiast',
      company: 'Personal Projects',
      period: '2023',
      description: 'Developed embedded applications using ATtiny microcontrollers for various automation and control systems.',
      highlights: [
        'Digital thermometers with 7-segment displays',
        'IR remote control circuits',
        'Capacitive touch switches',
        'Motion detection alarm systems'
      ],
      icon: Cpu,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Open Source Contributor',
      company: 'GitHub & Community',
      period: '2023 – Present',
      description: 'Active contributor to cybersecurity resources and web development tools in the open source community.',
      highlights: [
        'Cybersecurity education projects',
        'Learning dashboard development',
        'Lab manual documentation',
        'Ethical hacking script repositories'
      ],
      icon: Github,
      color: 'from-gray-500 to-gray-700'
    }
  ];

  const achievements = [
    { title: 'Certified Ethical Hacker (CEH)', org: 'EC-Council', year: '2024', icon: Shield },
    { title: '3rd Place - SNS Hackathon', org: 'SNS College', year: '2024', icon: Award },
    { title: '1st Place - NEC College CTF', org: 'NEC College', year: '2024', icon: Target },
    { title: 'Innovation Award', org: 'Kalasalingam University', year: '2024', icon: Zap },
    { title: 'Bug Bounty Certification', org: 'Various Platforms', year: '2024', icon: Search },
    { title: 'Linux Certification', org: 'HackerRank', year: '2023', icon: Terminal },
    { title: 'SAP Systems Training', org: 'Accenture', year: '2024', icon: Database },
    { title: 'Blue Prism RPA Certification', org: 'Accenture', year: '2024', icon: Settings },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-cyan-900/10"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        {/* Matrix-like effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-cyan-400 text-xs font-mono leading-none">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                {Math.random().toString(36).substring(7)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Asaraf Ali
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex space-x-8">
                {navItems.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500/20 hover:scale-105 ${
                      activeSection === id ? 'text-cyan-400 bg-cyan-500/30 shadow-lg shadow-cyan-500/20' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 animate-fadeIn">
            <div className="px-4 py-4 space-y-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                    activeSection === id ? 'text-cyan-400 bg-cyan-500/30' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          {/* Glowing orbs */}
          <div 
            className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${mousePosition.x * 0.01}px`,
              top: `${mousePosition.y * 0.01}px`,
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"
            style={{
              right: `${mousePosition.x * 0.005}px`,
              bottom: `${mousePosition.y * 0.005}px`,
            }}
          ></div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="relative inline-block group">
              <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Asaraf Ali"
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full"></div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-black animate-pulse flex items-center justify-center">
                <Activity size={16} className="text-black" />
              </div>
              {/* Floating icons around profile */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center animate-bounce">
                <Shield size={16} className="text-cyan-400" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce delay-500">
                <Code size={16} className="text-blue-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fadeInUp">
            Asaraf Ali A
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-16 flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <Terminal className="text-cyan-400 animate-pulse" size={28} />
              <span className="font-mono">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </div>
          </div>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed animate-fadeInUp delay-300">
            Passionate cybersecurity enthusiast and B.Tech student specializing in ethical hacking, 
            malware analysis, SAP systems, and secure full-stack development. Building the future of digital security 
            with AI/ML integration and enterprise solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp delay-500">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a 
              href="#" 
              className="group px-10 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/20 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 relative overflow-hidden"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          <div className="mt-20 animate-bounce">
            <ChevronDown size={40} className="mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900/50 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fadeInLeft">
              <p className="text-xl text-gray-300 leading-relaxed">
                I am a final-year B.Tech student in Information Technology at Nandha College of Technology, 
                affiliated with Anna University, Tamil Nadu. My passion lies in cybersecurity, where I 
                combine technical expertise with ethical hacking principles to build secure digital solutions.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Currently working as a Packaged App Development Associate Intern at Accenture, gaining hands-on 
                experience with SAP enterprise systems, Blue Prism RPA, and GenAI tools. My expertise spans 
                from vulnerability assessment to full-stack development with a security-first approach.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <GraduationCap className="text-cyan-400 mb-4 group-hover:animate-bounce" size={32} />
                  <h3 className="text-cyan-400 font-semibold text-xl mb-3">Education</h3>
                  <p className="text-gray-300 text-lg">B.Tech IT, Nandha College</p>
                  <p className="text-gray-400">2022 - 2026</p>
                </div>
                <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <MapPin className="text-cyan-400 mb-4 group-hover:animate-bounce" size={32} />
                  <h3 className="text-cyan-400 font-semibold text-xl mb-3">Location</h3>
                  <p className="text-gray-300 text-lg">Tamil Nadu, India</p>
                  <p className="text-gray-400">Available for Remote Work</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-fadeInRight">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-10 rounded-2xl border border-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-8 relative z-10">Core Expertise</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Cybersecurity & Ethical Hacking</h4>
                      <p className="text-gray-400">Network security, penetration testing, vulnerability assessment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Full-Stack Development</h4>
                      <p className="text-gray-400">React, Node.js, Firebase, secure coding practices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Database className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Enterprise Systems</h4>
                      <p className="text-gray-400">SAP, Blue Prism RPA, cloud-based ERP workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Brain className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">AI/ML & Research</h4>
                      <p className="text-gray-400">NLP, OSINT, pattern detection, intelligent automation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon size={24} className="text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">{skill.level}%</span>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`h-4 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-10 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="text-cyan-400" size={32} />
                  <h3 className="text-2xl font-bold text-cyan-400">Security Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Metasploit', 'Nmap', 'Burp Suite', 'Hydra', 'Snort', 'Kali Linux', 'Fail2Ban', 'Zenmap'].map((tool) => (
                    <span key={tool} className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors duration-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-10 rounded-2xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <Code className="text-blue-400" size={32} />
                  <h3 className="text-2xl font-bold text-blue-400">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'JavaScript', 'Java', 'C/C++', 'HTML/CSS', 'SQL', 'TypeScript'].map((lang) => (
                    <span key={lang} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/40 hover:bg-blue-500/30 transition-colors duration-300">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-10 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <Settings className="text-purple-400" size={32} />
                  <h3 className="text-2xl font-bold text-purple-400">Frameworks & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', 'Firebase', 'Flask', 'Express', 'Tailwind', 'SAP', 'Blue Prism'].map((framework) => (
                    <span key={framework} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/40 hover:bg-purple-500/30 transition-colors duration-300">
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-900/50 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/40 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 lg:w-1/3">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <exp.icon size={32} className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <p className="text-cyan-400 font-semibold">{exp.company}</p>
                            <p className="text-gray-400 text-sm">{exp.period}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">{exp.description}</p>
                        <div className="space-y-3">
                          <h4 className="text-cyan-400 font-semibold text-lg mb-4">Key Highlights:</h4>
                          {exp.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900/50 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="text-yellow-400" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{achievement.title}</h3>
                      <p className="text-cyan-400 text-sm mb-2 font-semibold">{achievement.org}</p>
                      <p className="text-gray-400 text-sm">{achievement.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-8 text-xl max-w-3xl mx-auto">
              Ready to collaborate on cybersecurity projects, discuss enterprise solutions, or explore opportunities? Let's connect!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-10 rounded-2xl border border-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-cyan-400 mb-8">Contact Information</h3>
                  
                  <div className="space-y-8">
                    <div className="group flex items-center space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="text-cyan-400" size={24} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">Email</p>
                        <a href="mailto:asarafa411@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-lg">
                          asarafa411@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="group flex items-center space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="text-cyan-400" size={24} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">Phone</p>
                        <a href="tel:+916369193629" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-lg">
                          +91 6369193629
                        </a>
                      </div>
                    </div>
                    
                    <div className="group flex items-center space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="text-cyan-400" size={24} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">Location</p>
                        <p className="text-gray-400 text-lg">Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-gray-700">
                    <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.linkedin.com/in/asaraf-ali-031729261"
                        className="group w-16 h-16 bg-blue-600/20 hover:bg-blue-600/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                      >
                        <Linkedin className="text-blue-400 group-hover:text-blue-300" size={24} />
                      </a>
                      <a 
                        href="https://github.com/Asarafunrea"
                        className="group w-16 h-16 bg-gray-600/20 hover:bg-gray-600/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                      >
                        <Github className="text-gray-400 group-hover:text-gray-300" size={24} />
                      </a>
                      <a 
                        href="https://www.hackerrank.com/profile/Asarafhacker27"
                        className="group w-16 h-16 bg-green-600/20 hover:bg-green-600/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                      >
                        <Code className="text-green-400 group-hover:text-green-300" size={24} />
                      </a>
                      <a 
                        href="https://phenioxcloud.web.app/"
                        className="group w-16 h-16 bg-purple-600/20 hover:bg-purple-600/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                      >
                        <Globe className="text-purple-400 group-hover:text-purple-300" size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-10 rounded-2xl border border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-cyan-400 mb-8">Send Message</h3>
                
                <form className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-lg"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-lg"
                      placeholder="Enter subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none text-lg"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="group w-full px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 relative overflow-hidden text-lg"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Asaraf Ali A
              </h3>
              <p className="text-gray-400 mt-2">Cybersecurity Analyst & Full Stack Developer</p>
            </div>
            <p className="text-gray-400 text-lg">
              © 2024 Asaraf Ali. All rights reserved. Built with passion for cybersecurity and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;