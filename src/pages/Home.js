import { Box } from "rebass";
import { Button } from "../components/atoms/Button";
import { Card } from "../components/molecules/Card";
import { Navbar } from '../components/organisms/Navbar';
import Phone from '../assets/images/phone.png'
import React from 'react';
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
`;

const Container = styled.div`
padding:0 10rem;
button{
    margin: 1.2rem 0;
}
`;



const Home = () => {
    return (
        <Container>
           <Navbar/>
           <Card>
            <Box justifyContent='space-between' alignItems='center' display='flex' px={60}>
            <Box flexDirection='column' px={60}>
            <Header>Award-winning custom designs and digital branding solutions</Header>
             <SubHeader>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</SubHeader>
            <Button alt>Learn More</Button>
            </Box>
            <Image src={Phone} />
            </Box>
           </Card>

        </Container>
    )
}
export default Home;
    