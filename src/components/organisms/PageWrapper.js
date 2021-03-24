import React from 'react'
import styled from '@emotion/styled'

const Content = styled.div`
 height: 100vh;
 width: 100%;
 overflow-x: hidden;
scroll-behavior: smooth;
`

export const PageWrapper = ({children}) => {
    return (
        <Content>
            {children}
        </Content>
    )
}
