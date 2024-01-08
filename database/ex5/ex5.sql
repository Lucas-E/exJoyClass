-- Inserção de autores
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Autor1', 'Nacionalidade1');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Autor2', 'Nacionalidade2');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Autor3', 'Nacionalidade3');

-- Inserção de livros associados aos autores
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro1', 2020, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro2', 2018, 2);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro3', 2019, 3);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro4', 2021, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro5', 2022, 2);


--consulta

SELECT * FROM Autores;
SELECT * FROM Livros;


--inner join

SELECT Autores.Nome as Autor, Livros.Titulo
FROM Autores
INNER JOIN Livros ON Autores.AutorID = Livros.AutorID;


--left join

SELECT Autores.Nome as Autor, Livros.Titulo
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;


--nacionalidade

SELECT Autores.Nome as Autor, Livros.Titulo
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Nacionalidade1';


--group by

SELECT Autores.Nome as Autor, COUNT(Livros.LivroID) as QuantidadeLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;
