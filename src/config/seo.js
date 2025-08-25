export const seoConfig = {
  default: {
    title: "Anuj Singh - Software Engineer & Mobile App Developer",
    description: "Hey! I'm Anuj Singh, a software engineer with a focus on Mobile App Development along with having knowledge of full-stack development.",
    keywords: "Anuj Singh, software engineer, mobile app developer, React Native, full-stack developer, India, portfolio",
    author: "Anuj Singh",
    url: "https://www.anujraghuvanshi.site",
    image: "https://www.anujraghuvanshi.site/profile.jpeg",
    type: "website"
  },

  home: {
    title: "Anuj Singh - Software Engineer & Mobile App Developer | Home",
    description: "Hi! I'm Anuj Singh, a passionate software engineer specializing in Mobile App Development.",
    keywords: "Anuj Singh, software engineer, mobile app developer, React Native, portfolio, India, home"
  },

  about: {
    title: "Anuj Singh - Software Engineer & Mobile App Developer",
    description: "Learn more Anuj Singh, a passionate software engineer with expertise in mobile app development.",
    keywords: "Anuj Singh, software engineer background, mobile app developer experience"
  },

  skills: {
    title: "Skills & Technologies - Anuj Singh | Software Engineer",
    description: "Explore Anuj Singh's technical skills including React Native, JavaScript, Node.js, and mobile app development.",
    keywords: "Anuj Singh skills, React Native developer, JavaScript developer, mobile app development skills"
  }
};

// Structured data for different sections
export const structuredData = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anuj Singh",
    "jobTitle": "Software Engineer",
    "description": "A passionate software engineer specializing in Mobile App Development with React Native and full-stack technologies.",
    "url": "https://www.anujraghuvanshi.site",
    "image": "https://www.anujraghuvanshi.site/profile.jpeg",
    "sameAs": [
      "https://github.com/anujsingh",
      "https://linkedin.com/in/anujsingh",
      "https://twitter.com/anujsingh"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "Mobile App Development",
      "React Native",
      "Full-Stack Development",
      "JavaScript",
      "Node.js",
      "Mobile Applications",
      "Web Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Software Engineering"
    }
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Anuj Singh Portfolio",
    "description": "Personal portfolio website showcasing Anuj Singh's skills, experience, and projects in software development.",
    "url": "https://www.anujraghuvanshi.site",
    "author": {
      "@type": "Person",
      "name": "Anuj Singh"
    },
    "publisher": {
      "@type": "Person",
      "name": "Anuj Singh"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.anujraghuvanshi.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
};

// Meta tags configuration for different sections
export const getMetaTags = (section = 'default') => {
  const config = seoConfig[section] || seoConfig.default;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    author: config.author,
    url: config.url,
    image: config.image,
    type: config.type,
    twitterHandle: config.twitterHandle,
    siteName: config.siteName
  };
};
