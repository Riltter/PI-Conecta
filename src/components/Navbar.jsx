import styled from "styled-components";
import { BiSearch, BiSliderAlt, BiWorld, BiBell, BiMenu } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";


// Elementos do CSS
const Navegacao = styled.nav `
    display: flex;
    width: 100%;
    height: 4.85rem;
    background-color: white;
    position: absolute;
    pading botton: 10;
`;

const LogoConecta = styled.img`
    
`;

const BarraPesquisa = styled.div`

`;

const IconesNavegacao = styled.div`
    
`;



const Navbar = () => {
    return (
        <>
            <Navegacao>
                <LogoConecta src="./src/assets/Logo para Navbar.png" alt="Logo" />
                <BarraPesquisa>
                    <button type="button"><BiSearch /></button>
                    <input type="text" placeholder="Pesquisar..." />
                    <button type="button"><BiSliderAlt /></button>
                </BarraPesquisa>
                <IconesNavegacao>
                    <button type="button"><BiWorld /></button>
                    <button type="button"><RiUserSearchLine /></button>
                    <button type="button"><BiBell /></button>
                    <button type="button"><BiMenu /></button>
                </IconesNavegacao>


            </Navegacao>
        </>
    )
}

export default Navbar