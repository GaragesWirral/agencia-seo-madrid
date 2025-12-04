import React, { useEffect } from 'react';
import { Hero } from './Hero';
import { AgencyDifference } from './AgencyDifference';
import { Services } from './Services';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { SeoWhyHiring } from './SeoWhyHiring';
import { Methodology } from './Methodology';
import { WhyUs } from './WhyUs';

export const Home: React.FC = () => {
  useEffect(() => {
    // Robots
    let metaRobots = document.querySelector("meta[name='robots']") as HTMLMetaElement;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large";

    // Canonical
    let linkCanonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.agencia-seomadrid.com/";
  }, []);

  return (
    <>
      <Hero />
      <SeoWhyHiring />
      <AgencyDifference />
      <Services />
      <Methodology />
      <WhyUs />
      <Testimonials />
      <Contact />
    </>
  );
};