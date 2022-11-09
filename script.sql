drop database if exists Estacionamento;
create database Estacionamento charset=UTF8 collate utf8_general_ci;
use Estacionamento;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    nome varchar(50) not null,
    telefone integer not null
);

create table telefones(
    id_cliente integer not null,
    numero varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

create table Veiculo(
    id_cliente integer not null,
    placa_veiculo varchar(10) not null primary key,
    cor varchar(50) ,
    modelo varchar(30),
    tipo_veiculo varchar(10),
    foreign key (id_cliente) references clientes(id_cliente)
);

create table Vagas (
    id_vaga integer not null primary key,
    tipo varchar(20),
    stat boolean not null,
    hr_ent datetime,
    hr_sai datetime
);

create table entradas(
    id_cliente integer not null,
    placa_veiculo varchar(20),
    id_vaga integer not null,
    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (placa_veiculo) references Veiculo(placa_veiculo),
    foreign key (id_vaga) references Vagas(id_vaga)
);

create table funcionarios(
    cpf integer not null,
    nome_func varchar(30),
    senha varchar(20)
);
create view vw_historico as
select s.id_cliente, s.placa_veiculo, s.tipo_veiculo , i.id_vaga from Veiculo s
inner join clientes c on s.id_cliente = c.id_cliente
inner join entradas v on s.placa_veiculo = v.placa_veiculo
inner join  Vagas i on v.id_vaga = i.id_vaga;

insert into clientes values(1,"Ana de Souza de Oliveira","20000522");
insert into clientes values(2,"Ana Oliveira Oliveira","19900823");
insert into clientes values(3,"Lúcia da Silva de Souza","19880614");
insert into clientes values(4,"Marcos de Souza Castro","20020713");
insert into clientes values(5,"Maria Oliveira Castro","20050814");
insert into clientes values(6,"Jurema de Souza Castro","20070615");


insert into Veiculo values(1,"jkz-2093","Preto","gol","carro");

select * from clientes;