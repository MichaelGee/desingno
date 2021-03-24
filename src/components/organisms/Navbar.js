import { Box, Flex } from 'rebass';
import React, {useState} from 'react'

import Hambuger from '../atoms/icons/Hambuger';
import Logo from '../atoms/icons/Logo'
import X from '../atoms/icons/X';
import styled from '@emotion/styled';
import {useMedia} from 'react-use';

const Container = styled.div`
 position: relative;
 background: #fff;
 padding: 4rem 4rem;
 z-index: 3;
 svg{
    cursor: pointer
}
//  &::before{
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     background-color: rgba(0, 0, 0, .8);
//     z-index: 1000;
//     opacity: 0;
//     transform: scale(0);
//     transition: opacity .6s;
//  }
`

const Links = styled.p`
 text-transform: uppercase;
 margin-right: 2rem;
 letter-spacing: 3px;
`

const Menu = styled.div`
 background: ${({theme}) => theme.colors.primary.black};
 position: absolute;
 top: 3rem;
 left: 0;
 right: 0;
 transform: ${({ open }) => open ? 'translateY(59%)' : 'translateY(-180%)'};
 transition: transform 0.3s ease-in-out;
 padding: 2rem;
 width: 100%;
 z-index: -5;
 display: flex;
 flex-direction:column;
`

const Items = styled.p`
text-transform: uppercase;
color: ${({theme}) => theme.colors.primary.white};
`


export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const isWide = useMedia('(min-width: 480px)');

    const toggleMenu = () => setOpen(v => !v)
   
    return (
        <Container>
            {isWide === true ? (
            <Box display='flex' alignItems='center' justifyContent='space-between'>
            <Logo size='13rem'/>
                <Flex display='flex' alignItems='center' justifyContent='space-between'>
                    <Links as='a'>Our company</Links>
                    <Links as='a'>Locations</Links>
                    <Links as='a'>Contacts</Links>
                </Flex>
            </Box>) : (
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Logo size='10rem'/>
                {!open ?  <Hambuger  size='1.5rem' onClick={toggleMenu}/> : <X  size='1.5rem' onClick={toggleMenu}/>}
            </Box>
            ) }
            <Menu open={open}>
                <Items as='a'>Our company</Items>
                <Items as='a'>Locations</Items>
                <Items as='a'>Contacts</Items>
            </Menu>

        </Container>
    )
}
