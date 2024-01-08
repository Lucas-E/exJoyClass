--seleção

SELECT * FROM transacoes;


--renomeação

SELECT ID_Transacao as ID_Transacao, Data as Data, Valor as Valor FROM transacoes;


--filtragem

SELECT * FROM transacoes WHERE Valor > 100.00;


--ordenação

SELECT * FROM transacoes ORDER BY Valor DESC;


--agregação

SELECT AVG(Valor) as Media, MAX(Valor) as Valor_Maximo, MIN(Valor) as Valor_Minimo, COUNT(*) as Total_Transacoes FROM transacoes;


--agrupamento

SELECT Produto, AVG(Valor) as Media_Valor_por_Produto FROM transacoes GROUP BY Produto;


--consulta combinada

SELECT Categoria, COUNT(*) as Total_Produtos, SUM(Valor) as Valor_Total_Vendas, AVG(Valor) as Media_Valor_por_Transacao
FROM transacoes
GROUP BY Categoria;
