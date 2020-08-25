import React from 'react'
import styled from 'styled-components'


const LogoContainer = styled.div`
margin: 1rem;
`

const Logotipe = styled.p`
color: white;
text-transform: uppercase;
`

const Logo = () => {
    return (
        <LogoContainer>
            <Logotipe>Logo</Logotipe>
        </LogoContainer>
    )
}

export default Logo;