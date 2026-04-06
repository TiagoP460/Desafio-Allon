import React, { useState } from 'react';
import { produtos } from './api/dados';

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [aviso, setAviso] = useState('');

  const add = (p) => {
    setCarrinho([...carrinho, { ...p, idUnico: Date.now() }]);
    setAviso(`${p.nome} adicionado!`);
    setTimeout(() => setAviso(''), 2000);
  };

  const remover = (id) => {
    setCarrinho(carrinho.filter(item => item.idUnico !== id));
  };

  const limpar = () => setCarrinho([]);

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      {aviso && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', background: '#28a745', color: '#fff', padding: '10px 20px', borderRadius: '5px', zIndex: 1000, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
          {aviso}
        </div>
      )}

      <header style={{ background: '#111', color: '#fff', padding: '50px 20px', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 20px 0' }}>Allon Software & Integração</h1>
        <p style={{ margin: 0 }}>Soluções inteligentes para seus dados</p>
      </header>

      <section style={{ padding: '40px 20px', display: 'flex', justifyContent: 'center', gap: '20px', background: '#f5f5f5' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', width: '250px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3>Alta Performance</h3>
          <p>Sistemas otimizados para grande volume de dados.</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', width: '250px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3>Segurança</h3>
          <p>Seus fluxos de integração protegidos e estáveis.</p>
        </div>
      </section>

      <main style={{ padding: '40px 20px', paddingBottom: '150px' }}>
        <h2>Produtos Disponíveis</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {produtos.map(p => (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
              <h4>{p.nome}</h4>
              <p>R$ {p.preco.toFixed(2)}</p>
              <button 
                onClick={() => add(p)}
                style={{ background: '#007bff', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', width: '100%' }}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </main>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#fff', border: '2px solid #000', padding: '20px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)', maxWidth: '300px' }}>
        <h3 style={{ margin: '0 0 10px 0' }}>🛒 Carrinho</h3>
        
        <div style={{ maxHeight: '150px', overflowY: 'auto', marginBottom: '10px' }}>
          {carrinho.map(item => (
            <div key={item.idUnico} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '5px', borderBottom: '1px solid #eee', paddingBottom: '3px' }}>
              <span>{item.nome}</span>
              <button onClick={() => remover(item.idUnico)} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontWeight: 'bold' }}>X</button>
            </div>
          ))}
        </div>

        <p>Itens: {carrinho.length}</p>
        <p><strong>Total: R$ {total.toFixed(2)}</strong></p>
        
        {carrinho.length > 0 && (
          <button 
            onClick={limpar}
            style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', fontSize: '12px', width: '100%' }}
          >
            Limpar Carrinho
          </button>
        )}
      </div>
    </div>
  );
}

export default App;