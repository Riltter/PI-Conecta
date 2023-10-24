import style from "./Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();

  const { signin } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      console.log(error);
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/feed");
  };

  return (
    <div className={style.bodyLogin}>
      <div className={style.DivImgTelaLogin}>
        <img
          className={style.imgTelaLogin}
          src="/assets/maos.jpg"
          alt="uniao"
        />
        <div className={style.FormProject}>
          <h1 className={style.Titulo}>
            Oi de novo! <br />
            Que bom que voltou!
          </h1>
          <div className={style.ImputGroup}>
            <div className={style.ImputBox}>
              <label htmlFor="email">Login</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                required
              />
            </div>

            <div className={style.ImputBox}>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
                required
              />
              <p className={style.senha}>Esqueceu a senha?</p>
            </div>
            {error && <p className={style.errorMessage}>{error}</p>}
          </div>

          <div className={style.buttons}>
            <button className={style.btnCadastrar1} onClick={handleLogin}>
              Entrar
            </button>
            <Link to="/">
              <button className={style.btnCadastrar2} type="button">
                Cadastrar-se
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
