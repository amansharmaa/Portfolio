import React from 'react';
import { DiFirebase, DiReact, DiStackoverflow, DiAptana , DiScala } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked hard to aquire the following skills in the past 3 years
       studing computer science as a B.E student
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js , Next.js <br />
            Bootstrap, CSS , HTML <br />
            JavaScript. 

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiScala size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Node.js, Express.js <br />
            ResfulAPI, JavaScript <br />
            Authentication, GIT <br />
    
          </ListParagraph>
        </ListContainer>
        </ListItem> <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DataBases</ListTitle>
          <ListParagraph>
            Experiece with <br />
            SQL, NoSQL, Mongodb <br />
            Mongoose.
          </ListParagraph>
        </ListContainer>
        </ListItem>
        <ListItem>
        <picture>
          <DiAptana size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            C , C++ , Pytohn <br />
            Java, Javascript.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiStackoverflow size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Experience with <br />
            Machine Learning, <br />
            Deep Learning, NLP, <br />
            computer vision.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
