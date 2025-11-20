import { useState, useEffect } from 'react';
import { ArrowRight, Code2, Zap, Trophy, Users, Calendar, Mail, Github, Twitter, Linkedin, Instagram, ChevronDown, User, Award, Sparkles, Code, Terminal, Rocket, Shield, GraduationCap, Menu, X, Phone } from 'lucide-react';
import { supabase } from './lib/supabaseClient';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    usn: '',
    hackerrank: '',
    semester: '',
    section: '',
    agreed: false,
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmissionStatus(null);
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        department: formData.department,
        usn: formData.usn.trim(),
        hackerrank: formData.hackerrank.trim(),
        semester: formData.semester,
        section: formData.section.trim(),
        agreed: formData.agreed
      };

      const { error } = await supabase.from('registrations').insert([payload]);

      if (error) {
        throw error;
      }

      setSubmissionStatus({
        type: 'success',
        message: 'Registration submitted! Check your email for the HackerRank link.'
      });

      setFormData({ name: '', email: '', department: '', usn: '', hackerrank: '', semester: '', section: '', agreed: false });
    } catch (err) {
      console.error('Registration failed:', err);
      setSubmissionStatus({
        type: 'error',
        message: err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-exo">
      {/* Enhanced Background with Multiple Layers */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-3xl animate-blob-1"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-tr from-cyan-600/20 via-blue-500/20 to-indigo-600/20 rounded-full blur-3xl animate-blob-2"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-blob-3"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-grid-white opacity-[0.02] animate-grid-flow"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient"></div>
      </div>

      {/* Floating particles - Reduced for mobile */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle hidden sm:block"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() > 0.5 ? '6,182,212' : '59,130,246'}, ${Math.random() * 0.5 + 0.3})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-xl sm:text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x tracking-wider">
                OPTICODE
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#register" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium tracking-wide">
                Register
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium tracking-wide">
                About
              </a>
              <a href="#register">
                <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 relative overflow-hidden group tracking-wide">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">Join Now</span>
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              <a href="#register" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium tracking-wide py-2">
                Register
              </a>
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium tracking-wide py-2">
                About
              </a>
              <a href="#register" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 tracking-wide">
                  Join Now
                </button>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-20 px-4 pb-20 sm:pb-24">
        {/* Decorative elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-40 left-10 w-20 h-20 border border-cyan-500/20 rounded-lg rotate-12 animate-float-slow"></div>
        <div className="hidden sm:block absolute top-60 right-20 w-16 h-16 border border-blue-500/20 rounded-lg -rotate-12 animate-float-slow animation-delay-1000"></div>
        <div className="hidden sm:block absolute bottom-40 left-1/4 w-12 h-12 border border-purple-500/20 rounded-full animate-float-slow animation-delay-2000"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex flex-col items-center gap-3 sm:gap-4 animate-fade-in-up">
            {/* Three Logos in a row */}
            <div className="flex items-center justify-center gap-4 sm:gap-8">
              <img
                src="/technical_club-removebg-preview.png"
                alt="Left logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]"
              />
              <img
                src="/biet-logo.png"
                alt="Bapuji Institute of Engineering and Technology logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]"
              />
              <img
                src="/ISTE.png"
                alt="Right logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]"
              />
            </div>
            <p className="text-center text-xs sm:text-base font-orbitron tracking-[0.3em] sm:tracking-[0.4em] uppercase text-cyan-200/80 px-4">
              Bapuji Institute of Engineering & Technology · Davangere
            </p>
            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 animate-spin-slow" />
                <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-orbitron tracking-widest">
                  2025 ELITE CODING CHALLENGE
                </span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 animate-spin-slow" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-orbitron font-black mb-3 sm:mb-4 tracking-wider leading-none relative px-4">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-xl sm:blur-2xl opacity-50 animate-pulse-slow"></span>
                <span className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                  OPTICODE
                </span>
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap px-4">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
              <span className="text-base sm:text-xl font-jetbrains text-cyan-400 tracking-wide">{'{ minimize.code( ) }'}</span>
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-200 mb-3 sm:mb-4 max-w-3xl mx-auto font-light animate-fade-in-up animation-delay-400 tracking-wide px-4">
            Write <span className="text-cyan-400 font-semibold animate-pulse">less</span>. 
            Code <span className="text-blue-400 font-semibold animate-pulse animation-delay-200">smarter</span>. 
            Win <span className="text-purple-400 font-semibold animate-pulse animation-delay-400">bigger</span>.
          </p>

          <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600 px-4">
            The ultimate code minimization challenge where <span className="text-cyan-400 font-medium">creativity</span> meets <span className="text-blue-400 font-medium">efficiency</span>
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12 sm:mb-16 animate-fade-in-up animation-delay-800 px-4">
            <a href="#register" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl font-bold text-white text-base sm:text-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 relative overflow-hidden shadow-2xl shadow-cyan-500/30 tracking-wide">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 relative group-hover:rotate-12 transition-transform" />
                <span className="relative">Register Now</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform relative" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-white/10 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000 px-4">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5 sm:p-6 transform hover:-translate-y-2 transition-all duration-300 hover:border-cyan-400/50">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  <div className="text-2xl sm:text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
                    November 26
                  </div>
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-widest">Event Date</div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-5 sm:p-6 transform hover:-translate-y-2 transition-all duration-300 hover:border-blue-400/50">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 sm:w-20 sm:h-20 text-blue-400" />
                  <div className="text-xl sm:text-4xl font-orbitron font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-wide text-center">
                    CSE and Allied branches
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is OPTICODE Section */}
      <section className="relative py-16 sm:py-24 lg:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-widest font-orbitron">
                Discover
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-orbitron font-bold mb-4 sm:mb-6 tracking-wide px-4">
              <span className="text-gray-200">What is </span>
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 blur-xl sm:blur-2xl opacity-50"></span>
                <span className="relative bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                  OPTICODE
                </span>
              </span>
              <span className="text-gray-200">?</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto tracking-wide px-4">
              A revolutionary coding competition that challenges you to think differently
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Main Feature Card */}
            <div className="relative animate-fade-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-6 sm:p-10 transform hover:scale-105 transition-all duration-500 hover:border-cyan-400/50">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 sm:mb-6 transform hover:rotate-12 transition-transform duration-300">
                  <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-wide">
                  Code Minimization Challenge
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  Solve algorithmic challenges using the <span className="text-cyan-400 font-semibold">absolute minimum</span> lines of code. 
                  <br/><br/>
                  <span className="text-blue-400 font-medium">Fewer lines</span> = 
                  <span className="text-purple-400 font-medium"> Higher rank</span> = 
                  <span className="text-cyan-400 font-medium"> Better recognition</span>
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: Code, text: 'Multiple programming languages supported', color: 'cyan' },
                    { icon: Trophy, text: 'Real-time leaderboard rankings', color: 'blue' },
                    { icon: Users, text: 'Community recognition & networking', color: 'purple' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 sm:gap-4 group animate-fade-in-right" style={{ animationDelay: `${idx * 100}ms` }}>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 border border-${item.color}-500/30 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0`}>
                        <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${item.color}-400`} />
                      </div>
                      <span className="text-gray-200 font-medium group-hover:text-white transition-colors tracking-wide text-sm sm:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="space-y-4 sm:space-y-6">
              {[
                { 
                  icon: Zap, 
                  title: "Lightning Fast", 
                  desc: "Solve problems in record time with optimal algorithms and efficient code structures",
                  color: "cyan",
                  gradient: "from-cyan-500 to-blue-500"
                },
                { 
                  icon: Users, 
                  title: "College Community", 
                  desc: "Compete against the best coders from around the college and learn from peers",
                  color: "blue",
                  gradient: "from-blue-500 to-purple-500"
                },
                { 
                  icon: Award, 
                  title: "Certificates & Recognition", 
                  desc: "All participants receive certificates of participation and achievement",
                  color: "purple",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((item, idx) => (
                <div key={idx} className={`group relative animate-fade-in-right`} style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
                  <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-8 transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 hover:border-cyan-400/50">
                    <div className="flex items-start gap-3 sm:gap-5">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0`}>
                        <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white group-hover:text-cyan-400 transition-colors tracking-wide">{item.title}</h4>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm sm:text-base">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-16 sm:py-24 lg:py-28 px-4 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-widest font-orbitron">
                Process
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-orbitron font-bold mb-4 sm:mb-6 tracking-wide px-4">
              <span className="text-gray-200">How It </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                Works
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto tracking-wide px-4">
              Three simple steps to start your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connecting line - Hidden on mobile */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>

            {[
              { 
                num: 1, 
                title: "Register", 
                desc: "Sign up for OPTICODE in seconds and join thousands of developers",
                icon: Users,
                color: "cyan",
                gradient: "from-cyan-500 to-blue-500"
              },
              { 
                num: 2, 
                title: "Receive Challenge", 
                desc: "Get your unique coding problem set designed to test your skills",
                icon: Code2,
                color: "blue",
                gradient: "from-blue-500 to-purple-500"
              },
              { 
                num: 3, 
                title: "Submit & Compete", 
                desc: "Write optimized code and climb the leaderboard to victory",
                icon: Trophy,
                color: "purple",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((step, idx) => (
              <div key={idx} className="relative group animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500`}></div>
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 hover:border-cyan-400/50 h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center font-orbitron font-bold text-xl sm:text-2xl text-white shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 border-4 border-slate-900`}>
                      {step.num}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6 mt-6 sm:mt-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.gradient} bg-opacity-10 border border-${step.color}-500/30 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <step.icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${step.color}-400`} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Example Section - PERFECTLY FIXED SCROLL */}
      <section className="relative py-16 sm:py-24 lg:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-widest font-orbitron">
                Example
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-orbitron font-bold mb-4 sm:mb-6 tracking-wide px-4">
              <span className="text-gray-200">Challenge </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                Preview
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto tracking-wide px-4">
              See the power of code optimization in action
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Non-Optimized */}
            <div className="relative group animate-fade-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-red-500/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-red-400/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 border-b border-red-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex gap-1 sm:gap-1.5">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-red-400 font-jetbrains text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap">❌ Non-Optimized</span>
                  </div>
                  <span className="text-red-400/60 font-jetbrains text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">10 lines</span>
                </div>
                {/* Fixed scroll container */}
                <div className="code-scroll-container">
                  <pre className="code-block">
{`public static int sumArray(int[] numbers) {
    int sum = 0;
    for (int i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

int[] arr = {1, 2, 3, 4, 5};
int result = sumArray(arr);
System.out.println(result); // 15`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Optimized */}
            <div className="relative group animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-green-500/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 border-b border-green-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex gap-1 sm:gap-1.5">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-green-400 font-jetbrains text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap">✓ Optimized</span>
                  </div>
                  <span className="text-green-400/60 font-jetbrains text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">4 lines</span>
                </div>
                {/* Fixed scroll container */}
                <div className="code-scroll-container">
                  <pre className="code-block">
{`public static int sumArray(int[] numbers) {
    return Arrays.stream(numbers).sum();
}

System.out.println(sumArray(new int[]{1, 2, 3, 4, 5})); // 15`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Stats */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Lines Reduced', value: '60%', color: 'from-cyan-400 to-blue-500' },
              { label: 'Code Efficiency', value: '+150%', color: 'from-blue-400 to-purple-500' },
              { label: 'Readability', value: 'Enhanced', color: 'from-purple-400 to-pink-500' }
            ].map((stat, idx) => (
              <div key={idx} className="relative group animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 rounded-xl p-5 sm:p-6 text-center transform hover:scale-105 transition-all duration-300 hover:border-cyan-400/50">
                  <div className={`text-2xl sm:text-3xl font-orbitron font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="relative py-16 sm:py-24 lg:py-28 px-4 animate-fade-in-up" id="register">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-widest font-orbitron">
                Join Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-orbitron font-bold mb-4 sm:mb-6 tracking-wide px-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                Register Now
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 tracking-wide px-4">
              <span className="text-cyan-400 font-semibold animate-pulse">Limited spots available</span> — Secure your place today!
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow"></div>
            <form onSubmit={handleSubmit} className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-6 sm:p-10 transform hover:scale-[1.02] transition-all duration-300">
              
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="animate-fade-in-up">
                  <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-200 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 focus:scale-105 backdrop-blur-sm tracking-wide text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div className="animate-fade-in-up animation-delay-100">
                  <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-200 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 focus:scale-105 backdrop-blur-sm tracking-wide text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Department and USN Row */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="animate-fade-in-up animation-delay-200">
                  <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-200 uppercase tracking-widest">Department</label>
                  <select
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800/50 border border-cyan-500/20 text-white focus:border-cyan-400/50 focus:outline-none transition-all duration-300 focus:scale-105 backdrop-blur-sm tracking-wide text-sm sm:text-base"
                  >
                    <option value="" className="bg-slate-800">Select Department</option>
                    <option value="CSE" className="bg-slate-800">Computer Science and Engineering</option>
                    <option value="AIML" className="bg-slate-800">Artificial Intelligence and Machine Learning</option>
                    <option value="ISE" className="bg-slate-800">Information Science Engineering</option>
                    <option value="CSBS" className="bg-slate-800">Computer Science and Business Studies</option>
                    <option value="CSD" className="bg-slate-800">Computer Science and Design</option>
                    <option value="DS" className="bg-slate-800">Data Science</option>
                    <option value="ECE" className="bg-slate-800">Electronics and Communication Engineering</option>
                  </select>
                </div>
                <div className="animate-fade-in-up animation-delay-300">
                  <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-200 uppercase tracking-widest">USN</label>
                  <input
                    type="text"
                    required
                    value={formData.usn}
                    onChange={(e) => setFormData({ ...formData, usn: e.target.value.toUpperCase() })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 focus:scale-105 backdrop-blur-sm font-jetbrains tracking-wider text-sm sm:text-base"
                    placeholder="1XX21CS001"
                  />
                </div>
              </div>

              {/* HackerRank Username Row */}
              <div className="mb-4 sm:mb-6 animate-fade-in-up animation-delay-400">
                <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-200 uppercase tracking-widest">HackerRank Username</label>
                <input
                  type="text"
                  required
                  value={formData.hackerrank}
                  onChange={(e) => setFormData({ ...formData, hackerrank: e.target.value })}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 focus:scale-105 backdrop-blur-sm tracking-wide text-sm sm:text-base"
                  placeholder="your_hackerrank_username"
                />
              </div>

              {/* Semester and Section Row */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="animate-fade-in-up animation-delay-500">
                  <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-200 uppercase tracking-widest">Semester</label>
                  <select
                    required
                    value={formData.semester}
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800/50 border border-cyan-500/20 text-white focus:border-cyan-400/50 focus:outline-none transition-all duration-300 focus:scale-105 backdrop-blur-sm tracking-wide text-sm sm:text-base"
                  >
                    <option value="" className="bg-slate-800">Select Semester</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                      <option key={sem} value={sem} className="bg-slate-800">{sem}{sem === 1 ? 'st' : sem === 2 ? 'nd' : sem === 3 ? 'rd' : 'th'} Semester</option>
                    ))}
                  </select>
                </div>
                <div className="animate-fade-in-up animation-delay-600">
                  <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-200 uppercase tracking-widest">Section</label>
                  <input
                    type="text"
                    required
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value.toUpperCase() })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 focus:scale-105 backdrop-blur-sm font-jetbrains tracking-wider text-sm sm:text-base"
                    placeholder="A, B, C..."
                    maxLength={2}
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="mb-8 sm:mb-10 animate-fade-in-up animation-delay-700">
                <label className="flex items-start gap-3 sm:gap-4 cursor-pointer group/check p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-0.5 sm:mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded-lg border-white/20 accent-cyan-500 transition-transform hover:scale-110 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover/check:text-gray-300 transition-colors">
                    I agree to the terms and conditions, and consent to receive updates about <span className="text-cyan-400 font-medium">OPTICODE</span>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 sm:py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-xl font-bold text-white text-base sm:text-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group/btn animate-fade-in-up animation-delay-800 shadow-2xl shadow-cyan-500/30 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                  {isSubmitting ? 'Submitting...' : 'Secure Your Spot'}
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 blur-2xl opacity-50 group-hover/btn:opacity-100 transition-opacity"></div>
              </button>
              {submissionStatus && (
                <p
                  className={`mt-4 text-center font-medium tracking-wide text-sm sm:text-base ${
                    submissionStatus.type === 'success' ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {submissionStatus.message}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* Faculty Coordinators Section */}
      <section className="relative py-16 sm:py-24 lg:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 text-center animate-fade-in-up">
            <p className="text-xs sm:text-sm uppercase tracking-[0.4em] sm:tracking-[0.6em] text-cyan-500/80 font-orbitron mb-2 sm:mb-3">
              Get To Know Us
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-wide px-4">
              Meet the Team
            </h3>
            <p className="mt-3 sm:mt-4 text-gray-400 max-w-3xl mx-auto text-sm sm:text-base px-4">
              The passionate faculty and student coordinators powering OPTICODE are just below—scroll on to connect with the people behind the experience.
            </p>
          </div>
          {/* Faculty Coordinators */}
<div className="mt-4 sm:mt-6 mb-12 sm:mb-16">
  <h3 className="text-2xl sm:text-3xl font-orbitron font-bold mb-8 sm:mb-12 text-center tracking-wide px-4">
    <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Faculty Coordinators</span>
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
    {[
  { name: 'Vishwanath V K', role: 'Club Coordinator', dept: 'CSE', image: '/vishwanath.jpeg' },
  { name: 'Radhika Priya', role: 'Club President', dept: 'EC', image: '/radhika.jpeg' },
  { name: 'Dr. Nirmala C R', role: 'Head of the Department', dept: 'CSE', image: '/nirmala-cr.jpeg' },
  { name: 'Vinutha H P', role: 'Head of SWC', dept: 'ISE', image: '/Vinutha.jpeg' }
].map((faculty, idx) => (
  <div key={idx} className="relative group animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl overflow-hidden transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 hover:border-cyan-400/50">
      {/* Faculty Photo */}
      <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-cyan-500/20 overflow-hidden">
        {faculty.image ? (
          <img 
            src={faculty.image} 
            alt={faculty.name} 
            className="w-full h-full object-contain bg-black" 
          />
        ) : (
          <div className="text-center px-4">
            <User className="w-16 h-16 sm:w-24 sm:h-24 text-cyan-400/50 mx-auto mb-3 sm:mb-4" />
            <p className="text-gray-500 text-xs sm:text-sm">Faculty Photo</p>
            <p className="text-gray-600 text-xs mt-1 sm:mt-2">Pending</p>
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6 text-center">
        <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 tracking-wide">{faculty.name}</h4>
        <p className="text-cyan-400 text-xs sm:text-sm font-semibold mb-1">{faculty.role}</p>
        {faculty.dept && <p className="text-gray-400 text-xs">{faculty.dept}</p>}
      </div>
    </div>
  </div>
    ))}
  </div>
</div>

          {/* Student Coordinators with Contact Numbers */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-orbitron font-bold mb-8 sm:mb-12 text-center tracking-wide px-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Student Coordinators</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
             {[
  { name: 'Sanju K P', phone: '8618706393' },
  { name: 'Sriganesh H S', phone: '8152034188' },
  { name: 'Akshay K Bhat', phone: '6363850247' },
  { name: 'Nachiket', phone: '9916504140' },
  { name: 'Dhruva N R' },
  { name: 'Siri P' },
  { name: 'Sanjana N' },
  { name: 'Dhanya Shrujana' }
].map((student, idx) => (
  <div key={idx} className="relative group animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-blue-500/30 rounded-2xl p-4 sm:p-6 text-center transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 hover:border-blue-400/50">
      <h4 className="text-base sm:text-lg font-bold text-white mb-2 tracking-wide">{student.name}</h4>
      {student.phone ? (
        <div className="space-y-1">
          <a 
            href={`tel:${student.phone}`}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-jetbrains group/phone"
          >
            <Phone className="w-3.5 h-3.5 group-hover/phone:animate-pulse" />
            <span>{student.phone}</span>
          </a>
          <p className="text-gray-400 text-xs">CSE</p>
        </div>
      ) : (
        <p className="text-gray-400 text-sm">CSE</p>
      )}
    </div>
  </div>
))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 sm:py-24 lg:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-widest font-orbitron">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-orbitron font-bold mb-4 sm:mb-6 tracking-wide px-4">
              <span className="text-gray-200">Got </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                Questions?
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 tracking-wide px-4">
              Find answers to commonly asked questions
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              { q: "When does the contest start?", a: "OPTICODE begins on March 26, 2025 at 10:00 AM. You'll have the day to submit your solutions." },
              { q: "What languages are supported?", a: "Python, Java, C++, JavaScript, C#, Go, and Rust are all supported. Choose your favorite!" },
              { q: "How is code length measured?", a: "We count non-empty, non-comment lines. The HackerRank platform automatically counts for accuracy." },
              { q: "Can I team up?", a: "OPTICODE is an individual competition. Each participant competes solo for the best leaderboard placement." },
              { q: "Are there entry fees?", a: "Completely free! Registration is open to all students worldwide with no hidden costs." },
              { q: "Will I get a certificate?", a: "Yes! All participants will receive certificates of participation and top performers get special recognition certificates." }
            ].map((faq, idx) => (
              <button
                key={idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex justify-between items-center gap-3 sm:gap-4">
                    <h3 className="font-semibold text-base sm:text-lg text-white flex items-center gap-2 sm:gap-3 tracking-wide">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
                      <span className="leading-tight">{faq.q}</span>
                    </h3>
                    <span className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                  </div>
                  {openFaq === idx && (
                    <p className="text-gray-400 mt-3 sm:mt-4 pl-4 sm:pl-5 leading-relaxed animate-fade-in text-sm sm:text-base">
                      {faq.a}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="animate-fade-in-up text-center sm:text-left">
              <div className="flex items-center gap-3 mb-3 sm:mb-4 justify-center sm:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-orbitron font-bold text-lg sm:text-xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">OPTICODE</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">The ultimate code minimization challenge for elite programmers.</p>
            </div>
            <div className="animate-fade-in-up animation-delay-100 text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-widest text-gray-200">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm">
                {['Register', 'About', 'Rules', 'Contact'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 justify-center sm:justify-start">
                      <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in-up animation-delay-200 text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-widest text-gray-200">Contact</h4>
              <div className="space-y-2">
                <a
                  href="mailto:principal@bietdvg.edu"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-flex items-center gap-2 justify-center sm:justify-start"
                >
                 
                </a>
                <a
                  href="https://www.bietdvg.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wide hover:text-white transition-colors justify-center sm:justify-start"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                  BIET Official Website
                </a>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-300 text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-widest text-gray-200">Follow Us</h4>
              <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
                {[
                  { Icon: Linkedin, href: 'https://www.linkedin.com/school/bapuji-institute-of-engineering-&-technology-davanagere/' },
                  { Icon: Instagram, href: 'https://www.instagram.com/biet__cse?igsh=Z21rZDgzcmQ0ZnVm' }
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 sm:pt-8 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              &copy; 2025 <span className="text-cyan-400 font-medium">OPTICODE</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Custom Styles */}
      <style>{`
        /* Import fonts */
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        
        .font-exo {
          font-family: 'Exo 2', sans-serif;
        }
        
        .font-jetbrains {
          font-family: 'JetBrains Mono', monospace;
        }

        /* PERFECTLY CENTERED CODE SCROLL CONTAINER */
        .code-scroll-container {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
        }

        .code-scroll-container::-webkit-scrollbar {
          height: 8px;
        }

        .code-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .code-scroll-container::-webkit-scrollbar-thumb {
          background-color: rgba(59, 130, 246, 0.3);
          border-radius: 4px;
        }

        .code-scroll-container::-webkit-scrollbar-thumb:hover {
          background-color: rgba(59, 130, 246, 0.5);
        }

        .code-block {
          display: block;
          margin: 0;
          padding: 0.75rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          line-height: 1.6;
          color: #d1d5db;
          white-space: pre;
          tab-size: 4;
          min-width: fit-content;
        }

        @media (min-width: 640px) {
          .code-block {
            padding: 1rem;
            font-size: 12px;
          }
        }

        @media (min-width: 768px) {
          .code-block {
            padding: 1.5rem;
            font-size: 13px;
          }
        }

        @media (min-width: 1024px) {
          .code-block {
            padding: 2rem;
            font-size: 14px;
          }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-100vh) translateX(100px) scale(0);
            opacity: 0;
          }
        }

        @keyframes blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(50px, -80px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-30px, 50px) scale(0.9) rotate(240deg); }
        }

        @keyframes blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-60px, 70px) scale(1.15) rotate(-120deg); }
          66% { transform: translate(40px, -40px) scale(0.85) rotate(-240deg); }
        }

        @keyframes blob-3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          33% { transform: translate(calc(-50% + 40px), calc(-50% - 60px)) scale(1.2) rotate(90deg); }
          66% { transform: translate(calc(-50% - 50px), calc(-50% + 30px)) scale(0.9) rotate(180deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-down {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-blob-1 {
          animation: blob-1 20s ease-in-out infinite;
        }

        .animate-blob-2 {
          animation: blob-2 25s ease-in-out infinite;
        }

        .animate-blob-3 {
          animation: blob-3 30s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animate-grid-flow {
          animation: grid-flow 30s linear infinite;
        }

        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }

        .bg-grid-white {
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .bg-radial-gradient {
          background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Touch scrolling optimization for mobile */
        * {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </div>
  );
}

export default App;