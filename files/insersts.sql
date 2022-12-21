/* Os inserts abaixo devem ser realizados no PostgreSQL */

insert into user (name, email, password, phone, address) values ('Giovana Betina Barbosa', 'giovanabetinabarbosa@gmail.com', 'ZjRxDsNQt4', '27998835914', 'Rua Tancredo Neves 639, Serra-ES');
insert into user (name, email, password, phone, address) values ('Gael Geraldo da Conceição', 'ggconceicao@gmail.com', 'MRalkmBOJq', '69994235684', 'Rua Modigliani 148, Porto Velho-RO');
insert into user (name, email, password, phone, address) values ('Francisca Isabel Vieira', 'franvieira@gmail.com', 'kW1bnjci70', '85827093319', 'Rua Dom Henrique 182, São Luís-MA');
insert into user (name, email, password, phone, address) values ('Sarah Carolina da Conceição', 'ssarahcarolinadaconceicao@gmail.com', '54bOsJjloe', '71387384988', 'Rua Poeta Evaristo de Souza 460, Natal-RN');
insert into user (name, email, password, phone, address) values ('Vitor Martin Pinto', 'vvitormartinpinto@gmail.com', 'GGh0SmQ5Wo', '13720467392', 'Rua Quarenta e Nove 356, São Luís-MA');

insert into author (name, email, phone) values ('Carolina Milena Almada', 'ccarolinamilenaalmada@gmail.com', '83996565550');
insert into author (name, email, phone) values ('Yago Raul da Rocha', 'yyagorauldarocha@gmail.com', '63987932013');
insert into author (name, email, phone) values ('César Lucca Alves', 'cesarluccaalv@gmail.com', '63998823896');

insert into book (name, value, quantity, authorId) values ('APIs em Node.js', 90, 25, 1);
insert into book (name, value, quantity, authorId) values ('JavaScript Moderno', 60, 5, 1);
insert into book (name, value, quantity, authorId) values ('Express na Prática', 45, 35, 1);
insert into book (name, value, quantity, authorId) values ('Bancos de Dados Relacionais', 130, 15, 2);
insert into book (name, value, quantity, authorId) values ('Bancos de Dados NoSQL', 110, 2, 3);
insert into book (name, value, quantity, authorId) values ('Autenticação e Autorização em APIs', 70, 60, 3);

insert into sale (value, date, userId, bookId) values (90, '2000-08-10', 1, 1);
insert into sale (value, date, userId, bookId) values (60, '2000-10-20', 1, 2);
insert into sale (value, date, userId, bookId) values (130, '2000-10-12', 1, 4);
insert into sale (value, date, userId, bookId) values (60, '2000-01-6', 2, 2);
insert into sale (value, date, userId, bookId) values (45, '2000-03-2', 2, 3);
insert into sale (value, date, userId, bookId) values (110, '2000-04-9', 2, 5);
insert into sale (value, date, userId, bookId) values (90, '2000-02-11', 3, 1);
insert into sale (value, date, userId, bookId) values (60, '2000-04-15', 3, 2);
insert into sale (value, date, userId, bookId) values (45, '2000-05-14', 3, 3);
insert into sale (value, date, userId, bookId) values (130, '2000-06-12', 3, 4);
insert into sale (value, date, userId, bookId) values (110, '2000-09-19', 3, 5);
insert into sale (value, date, userId, bookId) values (70, '2000-12-20', 3, 6);
insert into sale (value, date, userId, bookId) values (110, '2000-11-2', 4, 5);
insert into sale (value, date, userId, bookId) values (70, '2000-11-9', 4, 6);
insert into sale (value, date, userId, bookId) values (45, '2000-12-14', 5, 3);

/* Os documentos abaixo devem ser criados no MongoDB */

{
    "bookId": 1,
    "description": "O livro trata a respeito de criação de APIs com Node.js, levando ao leitor os principais conceitos necessários para a implementação",
    "countPages": 250,
    "publishingCompany": "Editora IGTI",    
    "comments": [
    ] 
}

{
    "bookId": 2,
    "description": "O livro passa uma visão geral sobre o JavaScript moderno, quais as principais estruturas e exemplos de utilização",
    "countPages": 350,
    "publishingCompany": "Editora IGTI",    
    "comments": [
    ] 
}

{
    "bookId": 3,
    "description": "O livro demonstra na prática a utilização do Express em conjunto com o Node.js para criação de APIs",
    "countPages": 150,
    "publishingCompany": "Editora IGTI",    
    "comments": [
    ] 
}

{
    "bookId": 4,
    "description": "O livro aborda na teoria e na prática os bancos de dados relacionais, desde a sua motivação até a construção e consulta de registros",
    "countPages": 450,
    "publishingCompany": "Editora IGTI",    
    "comments": [
    ] 
}

{
    "bookId": 5,
    "description": "O livro faz uma introdução aos bancos de dados NoSQL, em especial os bancos de dados orientados a documentos",
    "countPages": 100,
    "publishingCompany": "Editora IGTI",    
    "comments": [
    ] 
}

{
    "bookId": 6,
    "description": "O livro aborda na teoria a importância e utilização da autorização e autenticação em APIs com Node.js e Express",
    "countPages": 90,
    "publishingCompany": "Editora IGTI",    
    "comments": [
    ] 
}