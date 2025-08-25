import React from 'react'
import { Helmet } from 'react-helmet-async'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Coding from '../../lottie/coding.json'
import DisplayLottie from '../DisplayLottie'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Anuj Singh - Software Engineer & Mobile App Developer</title>
        <meta name="description" content="Learn more about Anuj Singh, a passionate software engineer with expertise in mobile app development, React Native, and full-stack technologies. Based in Punjab, India." />
        <meta name="keywords" content="Anuj Singh, software engineer background, mobile app developer experience, React Native developer, MCA Lovely Professional University" />
        <meta property="og:title" content="Anuj Singh - Software Engineer & Mobile App Developer" />
        <meta property="og:description" content="Learn more Anuj Singh, a passionate software engineer with expertise in mobile app development, React Native, and full-stack technologies." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://www.anujraghuvanshi.site/anuj.jpg" />
        <meta name="twitter:title" content="Anuj Singh - Software Engineer & Mobile App Developer" />
        <meta name="twitter:description" content="Learn more Anuj Singh, a passionate software engineer with expertise in mobile app development." />
        <meta name="twitter:image" content="https://www.anujraghuvanshi.site/anuj.jpg" />

        {/* Structured Data for Person */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anuj Singh",
            "jobTitle": "Software Engineer",
            "description": "A passionate software engineer with expertise in mobile app development, React Native, and full-stack technologies.",
            "url": "https://www.anujraghuvanshi.site",
            "image": "https://www.anujraghuvanshi.site/anuj.jpg",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Lovely Professional University",
              "degree": "MCA"
            },
            "knowsAbout": [
              "Mobile App Development",
              "React Native",
              "React.js",
              "JavaScript",
              "Angular",
              "Android Development",
              "iOS Development",
              "Full-Stack Development"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Punjab",
              "addressCountry": "IN"
            },
            "knowsLanguage": "English",
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Software Engineer",
              "occupationLocation": {
                "@type": "Place",
                "name": "India"
              }
            }
          })}
        </script>
      </Helmet>

      <Section title="About">
        <div className="about-content">
          <Fade duration={1000}>
            <div className="about-text">
              <h2>Who am I?</h2>
              <p>
                I'm Anuj{' '}
                <span role="img" aria-label="lightning">
                  😄
                </span>{' '}
              </p>
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                Hey! I'm a software engineer with a focus on Mobile App Development along with having knowledge of full-stack development. I am passionate about learning new things from new people.
              </p>
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I have done <b>MCA</b> from <b>Lovely Professional University.</b>
              </p>
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I work with React Native, React.js, javascript, Angular, Android & iOS.
              </p>
              <div className="typewriter">
                <p className="typewriter-start">
                  <span role="img" aria-label="lightning">
                    ⚡
                  </span>{' '}
                  I love
                </p>
                <Typewriter
                  options={{
                    strings: [
                      'learning new technologies',
                      'solving complex problems',
                      'fixing hard-to-fix bugs',
                      'trying new things',
                      'collaborating with others',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <p>.</p>
              </div>
              <p>
                Since 2016 - I've spent my time seeking and learning new
                technologies in Mobile & Web App Development. This has led to me
                working on some amazing world-class{' '}
                <Link
                  className="textLink"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  aria-label="View projects section"
                >
                  projects
                </Link>
                , worked at some{' '}
                <Link
                  className="textLink"
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={500}
                  aria-label="View experience section"
                >
                  amazing places
                </Link>
                , and worked with some great people.
              </p>
              <div className="location-wrapper">
                <svg
                  className="octicon octicon-location"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
                <p>Punjab, India</p>
              </div>
            </div>
          </Fade>
          {/* <Skills /> */}
          <div className="lottie-icon">
            <DisplayLottie animationData={Coding} />
          </div>
        </div>
      </Section>
    </>
  )
}

export default About
