import React from 'react'
import styled from 'styled-components'

const BurgerButton = styled.div`
    display: none;
@media (max-width: 768px) {
    display: flex;
    position: relative;
    margin: 2rem 1rem;
    cursor: pointer;
    justify-content: center;
    align-items:center;
  }
`
const BurgerImg = styled.span`
    display: block;
    width: 35px;
    height: 2px;
    background-color: white;
    transform: ${props => props.showMenu ? "rotate(45deg)" : "translate(0, 0)"} ;
    transition: all .5s ease;
&::before{
    content:"";
    position: absolute;
    top:0;
    left:0;
    width: 35px;
    height: 2px;
    background-color: white;
    transform: ${props => props.showMenu ? "rotate(-90deg)" : "translate(0, -10px)"} ;
    transition: all .5s ease;

}
&::after{
    content:"";
    position: absolute;
    bottom:0;
    left:0;
    width: 35px;
    height: 2px;
    background-color: white;
    transform: ${props => props.showMenu ? "rotate(-90deg)" : "translate(0, 10px)"} ;
    transition: all .5s ease;
}
`

const Burger = (props) => {
    return (
        <BurgerButton onClick={props.toggleMenu} >
            <BurgerImg showMenu={props.showMenu} />
        </BurgerButton >
    )
}

export default Burger;