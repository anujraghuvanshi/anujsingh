import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Anuj Singh - Software Engineer & Mobile App Developer",
  description = "Hey! I'm Anuj Singh, a software engineer with a focus on Mobile App Development along with having knowledge of full-stack development. I am passionate about learning new things from new people.",
  keywords = "Anuj Singh, software engineer, mobile app developer, React Native, full-stack developer, India, portfolio",
  author = "Anuj Singh",
  url = "https://www.anujraghuvanshi.site",
  image = "https://www.anujraghuvanshi.site/profile.jpeg",
  type = "website",
  publishedAt = "2024-01-01",
  modifiedAt = "2024-12-25"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anuj Singh",
    "jobTitle": "Software Engineer",
    "description": description,
    "url": url,
    "image": image,
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
      "Mobile Applications"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    }
  };

  return (
    <Helmet>
      {/* Dynamic Meta Tags - These will override static ones when needed */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Dynamic Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Dynamic Twitter Card Meta Tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Anuj Singh Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Anuj Singh" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Mobile Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

      {/* Performance Meta Tags */}
      <meta name="msapplication-navbutton-color" content="#000000" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
};

export default SEO;
