import Man2 from '../atoms/SVGImages/Man1.svg';
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    padding: 0 4rem;
`
const Text = styled.div`
    color: ${({theme}) => theme.colors.primary.black};
    font-size: ${({theme}) => theme.font.size.tiny};
    text-align:center;
    ${({ theme }) => theme.mq.sm`
    font-size: ${theme.font.size.normal};
    `}
`
const HeadText = styled.h1`
    font-size: ${({theme}) => theme.font.size.normal};
    color: ${({theme}) => theme.colors.primary.black};
    font-weight: 500;
    letter-spacing: 5px;
    text-transform: uppercase;
    ${({ theme }) => theme.mq.sm`
    font-size: ${theme.font.size.large};
    `}
`
const Image = styled.img`
 
`

const MainText = styled.div``


export const Statements = ({headText, mainText, image}) => {
    return (
        <Container>
          <Image src={image}/>
          <Text>
          <HeadText>{headText}</HeadText>
          <MainText>{mainText}</MainText>
          </Text>
        </Container>
    )
}


Statements.defaultProps = {
    headText: 'Passionate',
    mainText: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    image: Man2
}

Statements.propTypes = {
    headText: PropTypes.string,
    mainText: PropTypes.string,
    image: PropTypes.string
}