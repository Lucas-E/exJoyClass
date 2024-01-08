-- Criação do banco de dados
CREATE DATABASE BlogDB;

-- Seleciona o banco de dados
USE BlogDB;

-- Criação da tabela Autor
CREATE TABLE Autor (
    AutorID INT PRIMARY KEY,
    NomeAutor VARCHAR(255),
    Email VARCHAR(255)
);

-- Criação da tabela Post
CREATE TABLE Post (
    PostID INT PRIMARY KEY,
    Titulo VARCHAR(255),
    Conteudo TEXT,
    DataPublicacao DATE,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
);

-- Criação da tabela Comentario
CREATE TABLE Comentario (
    ComentarioID INT PRIMARY KEY,
    TextoComentario TEXT,
    DataComentario DATE,
    AutorID INT,
    PostID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID)
);
