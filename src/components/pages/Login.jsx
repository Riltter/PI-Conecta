import style from './Login.module.css';
import { Link, Navigate } from "react-router-dom";
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { signin } = useAuth();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !senha) {
            setError("Preencha todos os campos");
            console.log(error)
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        <Navigate to="/feed" replace={true}/>
    };

    return (
        <div className={style.DivImgTelaLogin}>
            <img className={style.imgTelaLogin} src="./src/assets/maos.jpg" alt="uniao" />
            <div className={style.FormProject}>
                <h1 className={style.Titulo}>Oi de novo! <br />Que bom que voltou!</h1>
                <div className={style.ImputGroup}>
                    <div className={style.ImputBox}>
                        <label htmlFor="email">Login</label>
                        <input type="text"
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => [setEmail(e.target.value), setError("")]}
                            required
                        />
                    </div>

                    <div className={style.ImputBox}>
                        <label htmlFor="senha">Senha</label>
                        <input type="password"
                            name='senha'
                            placeholder='Senha'
                            value={senha}
                            onChange={(e) => [setSenha(e.target.value), setError("")]}
                            required
                        />
                    </div>
                </div>

                <div className={style.buttons}>
                    <button className={style.btnCadastrar1} onClick={handleLogin}>Entrar</button>

                    <button
                        className={style.btnCadastrar2}
                        type='button'
                        onClick={() => navigate("/")}
                    >
                        Cadastrar
                    </button>
                </div>
            </div>
            {error && <p className={style.errorMessage}>{error}</p>}
        </div>
    );
}

export default Login;
