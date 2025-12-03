
import React from 'react';
import { Hero } from './Hero';
import { AgencyDifference } from './AgencyDifference';
import { Services } from './Services';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { SeoWhyHiring } from './SeoWhyHiring';
import { Methodology } from './Methodology';
import { WhyUs } from './WhyUs';

export const Home: React.FC = () => {
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
