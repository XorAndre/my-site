import style from 'styled-components'
import { device } from '../../Breakpoints';
//Estilo
const Menu = style.nav`
    background-color: #0E0E0E;
    position: fixed;
    width: 100%;
`;
const ContainerMenu = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
`;
const ContainerLinks1 = style.ul`
    displaly: none;
    @media ${device.tablet} { 
        display: block;
        min-height: 8vh;
        width: 80%;
    }
`;
const ContainerLinks2 = style.ul`
    width: 20%;
`;

export {
    Menu, 
    ContainerMenu,
    ContainerLinks1,
    ContainerLinks2
}