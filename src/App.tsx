import { useState, useEffect } from 'react';

export default function TriquetraKnotWebsite() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Reveal animations
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuActive(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  const TriquetraLogo = ({ className, strokeColor = "url(#logoGradient)", strokeWidth = "8", showGlow = false }) => (
    <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f9e5aa', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#e8d4a0', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#d4af37', stopOpacity: 1 }} />
        </linearGradient>
        {showGlow && (
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        )}
      </defs>
      
      <path d="M 256 80 C 190 80, 140 100, 120 140 C 100 180, 110 220, 140 250 C 110 280, 100 320, 120 360 C 140 400, 190 420, 256 415 M 256 80 C 322 80, 372 100, 392 140 C 412 180, 402 220, 372 250 C 402 280, 412 320, 392 360 C 372 400, 322 420, 256 415" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth={strokeWidth}
            strokeLinecap="round" 
            strokeLinejoin="round"
            filter={showGlow ? "url(#glow)" : "none"}/>
      
      <path d="M 140 250 C 110 220, 80 200, 60 210 C 40 220, 35 250, 50 280 C 65 310, 100 330, 140 335 M 140 250 C 170 240, 200 240, 220 255 C 240 270, 240 295, 220 315 C 200 335, 170 340, 140 335" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth={strokeWidth}
            strokeLinecap="round" 
            strokeLinejoin="round"
            filter={showGlow ? "url(#glow)" : "none"}/>
      
      <path d="M 372 250 C 402 220, 432 200, 452 210 C 472 220, 477 250, 462 280 C 447 310, 412 330, 372 335 M 372 250 C 342 240, 312 240, 292 255 C 272 270, 272 295, 292 315 C 312 335, 342 340, 372 335" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth={strokeWidth}
            strokeLinecap="round" 
            strokeLinejoin="round"
            filter={showGlow ? "url(#glow)" : "none"}/>
      
      <ellipse cx="256" cy="160" rx="50" ry="60" 
               fill="none" 
               stroke={strokeColor} 
               strokeWidth={strokeWidth}
               filter={showGlow ? "url(#glow)" : "none"}/>
      <ellipse cx="190" cy="300" rx="50" ry="60" 
               fill="none" 
               stroke={strokeColor} 
               strokeWidth={strokeWidth}
               transform="rotate(30 190 300)"
               filter={showGlow ? "url(#glow)" : "none"}/>
      <ellipse cx="322" cy="300" rx="50" ry="60" 
               fill="none" 
               stroke={strokeColor} 
               strokeWidth={strokeWidth}
               transform="rotate(-30 322 300)"
               filter={showGlow ? "url(#glow)" : "none"}/>
    </svg>
  );

  return (
    <div style={{ fontFamily: "'Lora', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Lora:wght@400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: #f5f3ed;
          color: #2c3320;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(135deg, #5a6b3f 0%, #6b7c4a 100%);
          box-shadow: 0 4px 20px rgba(90, 107, 63, 0.15);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          box-shadow: 0 6px 30px rgba(90, 107, 63, 0.25);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #f5f3ed;
          text-decoration: none;
          cursor: pointer;
        }

        .logo-img {
          width: 50px;
          height: 50px;
          transition: transform 0.3s ease;
        }

        .logo-container:hover .logo-img {
          transform: rotate(120deg);
        }

        .logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .hamburger {
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          padding: 8px;
          z-index: 1001;
        }

        .hamburger span {
          width: 100%;
          height: 3px;
          background: #f5f3ed;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        .nav-menu {
          position: fixed;
          top: 0;
          right: ${menuActive ? '0' : '-100%'};
          width: 320px;
          height: 100vh;
          background: linear-gradient(165deg, #3d4a2c 0%, #5a6b3f 100%);
          padding: 6rem 2rem 2rem;
          transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
          overflow-y: auto;
        }

        .nav-menu a {
          display: block;
          color: #f5f3ed;
          text-decoration: none;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 600;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(245, 243, 237, 0.2);
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          cursor: pointer;
        }

        .nav-menu a:hover {
          color: #d4af37;
          padding-left: 1rem;
          border-left: 3px solid #d4af37;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #5a6b3f 0%, #6b7c4a 50%, #8a9b6a 100%);
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(138, 155, 106, 0.15) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-content {
          text-align: center;
          color: #f5f3ed;
          z-index: 1;
          max-width: 900px;
          padding: 2rem;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-logo {
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
          animation: floatRotate 6s ease-in-out infinite;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
        }

        @keyframes floatRotate {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: 2px;
          text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.8rem;
          font-weight: 300;
          margin-bottom: 3rem;
          font-style: italic;
          color: #e8d4a0;
        }

        .cta-button {
          display: inline-block;
          padding: 1.2rem 3rem;
          background: #d4af37;
          color: #3d4a2c;
          text-decoration: none;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
          letter-spacing: 1px;
          cursor: pointer;
          border: none;
        }

        .cta-button:hover {
          background: #e8d4a0;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.4);
        }

        section {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        section:nth-child(even) {
          background: linear-gradient(to bottom, transparent 0%, rgba(90, 107, 63, 0.03) 50%, transparent 100%);
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 700;
          color: #5a6b3f;
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          padding-bottom: 1rem;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }

        .bio-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .bio-image {
          width: 100%;
          max-width: 400px;
          height: 450px;
          background: linear-gradient(135deg, #8a9b6a, #6b7c4a);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(90, 107, 63, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
          color: #f5f3ed;
          margin: 0 auto;
        }

        .bio-text h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          color: #5a6b3f;
          margin-bottom: 1.5rem;
        }

        .bio-text p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }

        .service-card {
          background: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(90, 107, 63, 0.15);
          transition: all 0.3s ease;
          border-top: 4px solid #d4af37;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #d4af37, #e8d4a0, #d4af37);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(90, 107, 63, 0.25);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #5a6b3f, #6b7c4a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          font-size: 2.5rem;
          color: #f5f3ed;
          box-shadow: 0 10px 30px rgba(90, 107, 63, 0.15);
        }

        .service-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: #5a6b3f;
          margin-bottom: 1rem;
          text-align: center;
        }

        .service-card p {
          text-align: center;
          line-height: 1.8;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(90, 107, 63, 0.15);
          transition: all 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(90, 107, 63, 0.25);
        }

        .product-image {
          width: 100%;
          height: 250px;
          background: linear-gradient(135deg, #8a9b6a, #6b7c4a);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: #f5f3ed;
        }

        .product-info {
          padding: 2rem;
        }

        .product-info h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          color: #5a6b3f;
          margin-bottom: 1rem;
        }

        .product-price {
          font-size: 1.5rem;
          font-weight: 600;
          color: #d4af37;
          margin-bottom: 1rem;
        }

        .testimonials-container {
          max-width: 900px;
          margin: 3rem auto 0;
        }

        .testimonial-card {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(90, 107, 63, 0.15);
          margin-bottom: 2rem;
          position: relative;
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: 1rem;
          left: 2rem;
          font-size: 6rem;
          font-family: 'Cormorant Garamond', serif;
          color: #8a9b6a;
          opacity: 0.3;
          line-height: 1;
        }

        .testimonial-text {
          font-size: 1.2rem;
          font-style: italic;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .testimonial-author {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          color: #5a6b3f;
          text-align: right;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          background: linear-gradient(135deg, #5a6b3f, #6b7c4a);
          padding: 3rem;
          border-radius: 20px;
          color: #f5f3ed;
          box-shadow: 0 20px 60px rgba(90, 107, 63, 0.15);
        }

        .contact-info h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .contact-form {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(90, 107, 63, 0.15);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #5a6b3f;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #8a9b6a;
          border-radius: 10px;
          font-family: 'Lora', serif;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #5a6b3f;
          box-shadow: 0 0 0 3px rgba(90, 107, 63, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }

        .submit-button {
          width: 100%;
          padding: 1.2rem;
          background: linear-gradient(135deg, #5a6b3f, #6b7c4a);
          color: #f5f3ed;
          border: none;
          border-radius: 10px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(90, 107, 63, 0.15);
        }

        .schedule-section {
          background: linear-gradient(135deg, #5a6b3f, #6b7c4a);
          color: #f5f3ed;
          text-align: center;
          padding: 6rem 2rem;
          margin: 4rem -2rem 0;
        }

        .schedule-section .section-title {
          color: #f5f3ed;
        }

        .schedule-section .section-title::after {
          background: linear-gradient(90deg, transparent, #f5f3ed, transparent);
        }

        .schedule-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .schedule-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .footer {
          background: #3d4a2c;
          color: #f5f3ed;
          text-align: center;
          padding: 3rem 2rem;
        }

        .footer-logo {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          opacity: 0.8;
        }

        .footer p {
          opacity: 0.8;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.3rem;
          }

          .hero-logo {
            width: 150px;
            height: 150px;
          }

          .bio-content,
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .nav-menu {
            width: 100%;
          }

          .services-grid,
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          <a href="#home" className="logo-container" onClick={(e) => handleNavClick(e, '#home')}>
            <img 
              src='/salubrious-vitality-app/logo.png'
              alt='Logo'
              className='logo'
              style={{ width: 100, height: 100 }}
            />
            <span className="logo-text">The Triquetra Knot</span>
          </a>
          <button 
            className={`hamburger ${menuActive ? 'active' : ''}`}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
        <div className="nav-menu">
          <a href="#bio" onClick={(e) => handleNavClick(e, '#bio')}>Bio/Intro</a>
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services/Coaching</a>
          <a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Products</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')}>Testimonials</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Info</a>
          <a href="#schedule" onClick={(e) => handleNavClick(e, '#schedule')}>Schedule Meeting</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <TriquetraLogo className="hero-logo" strokeWidth="10" showGlow={true} />
          <h1>The Triquetra Knot</h1>
          <p className="hero-subtitle">Unity of Mind, Body and Soul</p>
          <a href="#schedule" className="cta-button" onClick={(e) => handleNavClick(e, '#schedule')}>
            Begin Your Journey
          </a>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio">
        <h2 className="section-title reveal">Welcome to Wholeness</h2>
        <div className="bio-content reveal">
          <div className="bio-image">🙏</div>
          <div className="bio-text">
            <h3>About Our Philosophy</h3>
            <p>The Triquetra Knot represents the ancient wisdom of interconnectedness—the sacred union of mind, body, and soul. Our approach to wellness and coaching honors this timeless truth, recognizing that true transformation occurs when all aspects of self work in harmony.</p>
            <p>With over a decade of experience in holistic wellness and transformational coaching, we guide individuals on their journey toward balance, clarity, and authentic living. Our practice integrates modern coaching techniques with ancient wisdom traditions, creating a unique pathway to personal growth.</p>
            <p>Whether you're seeking clarity in life transitions, healing from past experiences, or simply wanting to deepen your connection to your authentic self, we create a sacred space for your transformation.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2 className="section-title reveal">Services & Coaching</h2>
        <div className="services-grid">
          {[
            { icon: '🧘', title: 'Mindfulness Coaching', desc: 'Learn to cultivate presence, reduce stress, and develop a deeper awareness of your thoughts and emotions through guided mindfulness practices.' },
            { icon: '💚', title: 'Holistic Wellness', desc: 'Integrate mind, body, and spirit through personalized wellness plans that honor your unique journey and support lasting transformation.' },
            { icon: '✨', title: 'Life Transitions', desc: 'Navigate major life changes with grace and clarity through compassionate guidance and practical tools for personal growth.' },
            { icon: '🌱', title: 'Spiritual Growth', desc: 'Deepen your spiritual practice and connection to your inner wisdom through contemplative exercises and sacred teachings.' },
            { icon: '🌟', title: 'Energy Healing', desc: 'Experience gentle yet powerful energy work designed to restore balance, release blockages, and promote deep healing.' },
            { icon: '🎯', title: 'Goal Manifestation', desc: 'Align your intentions with inspired action to bring your dreams into reality through proven manifestation techniques.' }
          ].map((service, i) => (
            <div key={i} className="service-card reveal">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products">
        <h2 className="section-title reveal">Products & Resources</h2>
        <div className="products-grid">
          {[
            { icon: '📖', title: 'Guided Meditation Series', price: '$29.99', desc: 'A collection of 12 professionally recorded guided meditations for various intentions and healing modalities.' },
            { icon: '📝', title: 'Transformation Journal', price: '$24.99', desc: 'A beautifully designed journal with prompts and exercises to support your personal growth journey.' },
            { icon: '🎓', title: 'Online Course Bundle', price: '$149.99', desc: 'Access our comprehensive online courses covering mindfulness, energy work, and holistic wellness practices.' },
            { icon: '🕯️', title: 'Sacred Space Kit', price: '$39.99', desc: 'Everything you need to create a sacred space for meditation and spiritual practice in your home.' }
          ].map((product, i) => (
            <div key={i} className="product-card reveal">
              <div className="product-image">{product.icon}</div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="product-price">{product.price}</p>
                <p>{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h2 className="section-title reveal">Client Transformations</h2>
        <div className="testimonials-container">
          {[
            { text: "Working with The Triquetra Knot has been truly life-changing. I've found a sense of peace and purpose I never thought possible. The holistic approach helped me integrate all aspects of my being and I finally feel whole.", author: "— Sarah M., Artist & Entrepreneur" },
            { text: "The coaching sessions provided exactly what I needed during a difficult transition. The combination of practical tools and spiritual guidance helped me navigate my journey with grace and confidence.", author: "— Michael T., Healthcare Professional" },
            { text: "I've tried many wellness programs, but this is the first that truly addressed mind, body, and soul together. The transformation I've experienced goes beyond anything I imagined possible.", author: "— Jennifer L., Corporate Executive" }
          ].map((testimonial, i) => (
            <div key={i} className="testimonial-card reveal">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="section-title reveal">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info reveal">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <strong>Email</strong><br />
                hello@triquetraknot.com
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <strong>Phone</strong><br />
                (555) 123-4567
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <strong>Location</strong><br />
                Available for in-person and virtual sessions
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <strong>Hours</strong><br />
                Monday - Friday: 9am - 7pm<br />
                Saturday: 10am - 4pm
              </div>
            </div>
          </div>
          <div className="contact-form reveal">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section" id="schedule">
        <h2 className="section-title">Schedule Your Session</h2>
        <div className="schedule-content">
          <p>Ready to begin your journey toward wholeness? Book a complimentary 30-minute discovery call to explore how we can support your transformation.</p>
          <button className="cta-button">Book Discovery Call</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <TriquetraLogo className="footer-logo" strokeColor="#f5f3ed" />
        <p>&copy; 2026 The Triquetra Knot. All rights reserved.</p>
        <p>Unity of Mind, Body and Soul</p>
      </footer>
    </div>
  );
}