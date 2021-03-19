import Facebook from '../atoms/icons/Facebook'
import Instagram from '../atoms/icons/Instagram'
import React from 'react'
import Twitter from '../atoms/icons/Twitter'
import WhiteLogo from '../atoms/icons/WhiteLogo'
import styled from '@emotion/styled'

const Container = styled.div`
background: ${({theme}) => theme.colors.primary.black};
padding: 4rem 6rem 2rem 6rem;
`
const Top = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 3rem 0;
 ${({ theme }) => theme.mq.sm`
 flex-direction: row;
 justify-content: space-between;
 `}
`

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${({ theme }) => theme.mq.sm`
 flex-direction: row;
 justify-content: space-between;
 `}
`
const Links = styled.p`
  color: ${({theme}) => theme.colors.primary.white};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 1rem 0;
  font-size: ${({theme}) => theme.font.size.small};
  ${({ theme }) => theme.mq.sm`
   margin: 0 1rem;
 `}
`

const Bottom = styled.div`
display: flex;
align-items: center;
flex-direction: column;

${({ theme }) => theme.mq.sm`
flex-direction: row;
justify-content: space-between;
margin: 3rem 0;
border-top: 0.2px solid ;
    padding: 3rem 0;
`}
`

const Text = styled.p`
color: ${({theme}) => theme.colors.secondary.white};
opacity: 0.5;
text-align: center;
font-size: ${({theme}) => theme.font.size.small};
  span{
      font-weight: 600;
  }
  ${({ theme }) => theme.mq.sm`
  text-align: justify;
`}
  
`

const Icons = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 1rem 0;
   svg{
       margin-right: 1rem;
   }
`
export const Footer = () => {
    return (
        <Container>
        <Top>
        <WhiteLogo size="15rem" />
        <LinkList>
        <Links as='a'>Our company</Links>
        <Links as='a'>Locations</Links>
        <Links as='a'>Contacts</Links>
        </LinkList>
        </Top>
        <Bottom>
          <Text>
              <span>Designo Central Office<br/></span>
3886 Wellington Street Toronto, Ontario M9C 3J5
          </Text>
          <Text>
              <span>
              Contact Us (Central Office) <br/>P : +1 253-863-8967
M : contact@designo.co
              </span>
          </Text>
          <Icons>
              <Facebook size="1.5rem"/>
              <Twitter size="1.5rem"/>
              <Instagram size="1.5rem"/>
          </Icons>
        </Bottom>
        </Container>
    )
}
