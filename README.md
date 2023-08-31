# PI-Conecta
Projeto integrador 3

## Criando ambiente para desenvolvimento do projeto integrador

Antes de mais nada, tenha o git instalado

* Passo 1 -  Crie uma pasta e abra ela no vscode, pois faremos um clone da pasta(repositorio) dentro da pasta que acaba de criar.


* Passo 2 (clonagem do repositorio) - abra o terminal e digite o código a seguir

 	 git clone https://github.com/Riltter/PI-Conecta.git 

* Passo 3 - feita a clonagem, você irá para a pasta criada no repositório, da seguinte forma:

 	 cd PI-Conecta

* Passo 4 - a fim de deixar as coisas organizadas, crie sua branch(ramificação), após termina-la você poderá mesclar ela com a branch principal. Para criar a branch digite:

  	git checkout -b nomeDaBranch

OBS: talvez seja interessante criarmos branchs com nossos nomes

* Passo 5 - agora você pode mexer tranquilamente no código, após terminar suas alterações faça git add, git commit e git push para salvar as alterações. Da seguinte forma:

	git add .
	git commit -m "Sua mensagem de commit aqui"
	git push origin [Nome da branch que você criou para você]

* Passo 6 - Suponhamos que agora você queira levar as alterações para a branch principal, fazendo a integração com os demais códigos. Para isso, primeiro você precisa ir para a branch principal, digitando:

  	git checkout main

	Estando na branch principal, digite:

 	 git merge [nome da sua branch]

Agora as alterações realizadas na sua branch foram para a principal. Porém sua branch ainda existe, você pode continuar trabalhando nela normalmente futuramente fazer o merge para atualizar a branch principal.


