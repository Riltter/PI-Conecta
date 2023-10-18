import style from "./Register.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNasc] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(senha, "/", confirmSenha);
    if (
      senha === confirmSenha
        ? alert("Senhas conferem")
        : alert("Senhas não conferem")
    );
  };

  const handleAddUser = async (event) => {
    event.preventDefault();

    const dados = {
      nome_completo: nomeCompleto,
      email: email,
      cpf: cpf,
      senha: senha,
      nome_usuario: nomeUsuario,
      data_de_nascimento: dataNascimento,
    };

    const response = await axios.post("http://localhost:8800/", dados);

    if (response.status === 200) {
      alert("Usuário cadastrado com sucesso!");
    } else {
      alert("Erro ao cadastrar usuário!");
    }
  };

  return (
    <>
      <section className={style.secao_logo}>
        <div className={style.div_css}>
          <Link className={style.link_button} to="/login">
            <button>Entrar</button>
          </Link>
        </div>
        <div className={style.logo_conecta}>
          <img src=".\src\assets\conectaLogo.png" alt="Imagem Conecta!" />
        </div>
      </section>
      <section>
        <div className={style.div_apresentacao}>
          <img
            className={style.imagem_apresentacao}
            src=".\src\assets\azul.jpg"
            alt="Pessoas com roupa azul!"
          />
          <h1 className={style.texto_apresentacao1}>
            Conectando graduandos para potencializar a eficiência de projetos em
            desenvolvimento.
          </h1>
        </div>
        <div className={style.div_apresentacao2}>
          <h1 className={style.texto_apresentacao2}>
            Convide pessoas que entendem do assunto para te ajudar no seu
            projeto.
          </h1>
          <img
            className={style.imagem_apresentacao}
            src="./src/assets/maos.jpg"
            alt="Maos juntas"
          />
        </div>
        <div className={style.div_apresentacao}>
          <img
            className={style.imagem_apresentacao}
            src=".\src\assets\pessoas.jpg"
            alt="Pessoas trabalhando"
          />
          <h1 className={style.texto_apresentacao1}>
            Faça networking com granduandos da sua área e de outram também!
          </h1>
        </div>
      </section>
      <section className={style.secao_formulario_cadastro}>
        <p className={style.titleRegister}>
          Quer se conectar aos outros estudantes? Faça o seu cadastro!
        </p>
        <div className={style.formularioDeCadastro}>
          <form onSubmit={handleSubmit}>
            <div className={style.form_input_group}>
              <div className={style.input_box}>
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="nameId"
                  name="nome_completo"
                  placeholder="Digite o seu nome completo"
                  onChange={(e) => setNomeCompleto(e.target.value)}
                  required
                />
              </div>
              <div className={style.input_box}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="emailId"
                  name="email"
                  placeholder="Digite o seu e-mail institucional"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={style.input_box}>
                <label htmlFor="birthday">Data de nascimento</label>
                <input
                  type="date"
                  id="birthdayId"
                  name="data_de_nascimento"
                  placeholder="dd/mm/aaaa"
                  onChange={(e) => setDataNasc(e.target.value)}
                  required
                />
              </div>
              <div className={style.input_box}>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpfId"
                  name="cpf"
                  maxLength="14"
                  placeholder="000.000.000-00"
                  onChange={(e) => setCpf(e.target.value)}
                  required
                />
              </div>
              <div className={style.input_box}>
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="passwordId"
                  name="senha"
                  placeholder="Confirme sua senha"
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>
              <div className={style.input_box}>
                <label htmlFor="passwordConfirm">Confirme sua senha</label>
                <input
                  type="password"
                  id="passwordConfirmId"
                  name="passwordConfirm"
                  placeholder="Confirme sua senha"
                  onChange={(e) => setConfirmSenha(e.target.value)}
                  required
                />
              </div>
              <div className={style.input_box}>
                <label htmlFor="userName">Nome do usuário</label>
                <input
                  type="text"
                  id="userNameId"
                  name="nome_usuario"
                  placeholder="Digite o seu nome de usuário"
                  onChange={(e) => setNomeUsuario(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={style.contButton}>
              <input
                className={style.btnCadastrar}
                type="submit"
                name="Cadastrar"
                onClick={(e) => handleAddUser(e)}
              />
              <p className={style.pHaveAcconut}>
                Já tem uma conta? <Link to="/login">Clique aqui</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
