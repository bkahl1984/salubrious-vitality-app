<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Triquetra Knot - Unity of Mind, Body and Soul</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Lora:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-green: #5a6b3f;
            --warm-green: #6b7c4a;
            --light-green: #8a9b6a;
            --cream: #f5f3ed;
            --gold: #d4af37;
            --soft-gold: #e8d4a0;
            --dark-green: #3d4a2c;
            --text-dark: #2c3320;
            --shadow: rgba(90, 107, 63, 0.15);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Lora', serif;
            color: var(--text-dark);
            background-color: var(--cream);
            line-height: 1.7;
            overflow-x: hidden;
        }

        /* Header & Navigation */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: linear-gradient(135deg, var(--primary-green) 0%, var(--warm-green) 100%);
            box-shadow: 0 4px 20px var(--shadow);
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
            color: var(--cream);
            text-decoration: none;
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
            background: var(--cream);
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
            right: -100%;
            width: 320px;
            height: 100vh;
            background: linear-gradient(165deg, var(--dark-green) 0%, var(--primary-green) 100%);
            padding: 6rem 2rem 2rem;
            transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
            overflow-y: auto;
        }

        .nav-menu.active {
            right: 0;
        }

        .nav-menu a {
            display: block;
            color: var(--cream);
            text-decoration: none;
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.4rem;
            font-weight: 600;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(245, 243, 237, 0.2);
            transition: all 0.3s ease;
            letter-spacing: 0.5px;
        }

        .nav-menu a:hover {
            color: var(--gold);
            padding-left: 1rem;
            border-left: 3px solid var(--gold);
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--primary-green) 0%, var(--warm-green) 50%, var(--light-green) 100%);
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
            color: var(--cream);
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
            color: var(--soft-gold);
        }

        .cta-button {
            display: inline-block;
            padding: 1.2rem 3rem;
            background: var(--gold);
            color: var(--dark-green);
            text-decoration: none;
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.2rem;
            font-weight: 600;
            border-radius: 50px;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
            letter-spacing: 1px;
        }

        .cta-button:hover {
            background: var(--soft-gold);
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(212, 175, 55, 0.4);
        }

        /* Section Styles */
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
            color: var(--primary-green);
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
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        /* Bio Section */
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
            background: linear-gradient(135deg, var(--light-green), var(--warm-green));
            border-radius: 20px;
            box-shadow: 0 20px 60px var(--shadow);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 6rem;
            color: var(--cream);
            margin: 0 auto;
        }

        .bio-text h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2rem;
            color: var(--primary-green);
            margin-bottom: 1.5rem;
        }

        .bio-text p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            line-height: 1.8;
        }

        /* Services Section */
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
            box-shadow: 0 10px 40px var(--shadow);
            transition: all 0.3s ease;
            border-top: 4px solid var(--gold);
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
            background: linear-gradient(90deg, var(--gold), var(--soft-gold), var(--gold));
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
            background: linear-gradient(135deg, var(--primary-green), var(--warm-green));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
            font-size: 2.5rem;
            color: var(--cream);
            box-shadow: 0 10px 30px var(--shadow);
        }

        .service-card h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.8rem;
            color: var(--primary-green);
            margin-bottom: 1rem;
            text-align: center;
        }

        .service-card p {
            text-align: center;
            line-height: 1.8;
        }

        /* Products Section */
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
            box-shadow: 0 10px 40px var(--shadow);
            transition: all 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(90, 107, 63, 0.25);
        }

        .product-image {
            width: 100%;
            height: 250px;
            background: linear-gradient(135deg, var(--light-green), var(--warm-green));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: var(--cream);
        }

        .product-info {
            padding: 2rem;
        }

        .product-info h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.6rem;
            color: var(--primary-green);
            margin-bottom: 1rem;
        }

        .product-price {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--gold);
            margin-bottom: 1rem;
        }

        /* Testimonials Section */
        .testimonials-container {
            max-width: 900px;
            margin: 3rem auto 0;
        }

        .testimonial-card {
            background: white;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 10px 40px var(--shadow);
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
            color: var(--light-green);
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
            color: var(--primary-green);
            text-align: right;
        }

        /* Contact Section */
        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
        }

        .contact-info {
            background: linear-gradient(135deg, var(--primary-green), var(--warm-green));
            padding: 3rem;
            border-radius: 20px;
            color: var(--cream);
            box-shadow: 0 20px 60px var(--shadow);
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
            box-shadow: 0 10px 40px var(--shadow);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--primary-green);
            margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 1rem;
            border: 2px solid var(--light-green);
            border-radius: 10px;
            font-family: 'Lora', serif;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-green);
            box-shadow: 0 0 0 3px rgba(90, 107, 63, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 150px;
        }

        .submit-button {
            width: 100%;
            padding: 1.2rem;
            background: linear-gradient(135deg, var(--primary-green), var(--warm-green));
            color: var(--cream);
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
            box-shadow: 0 10px 30px var(--shadow);
        }

        /* Schedule Section */
        .schedule-section {
            background: linear-gradient(135deg, var(--primary-green), var(--warm-green));
            color: var(--cream);
            text-align: center;
            padding: 6rem 2rem;
            margin: 4rem -2rem 0;
        }

        .schedule-section .section-title {
            color: var(--cream);
        }

        .schedule-section .section-title::after {
            background: linear-gradient(90deg, transparent, var(--cream), transparent);
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

        /* Footer */
        .footer {
            background: var(--dark-green);
            color: var(--cream);
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

        /* Responsive Design */
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

        /* Scroll reveal animation */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <!-- Header with Sticky Navigation -->
    <header class="header">
        <nav class="nav-container">
            <a href="#home" class="logo-container">
                <svg class="logo-img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <!-- Exact recreation of the Triquetra Knot from the user's logo -->
                    <defs>
                        <linearGradient id="headerGold" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#f9e5aa;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#e8d4a0;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#d4af37;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    
                    <!-- Top loop pointing up -->
                    <path d="M 256 80 
                             C 190 80, 140 100, 120 140
                             C 100 180, 110 220, 140 250
                             C 110 280, 100 320, 120 360
                             C 140 400, 190 420, 256 415
                             M 256 80
                             C 322 80, 372 100, 392 140
                             C 412 180, 402 220, 372 250
                             C 402 280, 412 320, 392 360
                             C 372 400, 322 420, 256 415" 
                          fill="none" 
                          stroke="url(#headerGold)" 
                          stroke-width="8"
                          stroke-linecap="round"
                          stroke-linejoin="round"/>
                    
                    <!-- Bottom left loop -->
                    <path d="M 140 250
                             C 110 220, 80 200, 60 210
                             C 40 220, 35 250, 50 280
                             C 65 310, 100 330, 140 335
                             M 140 250
                             C 170 240, 200 240, 220 255
                             C 240 270, 240 295, 220 315
                             C 200 335, 170 340, 140 335" 
                          fill="none" 
                          stroke="url(#headerGold)" 
                          stroke-width="8"
                          stroke-linecap="round"
                          stroke-linejoin="round"/>
                    
                    <!-- Bottom right loop -->
                    <path d="M 372 250
                             C 402 220, 432 200, 452 210
                             C 472 220, 477 250, 462 280
                             C 447 310, 412 330, 372 335
                             M 372 250
                             C 342 240, 312 240, 292 255
                             C 272 270, 272 295, 292 315
                             C 312 335, 342 340, 372 335" 
                          fill="none" 
                          stroke="url(#headerGold)" 
                          stroke-width="8"
                          stroke-linecap="round"
                          stroke-linejoin="round"/>
                    
                    <!-- Center interwoven section -->
                    <ellipse cx="256" cy="160" rx="50" ry="60" 
                             fill="none" 
                             stroke="url(#headerGold)" 
                             stroke-width="8"/>
                    
                    <ellipse cx="190" cy="300" rx="50" ry="60" 
                             fill="none" 
                             stroke="url(#headerGold)" 
                             stroke-width="8"
                             transform="rotate(30 190 300)"/>
                    
                    <ellipse cx="322" cy="300" rx="50" ry="60" 
                             fill="none" 
                             stroke="url(#headerGold)" 
                             stroke-width="8"
                             transform="rotate(-30 322 300)"/>
                </svg>
                <span class="logo-text">The Triquetra Knot</span>
            </a>
            <button class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
        <div class="nav-menu" id="navMenu">
            <a href="#bio">Bio/Intro</a>
            <a href="#services">Services/Coaching</a>
            <a href="#products">Products</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact Info</a>
            <a href="#schedule">Schedule Meeting</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <svg class="hero-logo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <!-- Hero logo - same design with glow effect -->
                <defs>
                    <linearGradient id="heroGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#f9e5aa;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#e8d4a0;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#d4af37;stop-opacity:1" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                
                <path d="M 256 80 C 190 80, 140 100, 120 140 C 100 180, 110 220, 140 250 C 110 280, 100 320, 120 360 C 140 400, 190 420, 256 415 M 256 80 C 322 80, 372 100, 392 140 C 412 180, 402 220, 372 250 C 402 280, 412 320, 392 360 C 372 400, 322 420, 256 415" 
                      fill="none" stroke="url(#heroGold)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
                
                <path d="M 140 250 C 110 220, 80 200, 60 210 C 40 220, 35 250, 50 280 C 65 310, 100 330, 140 335 M 140 250 C 170 240, 200 240, 220 255 C 240 270, 240 295, 220 315 C 200 335, 170 340, 140 335" 
                      fill="none" stroke="url(#heroGold)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
                
                <path d="M 372 250 C 402 220, 432 200, 452 210 C 472 220, 477 250, 462 280 C 447 310, 412 330, 372 335 M 372 250 C 342 240, 312 240, 292 255 C 272 270, 272 295, 292 315 C 312 335, 342 340, 372 335" 
                      fill="none" stroke="url(#heroGold)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
                
                <ellipse cx="256" cy="160" rx="50" ry="60" fill="none" stroke="url(#heroGold)" stroke-width="10" filter="url(#glow)"/>
                <ellipse cx="190" cy="300" rx="50" ry="60" fill="none" stroke="url(#heroGold)" stroke-width="10" transform="rotate(30 190 300)" filter="url(#glow)"/>
                <ellipse cx="322" cy="300" rx="50" ry="60" fill="none" stroke="url(#heroGold)" stroke-width="10" transform="rotate(-30 322 300)" filter="url(#glow)"/>
            </svg>
            <h1>The Triquetra Knot</h1>
            <p class="hero-subtitle">Unity of Mind, Body and Soul</p>
            <a href="#schedule" class="cta-button">Begin Your Journey</a>
        </div>
    </section>

    <!-- Bio/Intro Section -->
    <section id="bio">
        <h2 class="section-title reveal">Welcome to Wholeness</h2>
        <div class="bio-content reveal">
            <div class="bio-image">🙏</div>
            <div class="bio-text">
                <h3>About Our Philosophy</h3>
                <p>The Triquetra Knot represents the ancient wisdom of interconnectedness—the sacred union of mind, body, and soul. Our approach to wellness and coaching honors this timeless truth, recognizing that true transformation occurs when all aspects of self work in harmony.</p>
                <p>With over a decade of experience in holistic wellness and transformational coaching, we guide individuals on their journey toward balance, clarity, and authentic living. Our practice integrates modern coaching techniques with ancient wisdom traditions, creating a unique pathway to personal growth.</p>
                <p>Whether you're seeking clarity in life transitions, healing from past experiences, or simply wanting to deepen your connection to your authentic self, we create a sacred space for your transformation.</p>
            </div>
        </div>
    </section>

    <!-- Services/Coaching Section -->
    <section id="services">
        <h2 class="section-title reveal">Services & Coaching</h2>
        <div class="services-grid">
            <div class="service-card reveal">
                <div class="service-icon">🧘</div>
                <h3>Mindfulness Coaching</h3>
                <p>Learn to cultivate presence, reduce stress, and develop a deeper awareness of your thoughts and emotions through guided mindfulness practices.</p>
            </div>
            <div class="service-card reveal">
                <div class="service-icon">💚</div>
                <h3>Holistic Wellness</h3>
                <p>Integrate mind, body, and spirit through personalized wellness plans that honor your unique journey and support lasting transformation.</p>
            </div>
            <div class="service-card reveal">
                <div class="service-icon">✨</div>
                <h3>Life Transitions</h3>
                <p>Navigate major life changes with grace and clarity through compassionate guidance and practical tools for personal growth.</p>
            </div>
            <div class="service-card reveal">
                <div class="service-icon">🌱</div>
                <h3>Spiritual Growth</h3>
                <p>Deepen your spiritual practice and connection to your inner wisdom through contemplative exercises and sacred teachings.</p>
            </div>
            <div class="service-card reveal">
                <div class="service-icon">🌟</div>
                <h3>Energy Healing</h3>
                <p>Experience gentle yet powerful energy work designed to restore balance, release blockages, and promote deep healing.</p>
            </div>
            <div class="service-card reveal">
                <div class="service-icon">🎯</div>
                <h3>Goal Manifestation</h3>
                <p>Align your intentions with inspired action to bring your dreams into reality through proven manifestation techniques.</p>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products">
        <h2 class="section-title reveal">Products & Resources</h2>
        <div class="products-grid">
            <div class="product-card reveal">
                <div class="product-image">📖</div>
                <div class="product-info">
                    <h3>Guided Meditation Series</h3>
                    <p class="product-price">$29.99</p>
                    <p>A collection of 12 professionally recorded guided meditations for various intentions and healing modalities.</p>
                </div>
            </div>
            <div class="product-card reveal">
                <div class="product-image">📝</div>
                <div class="product-info">
                    <h3>Transformation Journal</h3>
                    <p class="product-price">$24.99</p>
                    <p>A beautifully designed journal with prompts and exercises to support your personal growth journey.</p>
                </div>
            </div>
            <div class="product-card reveal">
                <div class="product-image">🎓</div>
                <div class="product-info">
                    <h3>Online Course Bundle</h3>
                    <p class="product-price">$149.99</p>
                    <p>Access our comprehensive online courses covering mindfulness, energy work, and holistic wellness practices.</p>
                </div>
            </div>
            <div class="product-card reveal">
                <div class="product-image">🕯️</div>
                <div class="product-info">
                    <h3>Sacred Space Kit</h3>
                    <p class="product-price">$39.99</p>
                    <p>Everything you need to create a sacred space for meditation and spiritual practice in your home.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials">
        <h2 class="section-title reveal">Client Transformations</h2>
        <div class="testimonials-container">
            <div class="testimonial-card reveal">
                <p class="testimonial-text">Working with The Triquetra Knot has been truly life-changing. I've found a sense of peace and purpose I never thought possible. The holistic approach helped me integrate all aspects of my being and I finally feel whole.</p>
                <p class="testimonial-author">— Sarah M., Artist & Entrepreneur</p>
            </div>
            <div class="testimonial-card reveal">
                <p class="testimonial-text">The coaching sessions provided exactly what I needed during a difficult transition. The combination of practical tools and spiritual guidance helped me navigate my journey with grace and confidence.</p>
                <p class="testimonial-author">— Michael T., Healthcare Professional</p>
            </div>
            <div class="testimonial-card reveal">
                <p class="testimonial-text">I've tried many wellness programs, but this is the first that truly addressed mind, body, and soul together. The transformation I've experienced goes beyond anything I imagined possible.</p>
                <p class="testimonial-author">— Jennifer L., Corporate Executive</p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <h2 class="section-title reveal">Get In Touch</h2>
        <div class="contact-content">
            <div class="contact-info reveal">
                <h3>Contact Information</h3>
                <div class="contact-item">
                    <div class="contact-icon">📧</div>
                    <div>
                        <strong>Email</strong><br>
                        hello@triquetraknot.com
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📱</div>
                    <div>
                        <strong>Phone</strong><br>
                        (555) 123-4567
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div>
                        <strong>Location</strong><br>
                        Available for in-person and virtual sessions
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">⏰</div>
                    <div>
                        <strong>Hours</strong><br>
                        Monday - Friday: 9am - 7pm<br>
                        Saturday: 10am - 4pm
                    </div>
                </div>
            </div>
            <div class="contact-form reveal">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" class="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Schedule Section -->
    <section class="schedule-section" id="schedule">
        <h2 class="section-title">Schedule Your Session</h2>
        <div class="schedule-content">
            <p>Ready to begin your journey toward wholeness? Book a complimentary 30-minute discovery call to explore how we can support your transformation.</p>
            <a href="#" class="cta-button">Book Discovery Call</a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <svg class="footer-logo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M 256 80 C 190 80, 140 100, 120 140 C 100 180, 110 220, 140 250 C 110 280, 100 320, 120 360 C 140 400, 190 420, 256 415 M 256 80 C 322 80, 372 100, 392 140 C 412 180, 402 220, 372 250 C 402 280, 412 320, 392 360 C 372 400, 322 420, 256 415" 
                  fill="none" stroke="#f5f3ed" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M 140 250 C 110 220, 80 200, 60 210 C 40 220, 35 250, 50 280 C 65 310, 100 330, 140 335 M 140 250 C 170 240, 200 240, 220 255 C 240 270, 240 295, 220 315 C 200 335, 170 340, 140 335" 
                  fill="none" stroke="#f5f3ed" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M 372 250 C 402 220, 432 200, 452 210 C 472 220, 477 250, 462 280 C 447 310, 412 330, 372 335 M 372 250 C 342 240, 312 240, 292 255 C 272 270, 272 295, 292 315 C 312 335, 342 340, 372 335" 
                  fill="none" stroke="#f5f3ed" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <ellipse cx="256" cy="160" rx="50" ry="60" fill="none" stroke="#f5f3ed" stroke-width="8"/>
            <ellipse cx="190" cy="300" rx="50" ry="60" fill="none" stroke="#f5f3ed" stroke-width="8" transform="rotate(30 190 300)"/>
            <ellipse cx="322" cy="300" rx="50" ry="60" fill="none" stroke="#f5f3ed" stroke-width="8" transform="rotate(-30 322 300)"/>
        </svg>
        <p>&copy; 2026 The Triquetra Knot. All rights reserved.</p>
        <p>Unity of Mind, Body and Soul</p>
    </footer>

    <script>
        // Hamburger Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-menu a');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll reveal animation
        const reveals = document.querySelectorAll('.reveal');
        
        function checkScroll() {
            reveals.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Check on load

        // Form submission handling
        const contactForm = document.querySelector('.contact-form form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    </script>
</body>
</html>