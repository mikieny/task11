import React, { useEffect, useState } from 'react';
import { getFavoriteCats, removeFavorite } from '../services/api';

const FavoriteCats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchFavoriteCats = async () => {
      const cats = await getFavoriteCats();
      setCats(cats);
    };
    fetchFavoriteCats();
  }, []);

  const handleRemoveFavorite = (id: string) => {
    removeFavorite(id);
  };

  return (
    <div>
      <h2>Favorite Cats</h2>
      <ul>
        {cats.map(cat => (
          <li key={cat.id}>
            <img src={cat.imageUrl} alt={cat.name} />
            <button onClick={() => handleRemoveFavorite(cat.id)}>Remove from Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCats;
