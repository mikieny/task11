import React, { useEffect, useState } from 'react';
import { getCats, addFavorite } from '../services/api';

const CatList = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const cats = await getCats();
      setCats(cats);
    };
    fetchCats();
  }, []);

  const handleFavorite = (id: string) => {
    addFavorite(id);
  };

  return (
    <div>
      <h2>All Cats</h2>
      <ul>
        {cats.map(cat => (
          <li key={cat.id}>
            <img src={cat.imageUrl} alt={cat.name} />
            <button onClick={() => handleFavorite(cat.id)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
