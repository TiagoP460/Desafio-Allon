Esquema do Banco de Dados 

O sistema utiliza um banco de dados relacional com 4 tabelas normalizadas para garantir a integridade dos dados de vendas.

Estrutura das Tabelas 

Tabela: produtos
Campos: id (INT), nome (VARCHAR), categoria (VARCHAR), preco (DECIMAL) e sku (VARCHAR).

Função: Armazena o cadastro mestre de todos os produtos comercializados.

Tabela: clientes
Campos: id (INT), nome (VARCHAR), email (VARCHAR), cidade (VARCHAR) e estado (VARCHAR).

Função: Contém as informações de contato e localização dos clientes cadastrados.

Tabela: pedidos
Campos: id (INT), cliente_id (INT), status (VARCHAR), subtotal (DECIMAL), imposto (DECIMAL), total (DECIMAL) e data_entrega (DATE).

Função: Registra o cabeçalho das transações e o status do processamento.

Tabela: itens_pedido
Campos: id (INT), pedido_id (INT), produto_id (INT), quantidade (INT) e preco_unitario (DECIMAL).

Função: Tabela de detalhes que vincula múltiplos produtos a um único pedido, registrando o preço praticado no momento da venda.