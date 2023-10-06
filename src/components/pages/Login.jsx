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
            <div className={style.DivImgTelaLogin}>
                <img className={style.imgTelaLogin} src=".\src\assets\maos.jpg" alt="uniao" />
                <form className={style.FormProject}>
                    <h1 className={style.Titulo}>Oi de novo! <br />Que bom que voltou!</h1>
                    <div className={style.ImputGroup}>
                        <div className={style.ImputBox}>
                            <label htmlFor="email">Login</label>
                            <input type="text"
                                name='email'
                                placeholder='Email'
                                onChange={(e) => setemail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={style.ImputBox}>
                            <label htmlFor="senha"></label>
                            <input type="text"
                                name='senha'
                                placeholder='senha'
                                onChange={(e) => setsenha(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className={style.buttons}>
                        <input
                            className={style.btnCadastrar1}
                            type="submit"
                            value={"Entrar"}
                        />
                        <input 
                            className={style.btnCadastrar2}
                            type='submit'
                            value={"Cadastrar"} />
                    </div>
                </form>
            </div>
        </>
    );

}

export default Login;