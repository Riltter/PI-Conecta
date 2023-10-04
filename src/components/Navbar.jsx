import styled from "styled-components";
import { BiSearch, BiSliderAlt, BiWorld, BiBell, BiMenu } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";

const Navegacao = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: white;
    position: absolute;
`;

const LogoConecta = styled.img`
    max-height: 100%;
    margin-right: 20px;
`;

const BarraPesquisa = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex-grow: 0;
    width: 900px;
    margin-right: 20px;
    position: relative;
    background-color: #f0f0f0;
`;

const InputPesquisa = styled.input`
    flex-grow: 1; 
    font-size: 1.2rem;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #f0f0f0;
`;

const BotaoBarraPesquisa = styled.button`
    font-size: 1.4rem;
    padding: 10px;
    background-color:#f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const IconesNavegacao = styled.div`
    display: flex;
    align-items: center;
`;

const BotaoIconesNavegacao = styled.button`
    font-size: 2.4rem;
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <>
            <Navegacao>
                <LogoConecta src="./src/assets/Logo para Navbar.png" alt="Logo" />
                <BarraPesquisa>
                    <BotaoBarraPesquisa type="button"><BiSearch /></BotaoBarraPesquisa>
                    <InputPesquisa type="text" placeholder="Pesquisar..." />
                    <BotaoBarraPesquisa type="button"><BiSliderAlt /></BotaoBarraPesquisa>
                </BarraPesquisa>
                <IconesNavegacao>
                    <BotaoIconesNavegacao type="button"><BiWorld /></BotaoIconesNavegacao>
                    <BotaoIconesNavegacao type="button"><RiUserSearchLine /></BotaoIconesNavegacao>
                    <BotaoIconesNavegacao type="button"><BiBell /></BotaoIconesNavegacao>
                    <BotaoIconesNavegacao type="button"><BiMenu /></BotaoIconesNavegacao>
                </IconesNavegacao>
            </Navegacao>
        </>
    )
}

export default Navbar
