import React from 'react'
import { Nav,
        NavbarContainer,
        NavLinks,
        NavItem,
        NavMenu
    } from './NavbarStyles'
import { data } from '../data/NavbarData'

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavMenu>
                    {data.map((el, index) => (
                        <NavItem key={index}>
                            <NavLinks>
                                {el.text}
                            </NavLinks>
                        </NavItem>
                    ))}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
