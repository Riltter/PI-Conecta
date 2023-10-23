CREATE TABLE `conecta`.`usuario` (
  `email` VARCHAR(35) NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `nome_completo` VARCHAR(25) NOT NULL,
  `nome_usuario` VARCHAR(15) NOT NULL,
  `data_de_nascimento` DATE NOT NULL,
  `senha` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`email`));