import React from 'react';
import { FaHeart } from 'react-icons/fa'; // react-iconsライブラリからFaHeartアイコンをインポート
import { useRecoilState } from 'recoil';
import { FavoritesRecipeState } from './FavoritesRecipeState';


const FavoriteButton = ({ recipeId, onAddFavorite, onRemoveFavorite }) => {

  const [favorites, setFavorites] = useRecoilState(FavoritesRecipeState);
  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) {
      // お気に入りから削除
      onRemoveFavorite(recipeId);
    } else {
      // お気に入りに追加
      onAddFavorite(recipeId);
    }
  };


  return (
    <button onClick={handleClick}>
      <FaHeart color={isFavorite ? 'red' : 'grey'} />
    </button>  
  );
};

export default FavoriteButton;