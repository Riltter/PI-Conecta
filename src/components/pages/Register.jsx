import style from './Register.module.css'

function Register() {
    return (
        <>
            <section></section>
            <section></section>
            <section className="secao-formulario-cadastro">
                <p>Quer se conectar aos outros estudantes? Faça o seu cadastro</p>
                <div className="formularioDeCadastro">
                    <form action="#" className="form-input-group">
                        <div className="input-box">
                            <label for="userName">Nome do usuário</label>
                            <input type="text" id="userNameId" name="userName" required />
                        </div>
                        <div className="input-box">
                            <label for="name">Nome Completo</label>
                            <input type="text" id="nameId" name="name" required />
                        </div>
                        <div className="input-box">
                            <label for="email">Email</label>
                            <input type="email" id="emailId" name="email" required />
                        </div>
                        <div className="input-box">
                            <label for="birthday">Data de nascimento</label>
                            <input type="date" id="birthdayId" name="birthday" required />
                        </div>
                        <div className="input-box">
                            <label for="cpf">CPF</label>
                            <input type="text" id="cpfId" name="cpf" maxlength="14" placeholder="000.000.000-00" oninput="formatarCPF(this)" required />
                        </div>
                        <div className="input-box">
                            <label for="password">Senha</label>
                            <input type="password" id="passwordId" name="password" required />
                        </div>
                        <div className="input-box">
                            <label for="passwordConfirm">Confirme sua senha</label>
                            <input type="password" id="passwordConfirmId" name="passwordConfirm" required />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Register;