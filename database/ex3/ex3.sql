--insert

-- Produto 1: Smartphone
INSERT INTO Produtos (NomeDoProduto, Preco, QuantidadeEmEstoque)
VALUES ('Smartphone', 799.99, 20);

-- Produto 2: Tablet
INSERT INTO Produtos (NomeDoProduto, Preco, QuantidadeEmEstoque)
VALUES ('Tablet', 349.99, 10);

-- Produto 3: Fone de Ouvido
INSERT INTO Produtos (NomeDoProduto, Preco, QuantidadeEmEstoque)
VALUES ('Fone de Ouvido', 49.99, 50);


--update

-- Atualizar estoque e preço do Smartphone
UPDATE Produtos
SET QuantidadeEmEstoque = 25, Preco = 849.99
WHERE NomeDoProduto = 'Smartphone';


--delete

-- Venda de cinco unidades do Tablet
DELETE FROM Produtos
WHERE NomeDoProduto = 'Tablet'
LIMIT 5;

-- Venda de dez unidades do Fone de Ouvido
DELETE FROM Produtos
WHERE NomeDoProduto = 'Fone de Ouvido'
LIMIT 10;
