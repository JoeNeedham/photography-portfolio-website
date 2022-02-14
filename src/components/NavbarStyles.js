import styled from 'styled-components';
import { Container } from '../GlobalStyles'
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

export const NavMenu = styled.ul`
	display: flex;
    align-items: center;
    justify-content: end;
	list-style: none;
	text-align: center;
	width: 100%;
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;
`;

export const NavLinks = styled.span`
	color: black;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
`;
