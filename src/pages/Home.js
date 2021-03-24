import { Box, Flex } from "rebass";

import { Button } from "../components/atoms/Button";
import { Card } from "../components/molecules/Card";
import { Footer } from "../components/organisms/Footer";
import Man1 from '../components/atoms/SVGImages/Man1.svg'
import Man2 from '../components/atoms/SVGImages/Man2.svg'
import Man3 from '../components/atoms/SVGImages/Man2.svg'
import { Navbar } from '../components/organisms/Navbar';
import One from '../assets/images/one.jpg';
import Phone from '../assets/images/phone.png'
import { ProjectCard } from "../components/molecules/ProjectCard";
import { ProjectLinkCard } from "../components/molecules/ProjectLinkCard";
import React from 'react';
import Three from '../assets/images/three.jpg';
import Two from '../assets/images/two.jpg';
import styled from '@emotion/styled'

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
const Image = styled.img`
width: 20%
@media (max-width: 816px){
    width: 40%;
}
`;

const Container = styled.div`
// padding:0 10rem;
button{
    margin: 1.2rem 0;
}
`;

const AbsoluteBox = styled.div`
  position: absolute;
  top: -120px;
  left: 0;
  right: 0;
  display: block;
  transform: translate(10%, -40%);
  @media (max-width: 500px){
    top: -180px;
}
 `

const Home = () => {
    return (
        <Container>
           <Navbar/>
            <Box my={30} mx={30} sx={{
                '@media screen and (max-width: 816px)': {
               padding: '0',
               margin: '30px 0',
        }}}>
                <Card>
                    <Box justifyContent='space-between' alignItems='center' display='flex' px={60} sx={{
                '@media screen and (max-width: 816px)': {
                flexDirection: 'column',
        }}} >
                        <Box flexDirection='column' px={60} sx={{
                '@media screen and (max-width: 816px)': {
                display: 'flex',
                alignItems:'center',
                justifyContent: 'center',
                textAlign: 'center'
        }}}>
                            <Header>Award-winning custom designs and digital branding solutions</Header>
                            <SubHeader>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</SubHeader>
                            <Button alt>Learn More</Button>
                        </Box>
                        <Image src={Phone} />
                    </Box>
                </Card>
            </Box>

           <Box my={100} mx={30} sx={{
            display: 'grid',
            gridGap: 3,
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}>
                <Box sx={{    gridColumn: '1',
                        gridRow: '1 / 3',
                        '@media screen and (max-width: 816px)': {
                            gridColumn: '1',
                        gridRow: '1',
                        }
                }}>
                <ProjectLinkCard text='Web Design' link={One}/>
                </Box>
                <Box sx={{gridColumn: '2',
                        gridRow: '1 / 2', '@media screen and (max-width: 816px)': {
                            gridColumn: '1',
                        gridRow: '2',
                    }}}>
                <ProjectLinkCard text='App Design' link={Two}/>
                </Box>
                <Box sx={{gridColumn: '2',
                        gridRow: '2 / 2', '@media screen and (max-width: 816px)': {
                            gridColumn: '1',
                        gridRow: '3',
                    }}}>
                <ProjectLinkCard text='Graphics Design' link={Three}/>
                </Box>
           </Box>
           <Flex mt={100} mb={300} mx={30} sx={{
                '@media screen and (max-width: 768px)': {
                flexDirection: 'column',
        }
           }}>
               <ProjectCard heading='passion' sub='Each project starts with an 
               in-depth brand research to ensure we only create products
                that serve a purpose. We merge art, design, and technology 
                into exciting new solutions' imgUrl={Man1}/>
                <ProjectCard heading='RESOURCEFUL' sub='Everything that we do has a strategic purpose. 
                We use an agile approach in all of our projects and value customer collaboration. 
                It guarantees superior results that fulfill our clients’ needs.' imgUrl={Man2}/>
                <ProjectCard heading='friendly' sub='We are a group of enthusiastic folks who 
                know how to put people first. Our success depends on our customers, and we strive to 
                give them the best experience a company
                 can provide.' imgUrl={Man3}/>
           </Flex>
           <Footer>
           <AbsoluteBox>
             <Card width='80'>
            
             <Box justifyContent='space-between' alignItems='center' display='flex' px={60} sx={{
                '@media screen and (max-width: 816px)': {
                padding: '0',
                flexDirection: 'column'
        }}}>
                            <Box display='flex'  flexDirection='column'  px={60}>
                            <Header>Let’s talk about your project</Header>
                            <SubHeader>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</SubHeader>
                            
                        </Box>
                        <Button alt>Get in touch</Button>
                </Box>
             
            </Card>  
            </AbsoluteBox>
          </Footer>
        </Container>
    )
}
export default Home;