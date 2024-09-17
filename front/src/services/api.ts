export const getCats = async () => {
    const response = await fetch('/api/cats');
    return response.json();
  };
  
  export const getFavoriteCats = async () => {
    const response = await fetch('/api/cats/favorites');
    return response.json();
  };
  
  export const addFavorite = async (id: string) => {
    await fetch(`/api/cats/favorites/${id}`, {
      method: 'POST',
    });
  };
  
  export const removeFavorite = async (id: string) => {
    await fetch(`/api/cats/favorites/${id}`, {
      method: 'DELETE',
    });
  };
  