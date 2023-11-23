import styled from "styled-components";
import { BiSearch, BiSliderAlt, BiWorld, BiBell, BiMenu } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";

const Navegacao = styled.nav`
    display: flex;
    align-items: center;
    height: 4rem;
    background-color: white;
    padding: 0 1rem; 

`;

const LogoConecta = styled.img`
    max-height: 100%;
    @media (max-width: 768px) {
        display: none;
    }
`;

const BarraPesquisa = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex: 1.5;
    background-color: #f0f0f0;

    @media (max-width: 768px) {
       width: 60vw;
    }
    
`;

const InputPesquisa = styled.input`
    flex-grow: 1; 
    font-size: 1.2rem;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #f0f0f0;
    @media (max-width: 768px) {
       width: 50vw;
    }
    
`;

const BotaoBarraPesquisa = styled.button`
    font-size: 1.4rem;
    padding: 10px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const BotaoIconesNavegacao = styled.button`
    font-size: 2.2rem; /* Ajuste o tamanho desejado aqui */
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const IconesNavegacao = styled.div`
    @media (max-width: 768px){
        display: none;
    }
`;
const IconesNavegacaoMobile = styled.div`
    @media (min-width: 768px){
        display: none;
    }
`

const Navbar = () => {
    return (
        <Navegacao>
            <LogoConecta src="/assets/Logo para Navbar.png" alt="Logo" />
            <BarraPesquisa>
                <BotaoBarraPesquisa type="button"><BiSliderAlt /></BotaoBarraPesquisa>
                <InputPesquisa type="text" placeholder="Pesquisar..." />
                <BotaoBarraPesquisa type="button"><BiSearch /></BotaoBarraPesquisa>
            </BarraPesquisa>
            <IconesNavegacao>
                <BotaoIconesNavegacao type="button"><BiWorld /></BotaoIconesNavegacao>
                <BotaoIconesNavegacao type="button"><RiUserSearchLine /></BotaoIconesNavegacao>
                <BotaoIconesNavegacao type="button"><BiBell /></BotaoIconesNavegacao>
                <BotaoIconesNavegacao type="button"><BiMenu /></BotaoIconesNavegacao>
            </IconesNavegacao>
            <IconesNavegacaoMobile>
                <BotaoIconesNavegacao type="button"><BiMenu /></BotaoIconesNavegacao>
            </IconesNavegacaoMobile>
        </Navegacao>
    );
}

export default Navbar;