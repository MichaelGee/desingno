import { Box } from 'rebass'
import { Button } from '../atoms/Button'
import { Card } from '../molecules/Card'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import React from 'react'
import styled from '@emotion/styled'

const Content = styled.div`
 height: 100vh;
 width: 100%;
 overflow-x: hidden;
scroll-behavior: smooth;
`

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

export const PageWrapper = ({children}) => {
    return (
        <Content>
            <Navbar/>
            {children}
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
        </Content>
    )
}
