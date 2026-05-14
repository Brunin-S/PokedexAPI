import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Lista() {
  const [lista, setLista] = useState([]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const buscar = async () => {
      setLoading(true);

      const ids = Array.from({ length: 50 }, (_, i) => i + 1);

      const reqs = ids.map(id =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(res => res.json())
      );

      const res = await Promise.all(reqs);
      setLista(res);
      setLoading(false);
    };

    buscar();
  }, []);

  const filtrados = lista.filter(p =>
    p.name.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) return <p>Carregando...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Pokédex</h1>

      <input
        placeholder="Buscar Pokémon..."
        value={busca}
        onChange={e => setBusca(e.target.value)}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 120px)',
        gap: 40,
        marginTop: 20
      }}>
        {filtrados.map(p => (
          <div
            key={p.id}
            onClick={() => navigate(`/pokemon/${p.id}`)}
            style={{
              border: '1px solid #ccc',
              padding: 10,
              textAlign: 'center',
              cursor: 'pointer',
              borderRadius: 8
            }}
          >
            <img src={p.sprites.front_default} alt="" />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}