CREATE DATABASE IF NOT EXISTS tadeu DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;

USE tadeu;

CREATE TABLE personagem (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  nome varchar(50) NOT NULL,
  icon boolean not null,
  nivel int not null,
  experiencia int not null,
  tormento varchar(50) not null,
  subtormento varchar(50) not null,
  fisico int not null,
  agilidade int not null,
  inteligencia int not null,
  coragem int not null,
  pv int not null,
  def int not null,
  iniciativa int not null,
  acoes int not null,
  antecedentes_pontos int not null,
  antecedentes_json mediumtext null,
  habilidade_json mediumtext null,
  equipamentos_json mediumtext null,
  cavalo_json mediumtext null,
  recompensa int not null,
  dinheiro int not null
);