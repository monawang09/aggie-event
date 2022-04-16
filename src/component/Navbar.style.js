import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: transparent;
height: 85px;
display: flex;
justify-content: space-between;
margin-left: 150px;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #FFFFFF;
display: flex;
align-items: center;
font-family: 'Archivo';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 22px;
padding: 0 3rem;
height: 100%;
text-decoration:none;

cursor: pointer;
&.active {
	color: #FFFFFF;
    text-decoration:none;
    font-weight: bold;
}
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-left: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
