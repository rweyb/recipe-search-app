import React, { useState} from 'react';
import { FaHeart } from 'react-icons/fa'; // react-iconsライブラリからFaHeartアイコンをインポート
import { useRecoilState } from 'recoil';
import { FavoritesRecipeState } from './FavoritesRecipeState';


const FavoriteButton = ({ recipeId }) => {

   // FavoritesRecipeState atomからお気に入りレシピのIDの配列を取得
   const [favorites, setFavorites] = useRecoilState(FavoritesRecipeState);
   // isFavoriteの状態を決定する（お気に入りに含まれているかどうか）
   const [isFavorite, setIsFavorite] = useState(favorites.includes(recipeId));
 
   const handleClick = () => {
     if (isFavorite) {
       // すでにお気に入りの場合、IDを配列から削除
       setFavorites(favorites.filter(id => id !== recipeId));
     } else {
       // お気に入りでない場合、IDを配列に追加
       setFavorites([...favorites, recipeId]);
     }
     // isFavoriteの状態を切り替え
     setIsFavorite(!isFavorite);
   };

  return (
    <button onClick={handleClick} >
      <FaHeart color={isFavorite ? 'red' : 'grey'} />{""} 
      {/* ハートアイコンを表示 */}
    </button>
  );
};

export default FavoriteButton;