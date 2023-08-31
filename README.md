# PI-Conecta
Projeto integrador 3

## Criando ambiente para desenvolvimento do projeto integrador

Antes de mais nada, tenha o git instalado

* Passo 1 -  Crie uma pasta e abra ela no vscode, pois faremos um clone da pasta(repositorio) dentro da pasta que acaba de criar.


* Passo 2 (clonagem do repositorio) - abra o terminal e digite o código a seguir

	ˋ git clone https://github.com/Riltter/PI-Conecta.git ˋ

* Passo 3 - feita a clonagem, você irá para a pasta criada no repositório, da seguinte forma:

	ˋcd PI-Conectaˋ

* Passo 4 - a fim de deixar as coisas organizadas, crie sua branch(ramificação), após termina-la você poderá mesclar ela com a branch principal. Para criar a branch digite:

	ˋgit checkout -b nomeDaBranchˋ

OBS: talvez seja interessante criarmos branchs com nossos nomes

* Passo 5 - agora você pode mexer tranquilamente no código, após terminar suas alterações faça git add, git commit e git push para salvar as alterações. Da seguinte forma:

	ˋgit add .ˋ
	ˋgit commit -m "Sua mensagem de commit aqui"ˋ
	ˋgit push origin [Nome da branch que você criou para você]ˋ

* Passo 6 - Suponhamos que agora você queira levar as alterações para a branch principal, fazendo a integração com os demais códigos. Para isso, primeiro você precisa ir para a branch principal, digitando:

	ˋgit checkout mainˋ

	Estando na branch principal, digite:

	ˋgit merge [nome da sua branch]ˋ

Agora as alterações realizadas na sua branch foram para a principal. Porém sua branch ainda existe, você pode continuar trabalhando nela normalmente futuramente fazer o merge para atualizar a branch principal.


