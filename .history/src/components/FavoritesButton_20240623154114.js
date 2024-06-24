import React from 'react';
import { FaHeart } from 'react-icons/fa'; // react-iconsライブラリからFaHeartアイコンをインポート
import { useRecoilState } from 'recoil';
import { FavoritesRecipeState } from './FavoritesRecipeState';


const FavoriteButton = ({ recipeId}) => {

  const [favorites, setFavorites] = useRecoilState(FavoritesRecipeState);
  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) {
      // お気に入りから削除
      setFavorites(favorites.filter(id => id !== recipeId));
    } else {
      // お気に入りに追加
      setFavorites([...favorites, recipeId]);
    }
  };

  return (
    <button onClick={handleClick} >
      <FaHeart color={isFavorite ? 'red' : 'grey'} />
    </button>  
  );
};

export default FavoriteButton;