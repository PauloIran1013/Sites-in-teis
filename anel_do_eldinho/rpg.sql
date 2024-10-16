drop database anel_do_eldinho ;

create database anel_do_eldinho;

use anel_do_eldinho;

create table jogadores(
    id_jogador int auto_increment primary key,
    nome varchar(50) not null,
    email text not null,
    senha varchar(16) not null
    );

create table personagem (
    id_personagem int auto_increment primary key,
    foreign key (id_jogador) references jogadores (id_jogador),
    id_jogador int not null,
    nome varchar(50) not null,
    raca varchar(50) not null,
    classe varchar(50) not null,
    nivel int not null,
    pontoVida int not null,
    pontoMagia int not null
    );

    create table missoes(
        id_missao int auto_increment primary key,
        nome varchar (100) not null,
        descricao text,
        recompensa int not null,
        nivelDificuldade varchar(50) not null
    );

    create table itens(
    id_item int auto_increment primary key,
    nome varchar(50) not null,
    descricao text not null,
    tipo varchar(50),
    efeito text not null
    );

    create table inventarios(
    id_inventario int auto_increment primary key,
    foreign key (id_personagem) references jogadores (id_jogador),
    foreign key (id_item) references itens (id_item),
    id_personagem int not null,
    id_item int not null,
    quantidade int not null
    );

    insert into  jogadores (nome,email,senha) value  
    ('Eldinho', 'eldinho@hotmail.com', 'senha123'),
    ('Renatinha', 'renat@gmail.com', 'senha456'),
    ('Cleiton', 'cleiton@outlook.com', 'senha789');

    insert into personagem(id_jogador,nome,raca,classe,nivel,pontoVida,pontoMagia)values
    (1, 'Serafim', 'Humano', 'Guerreiro', 1, 100, 50),
    (1, 'Jaguncio', 'Elfo', 'Mago', 1, 50, 100),
    (2, 'Eleonora', 'Humano', 'Guerreiro', 1, 100, 50),
    (3, 'Cleitinho', 'Humano', 'Arqueiro', 1, 75, 25);

    insert into missoes(nome,descricao,recompensa,nivelDificuldade)values
    ('Missão 1: Derrotar o Dragão', 'Derrote o dragão para ganhar 100 ouro', 100, 'Fácil'),
    ('Missão 2: Coletar 10 madeiras', 'Coletar 10 madeiras para ganhar 50 ouro', 50, 'Fácil'),
    ('Missão 3: Derrotar o Chefe do Castelo', 'Derrote o chefe do castelo para ganhar 500 ouro', 500, 'Difícil');

    insert into itens (nome,descricao,tipo,efeito) values
    ('Espada de Madeira', 'Uma espada feita de madeira', 'Arma', 'Aumenta o dano em 10'),
    ('Armadura de Couro', 'Uma armadura feita de couro', 'Armadura', 'Aumenta a defesa em 5'),
    ('Pocao de Vida', 'Uma poção que restaura 20 pontos de vida', 'Poção', 'Restaura 20 pontos de vida');
    
    insert into inventarios (id_personagem,id_item,quantidade)values
    (1, 1, 1), 
    (1, 2, 1), 
    (2, 3, 2), 
    (3, 1, 1); 

--Comandos para visualizar os dados--
show tables;
select * from jogadores;
select * from personagen;
select * from missoes;
select * from itens;
select * from inventarios;

    