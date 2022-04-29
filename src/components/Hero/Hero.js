import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          A little <br />
          Bit about me
        </SectionTitle>
        <SectionText>
        I am a 3rd year B.E (specialization in AIML) student. In the past three years I have learned a lot of things, worked on a lot of projects, solved a lot of leetcode questions and developed a lot of skills. 
      
        </SectionText>
        <Button onClick={() => window.location = "https://www.linkedin.com/in/aman-sharma-ab29501aa/"}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;