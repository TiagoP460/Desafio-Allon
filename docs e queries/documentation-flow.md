Este documento descreve a lógica e a estrutura do fluxo de integração desenvolvido para conectar o banco de dados de pedidos à API de logística.

link para a visualização do Diagrama Interativo
https://drive.google.com/file/d/16pzfzAJ7dY7BQKYwLtPv1JTrMlb3wW2P/view?usp=sharing

Objetivo do Fluxo: Extrair pedidos com o status de confirmado do banco de dados relacional, transformá-los para o formato JSON exigido pela API de destino e realizar o envio via requisição HTTP

Descrição dos Nós de processamento: 

Nó de entrada: Extrai os dados utilizando JOINS entre as tabelas pedidos, clientes, itens_pedido e produtos, o filtro principal busca apenas registros onde "pedidos.status = 'confirmado'

Nó de filtro: Analisa os dados e remove qualquer registro inconsistente, como pedidos com quantidade zero ou dados incompletos.

Nó de transformação: Mapeia as colunas do banco de dados para os campos da API, ele transforma a lista de itens do banco em um array com objetos conforme o formato esperado pelo endpoint POST/pedidos

Nó de Validação: Verifica se a data_entrega é uma data futura e válida antes de permitir o envio para a API.

Nó de enriquecimento de dados: Adiciona informações externas ou cálculos necessários 

Nó de saída: Envia o payload final via método POST para a API de destino.

Nó de log: Registra o sucesso ou falha de cada processamento para fins de suporte técnico.

Query SQL que foi utilizada:

SELECT 
    p.id AS pedido_id,
    p.data_entrega,
    c.id AS cliente_id,
    c.nome AS nome_cliente,
    c.email AS email_cliente,
    pr.id AS produto_id,
    pr.nome AS nome_produto,
    ip.quantidade,
    ip.preco_unitario
FROM pedidos p
INNER JOIN clientes c ON p.cliente_id = c.id
INNER JOIN itens_pedido ip ON p.id = ip.pedido_id
INNER JOIN produtos pr ON ip.produto_id = pr.id
WHERE p.status = 'confirmado';

Exemplos de entrada e saída:

Entrada:
pedido_id       cliente_id      produto_id      quantidade
5001            123             1               2

Saída:
{
    "cliente_id":123,
    "itens": [
        {
            "produto_id": 1,
            "quantidade": 2
        }
    ],
    "data_entrega": "2024-01-25"
}