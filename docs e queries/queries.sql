SELECT 
    p.id AS pedido_id,
    p.status AS pedido_status,
    p.data_entrega,
    p.total AS valor_total_pedido,
    c.id AS cliente_id,
    c.nome AS nome_cliente,
    c.email AS email_cliente,
    pr.id AS produto_id,
    pr.nome AS nome_produto,
    pr.sku AS produto_sku,
    ip.quantidade,
    ip.preco_unitario
FROM pedidos p
INNER JOIN clientes c ON p.cliente_id = c.id
INNER JOIN itens_pedido ip ON p.id = ip.pedido_id
INNER JOIN produtos pr ON ip.produto_id = pr.id
WHERE p.status = 'confirmado';