import React from 'react'
import { Nav,
        NavbarContainer,
        NavLinks,
        NavItem,
        NavMenu,
        Heading
    } from '../Navbar/NavbarStyles'
import { data } from '../../data/NavbarData'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <Heading>
                    RIOVIISUALS
                </Heading>
                <NavMenu>
                    {data.map((el, index) => (
                        <NavItem key={index}>
                            <NavLinks>
                                <Link style={{textDecoration: 'none', color: 'black'}} to={el.pathname}>
                                    {el.text}
                                </Link>
                            </NavLinks>
                        </NavItem>
                    ))}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
