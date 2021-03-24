import React from 'react'
import styled from '@emotion/styled';

const Container =styled.div`
  padding: 3rem 0rem;
  background: ${({theme}) => theme.colors.primary.peach};
  color: ${({theme}) => theme.colors.primary.white};
  border-radius: 8px;
  display: flex;
  justify-content:center;
  align-items: center;
  width: ${(props) => props.width}%;

  ${({ theme }) => theme.mq.sm`
  padding: 8rem 4rem;
`}
`
export const Card = ({children, width}) => {
    return (
        <Container width={width}>
          {children}
        </Container>
    )
}
