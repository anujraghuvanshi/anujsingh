import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Home.css'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-tsparticles'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/anuj.jpg'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <>
      <Helmet>
        <title>Anuj Singh - Software Engineer & Mobile App Developer | Home</title>
        <meta name="description" content="Hi! I'm Anuj Singh, a passionate software engineer specializing in Mobile App Development. I love learning new technologies and meeting new people." />
        <meta name="keywords" content="Anuj Singh, software engineer, mobile app developer, React Native, portfolio, India" />
        <meta property="og:title" content="Anuj Singh - Software Engineer & Mobile App Developer" />
        <meta property="og:description" content="Hi! I'm Anuj Singh, a passionate software engineer specializing in Mobile App Development. I love learning new technologies and meeting new people." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://www.anujraghuvanshi.site/anuj.jpg" />
        <meta name="twitter:title" content="Anuj Singh - Software Engineer & Mobile App Developer" />
        <meta name="twitter:description" content="Hi! I'm Anuj Singh, a passionate software engineer specializing in Mobile App Development." />
        <meta name="twitter:image" content="https://www.anujraghuvanshi.site/anuj.jpg" />

        {/* Structured Data for Person */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anuj Singh",
            "jobTitle": "Software Engineer",
            "description": "Hi! I'm Anuj Singh, a passionate software engineer specializing in Mobile App Development.",
            "url": "https://www.anujraghuvanshi.site",
            "image": "https://www.anujraghuvanshi.site/anuj.jpg",
            "sameAs": [
              "https://github.com/anujsingh",
              "https://linkedin.com/in/anujsingh",
              "https://twitter.com/anujsingh"
            ],
            "knowsAbout": [
              "Mobile App Development",
              "React Native",
              "Full-Stack Development",
              "JavaScript",
              "Node.js"
            ]
          })}
        </script>
      </Helmet>

      <div className="home-wrapper">
        <div className="home">
          <Particles className="particles" params={config.particles} />
          <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
            <img
              className="profile"
              alt="Anuj Singh's profile picture"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Anuj Singh</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'I like to develop new things',
                    'I love learning new tech.',
                    'I love meeting new people.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '_',
                  delay: 100,
                }}
              />
            </h1>
            <Bounce cascade>
              <div className="resume-container">
                <a
                  href="https://drive.google.com/file/d/1_zgFdpLQLzz3T2k9NcAwFwxtVj2irtgv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Anuj Singh's resume"
                >
                  Download Resume
                </a>
              </div>
            </Bounce>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
                aria-label="Scroll to about section"
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default Home
