import style from './RegisterProject.module.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const RegisterProject = () => {
    const [NomePorjeto, setNomeProjeto] = useState("");
    const [AreaInteresse, setAreaInteresse] = useState("");
    const [NumParticiapantes, setNumParticipantes] = useState("");
    const [Descricao, setDescricao] = useState("");

    return (
        <>
        <div className={style.DivImgTelaCadastro}>
            <img className={style.imgTelaCadastro} src=".\src\assets\cadastro projeto img.jpg" alt="ideia"/>
            <form>
                <h1 className={style.Titulo}>Cadastre seu Projeto!</h1> 
                <div className={style.ImputGroup}>
                    <div className={style.ImputBox}>
                        <label htmlFor="nameProjeto">Nome do Projeto</label>
                        <input type="text"
                        name='nameProjeto'
                        placeholder='Nome do Projeto'
                        onChange={(e) => setNomeProjeto(e.target.value)}
                        required
                        />
                    </div>

                    <div className={style.ImputBox}>
                        <label htmlFor="AreaInteresse">Área de Interesse</label>
                        <input type="text" 
                        name='AreaInteresse'
                        placeholder='Ex. Enfermagem'
                        onChange={(e) => setAreaInteresse(e.target.value)}
                        required
                        />
                    </div>

                    <div className={style.ImputBox}>
                        <label htmlFor="NumParticipantes">Número de Participantes</label>
                        <input type="number" 
                        min="1"
                        name='NumParticipantes'
                        placeholder='Número de Participantes'
                        onChange={(e) => setNumParticipantes(e.target.value)}
                        required
                        />
                    </div>

                    <div className={style.ImputBox}>
                        <label htmlFor="Descricao">Descrição do Projeto</label>
                        <input type="text" 
                        name='Descricao'
                        placeholder='Descreva seu projeto'
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                        />
                    </div>

                    <input 
                        className={style.btnCadastrar} 
                        type="submit" 
                        value={"Cadastrar"} 
                    />

                </div>
            </form>
        </div>
        </>
    );

}

export default RegisterProject;