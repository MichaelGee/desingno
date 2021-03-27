import { Box } from 'rebass'
import { Card } from '../components/molecules/Card';
import { ProjectCard } from '../components/molecules/ProjectCard';
import { ProjectLinkCard } from '../components/molecules/ProjectLinkCard';
import React from 'react'
import Three from '../assets/images/three.jpg';
import Two from '../assets/images/two.jpg';
import appPic1 from '../assets/images/App/appPic1.png';
import appPic2 from '../assets/images/App/appPic2.png';
import appPic3 from '../assets/images/App/appPic3.png';
import appPic4 from '../assets/images/App/appPic4.png';
import appPic5 from '../assets/images/App/appPic5.png';
import styled from '@emotion/styled'

const Container = styled.div`
 
`
const Header = styled.h1`
 font-size: ${({theme}) => theme.font.size.large};
 margin: 1.2rem 0;
 line-height: 1.2;
`;

const SubHeader = styled.p`
font-size: ${({theme}) => theme.font.size.small};
margin: 1.2rem 0;
font-weight: 300;
`;

const AppDesign = () => {
    return (
        <Container>
         
              <Box my={30} mx={30} sx={{
                '@media screen and (max-width: 816px)': {
               padding: '0',
               margin: '30px 0',
        }}}>
                 <Card>
                    <Box flexDirection='column' textAlign='center'>
                    <Header>App Design</Header>
                    <SubHeader>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</SubHeader>
                    </Box>
                  </Card>
              </Box>
           <Box my={100} mx={30} sx={{
            display: 'grid',
            gridGap: 60,
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            }}>
               <ProjectCard heading='AIRFILTER' sub='Solving the problem of poor indoor air quality by filtering the air' imgUrl={appPic5} useColor={true}/>
               <ProjectCard heading='EYECAM' sub='Product that lets you edit your favorite photos and videos at any time' imgUrl={appPic1} useColor={true}/>
               <ProjectCard heading='FACEIT' sub='Get to meet your favorite internet superstar with the faceit app' imgUrl={appPic2} useColor={true}/>
               <ProjectCard heading='TODO' sub='A todo app that features cloud sync with light and dark mode' imgUrl={appPic3} useColor={true}/>
               <ProjectCard heading='LOOPSTUDIOS' sub='A VR experience app made for Loopstudios' imgUrl={appPic4} useColor={true}/>
           </Box>

           <Box display='flex' flexDirection='row' mt={100} mb={400} mx={30} sx={{
                '@media screen and (max-width: 816px)': {
                    flexDirection:'column'
        }}}>
                    <ProjectLinkCard text='App Design' image={Two} margin='1'/>
                    <ProjectLinkCard text='Graphics Design' image={Three} margin='1'/>
           </Box>
        </Container>
    )
}

export default AppDesign;
