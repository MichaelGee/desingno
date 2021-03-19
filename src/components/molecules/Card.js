import React from 'react'
import styled from '@emotion/styled';

const Container =styled.div`
  padding: 4rem;
  background: ${({theme}) => theme.colors.primary.peach};
  color: ${({theme}) => theme.colors.primary.white};
  border-radius: 8px;
  display: flex;
  justify-content:center;
  align-items: center;
`
export const Card = ({children}) => {
    return (
        <Container>
          {children}
        </Container>
    )
}
