CREATE TABLE Livro (
  idLivro INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(255),
  isbn VARCHAR(20),
  anoPublicacao INT
);

CREATE TABLE Autor (
  idAutor INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  nacionalidade VARCHAR(50)
);

CREATE TABLE Usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  endereco VARCHAR(255),
  email VARCHAR(100)
);

CREATE TABLE Emprestimo (
  idEmprestimo INT PRIMARY KEY AUTO_INCREMENT,
  dataEmprestimo DATE,
  dataDevolucaoPrevista DATE,
  idLivro INT,
  idUsuario INT,
  FOREIGN KEY (idLivro) REFERENCES Livro(idLivro),
  FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Devolucao (
  idDevolucao INT PRIMARY KEY AUTO_INCREMENT,
  dataDevolucao DATE,
  idEmprestimo INT,
  FOREIGN KEY (idEmprestimo) REFERENCES Emprestimo(idEmprestimo)
);

CREATE TABLE LivroAutor (
  id INT PRIMARY KEY AUTO_INCREMENT,
  idLivro INT,
  idAutor INT,
  FOREIGN KEY (idLivro) REFERENCES Livro(idLivro),
  FOREIGN KEY (idAutor) REFERENCES Autor(idAutor)
);

