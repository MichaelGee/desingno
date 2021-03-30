import { Box } from 'rebass'
import { Card } from '../components/molecules/Card';
import { ProjectCard } from '../components/molecules/ProjectCard';
import { ProjectLinkCard } from '../components/molecules/ProjectLinkCard';
import React from 'react'
import Three from '../assets/images/three.jpg';
import Two from '../assets/images/two.jpg';
import graphPic1 from '../assets/images/Graphics/graphPic1.png';
import graphPic2 from '../assets/images/Graphics/graphPic2.png';
import graphPic3 from '../assets/images/Graphics/graphPic3.png';
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

const GraphicsDesign = () => {
    return (
        <Container>
         
              <Box my={30} mx={30} sx={{
                '@media screen and (max-width: 816px)': {
               padding: '0',
               margin: '30px 0',
        }}}>
                 <Card>
                    <Box flexDirection='column' textAlign='center'>
                    <Header>Graphic Design</Header>
                    <SubHeader>We deliver eye-catching branding materials that are tailored to meet your business objectives.</SubHeader>
                    </Box>
                  </Card>
              </Box>
           <Box my={100} mx={30} sx={{
            display: 'grid',
            gridGap: 60,
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            }}>
               <ProjectCard heading='TIM BROWN' sub='A book cover designed for Tim Brown’s new release, ‘Change’' imgUrl={graphPic2} useColor={true}/>
               <ProjectCard heading='BOXED WATER' sub='A simple packaging concept made for Boxed Water' imgUrl={graphPic1} useColor={true}/>
               <ProjectCard heading='SCIENCE!' sub='A poster made in collaboration with the Federal Art Project' imgUrl={graphPic3} useColor={true}/>
           </Box>

           <Box display='flex' flexDirection='row' mt={100} mb={400} mx={30} sx={{
                '@media screen and (max-width: 816px)': {
                    flexDirection:'column'
        }}}>
                    <ProjectLinkCard text='App Design' image={Two} link='/appdesign' margin='1'/>
                    <ProjectLinkCard text='Web Design' image={Three} link='/webdesign' margin='1'/>
           </Box>
        </Container>
    )
}

export default GraphicsDesign;
