import React from 'react'
import styled from 'styled-components'
import NavItems from './NavItems'

const Nav = styled.nav`
@media (max-width: 768px) {
    width: 100%;
    height: ${props => props.showMenu ? "100vh" : "0"} ;
    visibility: ${props => props.showMenu ? "visible" : "hidden"};
    overflow: ${props => props.showMenu ? "auto" : "hidden"};
    opacity: ${props => props.showMenu ? "1" : "0"};
    transform: ${props => props.showMenu ? "translate(0, 0)" : "translate(0, -500px)"};
    transition: all .5s ease;
}
`

const List = styled.ul`
    padding: 0;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    list-style:none;
    @media (max-width: 768px) {
    flex-direction:column;
}
`

const Navigation = (props) => {
    return (
        <Nav showMenu={props.showMenu}>
            <List>
                <NavItems />
            </List>
        </Nav>
    )
}

export default Navigation;