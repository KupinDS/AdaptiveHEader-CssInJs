import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
margin: 1rem;
`

const Link = styled.a`
text-decoration:none;
color: white;
&:hover{
color: lightblue;
}
`

const NavItems = () => {
    return (
        <>
            <Item><Link href="#Home">Home</Link></Item>
            <Item><Link href="#About">About</Link></Item>
            <Item><Link href="#Portfolio">Portfolio</Link></Item>
            <Item><Link href="#Contacts">Contacts</Link></Item>
        </>
    )
}

export default NavItems