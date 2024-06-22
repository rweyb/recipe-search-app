import React from 'react';
import { FaHeart } from 'react-icons/fa'; // react-iconsライブラリからFaHeartアイコンをインポート
import { useRecoilState } from 'recoil';
import { FavoritesRecipeState } from './FavoritesRecipeState';


const FavoriteButton = ({ category }) => {
  const [favorites, setFavorites] = useRecoilState(FavoritesRecipeState);
  const isFavorite = favorites.some(fav => fav.categoryId === category.categoryId);

  const handleClick = () => {
    if (isFavorite) {
      // お気に入りから削除し、カウントを減らす
      setFavorites(favorites.filter(fav => fav.categoryId !== category.categoryId));
    } else {
      // お気に入りに追加し、カウントを増やす
      setFavorites([...favorites, category]);
    }
  };

  return (
    <button onClick={handleClick}>
      <FaHeart color={isFavorite ? 'red' : 'grey'} />
      {/* ハートアイコンを表示 */}
    </button>
  );
};

export default FavoriteButton;