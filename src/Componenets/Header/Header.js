import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Navigation from './Navigation'
import Burger from './Burger'

const Section = styled.section`
position: sticky;
top: 0;
left: 0;
background: DodgerBlue;
margin: 0 auto;
`

const Wrap = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap:wrap;
`

const Header = () => {
    const [showMenu, setshowMenu] = useState(false)
    const toggleMenu = () => setshowMenu(!showMenu)

    return (
        <Section >
            <Wrap>
                <Logo />
                <Burger showMenu={showMenu} toggleMenu={toggleMenu} />
                <Navigation showMenu={showMenu} />
            </Wrap>
        </Section>
    )
}

export default Header;