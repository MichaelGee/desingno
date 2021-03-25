import { Box } from 'rebass'
import { Card } from '../components/molecules/Card';
import { ProjectCard } from '../components/molecules/ProjectCard';
import { ProjectLinkCard } from '../components/molecules/ProjectLinkCard';
import React from 'react'
import Three from '../assets/images/three.jpg';
import Two from '../assets/images/two.jpg';
import WebPic1 from '../assets/images/Web/webpic1.png'
import WebPic2 from '../assets/images/Web/webpic2.png'
import WebPic3 from '../assets/images/Web/webpic3.png'
import WebPic4 from '../assets/images/Web/webpic4.png'
import WebPic5 from '../assets/images/Web/webpic5.png'
import WebPic6 from '../assets/images/Web/webpic6.png'
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

const WebDesign = () => {
    return (
        <Container>
         
              <Box my={30} mx={30} sx={{
                '@media screen and (max-width: 816px)': {
               padding: '0',
               margin: '30px 0',
        }}}>
                 <Card>
                    <Box flexDirection='column' textAlign='center'>
                    <Header>Web Design</Header>
                    <SubHeader>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</SubHeader>
                    </Box>
                  </Card>
              </Box>
           <Box my={100} mx={30} sx={{
            display: 'grid',
            gridGap: 3,
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}>
               <ProjectCard heading='EXPRESS' sub='A multi-carrier shipping website for ecommerce businesses' imgUrl={WebPic1} useColor={true}/>
               <ProjectCard heading='TRANSFER' sub='Site for low-cost money transfers and sending money within seconds' imgUrl={WebPic2} useColor={true}/>
               <ProjectCard heading='PHOTON' sub='A state-of-the-art music player with high-resolution audio and DSP effects' imgUrl={WebPic3} useColor={true}/>
               <ProjectCard heading='BUILDER' sub='Connects users with local contractors based on their location' imgUrl={WebPic4} useColor={true}/>
               <ProjectCard heading='BLOGR' sub='Blogr is a platform for creating an online blog or publication' imgUrl={WebPic5} useColor={true}/>
               <ProjectCard heading='CAMP' sub='Get expert training in coding, data, design, and digital marketing' imgUrl={WebPic6} useColor={true}/>
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

export default WebDesign;
