import { Box } from 'rebass'
import PropTypes from 'prop-types';
import React from 'react'
import Right from '../atoms/icons/Right'
import styled from '@emotion/styled'

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 16rem 4rem;
    border-radius: 2rem;
    position: relative;
    margin: ${(props) => props.margin}rem;
`
const MainText = styled.div`
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.primary.white};
    font-size: ${({theme}) => theme.font.size.large};
`
const Subtext = styled.h3`
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.primary.white};
    font-size: ${({theme}) => theme.font.size.small};
    letter-spacing: 1px;
    margin-right: 1rem;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`
const Overlay = styled.div`
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
`
const Image = styled.div`
    background: url(${(props)=>props.imageLink}) no-repeat center center;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    filter: grayscale(100%);
    border-radius: 2rem;
    background-size: cover;
 `

export const ProjectLinkCard = ({text, image, link, margin}) => {
    return (
        <Container margin={margin}>
            <Image imageLink={image}/>
           <Overlay>
           <MainText>{text}</MainText>
          <Box display="flex" justifyContent="space-between" >
              <Subtext as='a' href={link}>View Projects</Subtext>
              <Right size='0.6rem'/>
          </Box>
           </Overlay>
        </Container>
    )
}


ProjectLinkCard.defaultProps = {
    text: "App design",
    link: "/"
}

ProjectLinkCard.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string
}

