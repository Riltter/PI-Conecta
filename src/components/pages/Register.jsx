import style from './Register.module.css'


const formatarCPF = () => {
    console.log("foi")
};

function Register() {
    return (
        <>
            <section></section>
            <section></section>
            <section className={style.secao_formulario_cadastro}>
                <p>Quer se conectar aos outros estudantes? Faça o seu cadastro</p>
                <div className={style.formularioDeCadastro}>
                    <form action="#" className={style.form_input_group}>
                        <div className={style.input_box}>
                            <label htmlFor="userName">Nome do usuário</label>
                            <input type="text" id="userNameId" name="userName" placeholder='Digite o seu nome de usuário' required />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="name">Nome Completo</label>
                            <input type="text" id="nameId" name="name" placeholder='Digite o seu nome completo' required />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="emailId" name="email" placeholder='Digite o seu email institucional' required />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="birthday">Data de nascimento</label>
                            <input type="date" id="birthdayId" name="birthday" placeholder='dd/mm/aaaa' required />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" id="cpfId" name="cpf" maxLength="14" placeholder="000.000.000-00" onInput={formatarCPF} required />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="passwordId" name="password" required />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="passwordConfirm">Confirme sua senha</label>
                            <input type="password" id="passwordConfirmId" name="passwordConfirm" required />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Register;