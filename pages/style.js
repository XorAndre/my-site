import style from 'styled-components'
import { device } from '../Breakpoints';
//Components
const HomeHeader = style.div`
    background-image: url(../img/eu.png);
    background-position: 30%;
    background-repeat: no-repeat;
    background-size: 80%;
    width: 100%;
    .Space_Header_Home{
        padding: 4rem 0;
    }
    @media ${device.tablet} { 
        background-position: 70%;
        background-repeat: no-repeat;
        background-size: 33%;
        .Space_Header_Home{
            padding: 13rem 0;
        }
    }
`;
const Name = style.h1`
    color: #fff;
    font-family: var(--montserrat);
    font-size: 3.4rem;
    font-weight: 800;
    text-transform: uppercase;
    @media ${device.tablet} { 
        font-size: 6rem;
    }
`;
const Slogan = style.p`
    color: #fff;
    font-family: var(--montserrat);
    font-size: 1.4rem;
    font-weight: 600;
    @media ${device.tablet} { 
        font-size: 3rem;
    }
`;

export {
    HomeHeader,
    Name,
    Slogan
};