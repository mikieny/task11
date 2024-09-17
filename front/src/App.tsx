import React from 'react';
import CatList from './components/CatList';
import FavoriteCats from './components/FavoriteCats';

const App = () => {
  return (
    <div>
      <h1>Cat Pinterest</h1>
      <CatList />
      <FavoriteCats />
    </div>
  );
};

export default App;
