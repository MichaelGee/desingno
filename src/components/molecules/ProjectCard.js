import PropTypes from 'prop-types';
import React from 'react'
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 40rem;
`;
const Image = styled.img`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
  margin: 0;
  padding: 0;
  display: block;
`;
const Bottom  = styled.div`
   background: #FDF3F0;
   padding: 4rem 2rem;
   text-align:center;
   border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
   
`;
const MainText = styled.h1`
    font-size: ${({theme}) => theme.font.size.normal};
    color: ${({theme}) => theme.colors.primary.peach};
    font-weight: 500;
    letter-spacing: 5px;
    text-transform: uppercase;
    ${({ theme }) => theme.mq.sm`
    font-size: ${theme.font.size.large};
  `}
`;
const SubText = styled.p`
    font-size: ${({theme}) => theme.font.size.tiny};
    ${({ theme }) => theme.mq.sm`
     font-size: ${theme.font.size.normal};
  `}
`

export const ProjectCard = ({heading, sub, imgUrl}) => {
    return (
        <Container>
            <Image src={imgUrl}/>
            <Bottom>
                <MainText>{heading}</MainText>
                <SubText>{sub}</SubText>
            </Bottom>
        </Container>
    )
}

ProjectCard.defaultProps = {
  heading: 'Photon',
  sub: 'A state-of-the-art music player with high-resolution audio and DSP effects',
  imgUrl: 'https://picsum.photos/200/'
}

ProjectCard.propTypes = {
  heading: PropTypes.string,
  sub: PropTypes.string,
  imgUrl: PropTypes.string
}
