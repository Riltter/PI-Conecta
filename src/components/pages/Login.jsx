import style from './Login.module.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
    const [NomePorjeto, setNomeProjeto] = useState("");
    const [AreaInteresse, setAreaInteresse] = useState("");
    const [NumParticiapantes, setNumParticipantes] = useState("");
    const [Descricao, setDescricao] = useState("");

    return (
        <>
            <div className={style.DivImgTelaCadastro}>
                <img className={style.imgTelaCadastro} src=".\src\assets\maos.jpg" alt="uniao" />
                <form className={style.FormProject}>
                    <h1 className={style.Titulo}>Oi de novo! <br />Que bom que voltou!</h1>
                    <div className={style.ImputGroup}>
                        <div className={style.ImputBox}>
                            <label htmlFor="nameProjeto">Login</label>
                            <input type="text"
                                name='nameProjeto'
                                placeholder='Email'
                                onChange={(e) => setNomeProjeto(e.target.value)}
                                required
                            />
                        </div>

                        <div className={style.ImputBox}>
                            <label htmlFor="AreaInteresse"></label>
                            <input type="text"
                                name='AreaInteresse'
                                placeholder='senha'
                                onChange={(e) => setAreaInteresse(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <input
                        className={style.btnCadastrar1}
                        type="submit"
                        value={"Cadastrar"}
                    />

                </form>
            </div>
        </>
    );

}

export default Login;