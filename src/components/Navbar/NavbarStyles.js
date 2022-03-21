import styled from 'styled-components';
import { Container } from '../../GlobalStyles'
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: transparent;
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 100%;

	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;

	${Container}
`;

export const Heading = styled.h1`
    display: flex;
    justify-content: start;
    align-items: center;
    letter-spacing: 7px;
    font-size: 47px;
    font-family: 'Kaushan Script', cursive;
	margin-left: 20px;
`
export const NavMenu = styled.ul`
	display: flex;
    align-items: center;
    justify-content: end;
	list-style: none;
	text-align: center;
	width: 100%;
`;

export const NavItem = styled.li`
	cursor: pointer;
`;

export const NavLinks = styled.span`
	display: flex;
	align-items: center;
	text-decoration: none !important;
	height: 100%;
    color: black;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 525;
    padding: 0 12px;
    &:hover {
        padding: 5px;
        border-bottom: 1px solid black;
        transition: $ease;
        transform: scale(1.1);
    }
`;
