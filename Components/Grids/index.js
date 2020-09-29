import style from 'styled-components'
import { device } from '../../Breakpoints';
//Componentes
const Container = style.div`
    margin: 0 auto;
    width: 80%;
`;
const Row = style.div`
    display: flex;
    flex-direction: column;
    &:after {
        content: "";
        clear: both;
        display: table;
    }
    @media ${device.tablet} { 
        flex-direction: row;
        min-height: 8vh;
    }
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

const Col = style.div`
	padding: .25rem;
    @media ${device.tablet} { 
    	${({ Val }) => Val && getColumn(Val)}
  	}
`;

export{
    Container, 
    Col, 
    Row
}