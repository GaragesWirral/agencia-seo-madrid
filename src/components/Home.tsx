import React from 'react';
import { Hero } from './Hero';
import { Marquee } from './Marquee';
import { AgencyDifference } from './AgencyDifference';
import { Services } from './Services';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { SeoWhyHiring } from './SeoWhyHiring';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <SeoWhyHiring />
      <AgencyDifference />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};