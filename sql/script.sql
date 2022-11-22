CREATE DATABASE IF NOT EXISTS tadeu DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;

USE tadeu;

CREATE TABLE personagem (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(50) NOT NULL,
  icon boolean not null,
  PRIMARY KEY (id),
  nivel int not null,
  exp int not null,
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
  antecedentesPontos int not null,
  -- antecedentes json not null,
  -- habilidade json not null,
  -- equipamentos json not null
  -- cavalo json not null
  recompensa int not null,
  dinheiro int not null,

);