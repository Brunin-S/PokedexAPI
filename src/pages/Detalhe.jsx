import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Detalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscar = async () => {
      setLoading(true);

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();

      setPokemon(data);
      setLoading(false);
    };

    buscar();
  }, [id]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => navigate(-1)}>⬅ Voltar</button>

      <h1>{pokemon.name}</h1>

      <img src={pokemon.sprites.front_default} alt="" />

      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>

      <p><strong>Tipos:</strong></p>
      <ul>
        {pokemon.types.map(t => (
          <li key={t.type.name}>{t.type.name}</li>
        ))}
      </ul>
    </div>
  );
}