Documentação da API 

Esta documentação descreve os endpoints, parâmetros e exemplos de resposta da API utilizada no projeto de integração. 

Endpoints 

GET /produtos
Retorna a lista de todos os produtos disponíveis no catálogo.

Resposta: Um objeto JSON contendo o status de sucesso e um array de produtos com id, nome, categoria, preco e sku.

GET /estoque/{produto_id}
Consulta a disponibilidade de estoque para um produto específico através de seu ID.

Resposta: Detalha a quantidade_disponivel e a quantidade_reservada.

POST /pedidos
Endpoint principal para a criação de novos pedidos no sistema.

Corpo (JSON): Requer o cliente_id, a lista de itens (contendo produto_id e quantidade) e a data_entrega.

Resposta: Retorna o pedido_id gerado, o status inicial e o valor total.

GET /pedidos/{pedido_id}
Recupera os detalhes completos de um pedido existente, incluindo os itens e o status atual.

PATCH /pedidos/{pedido_id}
Permite a atualização parcial de um pedido, como a alteração do status para "enviado" e a inclusão do código de rastreamento.