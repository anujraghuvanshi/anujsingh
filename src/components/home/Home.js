import React, { useState } from 'react'
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
    <div className="home-wrapper">
      <div className="home">
        <Particles className="particles" params={config.particles} />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <img
            className="profile"
            alt="Anuj's profile"
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
  )
}

export default Home
