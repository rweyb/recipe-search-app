import React, { useState} from 'react';
import { FaHeart } from 'react-icons/fa'; // react-iconsライブラリからFaHeartアイコンをインポート
import { useRecoilState } from 'recoil';
import { FavoritesRecipeState } from './FavoritesRecipeState';


const FavoriteButton = () => {

  const [count, setCount] = useRecoilState(FavoritesRecipeState);
  const [isFavorite, setIsFavorite] =useState(false);


  const handleClick = () => {

     // isFavoriteの状態を反転させる
      setIsFavorite(!isFavorite);

     // カウントを増減する
      if (!isFavorite) {
       // まだお気に入りではない場合、カウントを1増やす
        setCount(count + 1);
      } else {
       // すでにお気に入りの場合、カウントを1減らす
        setCount(count > 0 ? count - 1 : 0);
      }
  };

  return (
    <button onClick={handleClick} >
      <FaHeart color={isFavorite ? 'red' : 'grey'} />{""} 
      {/* ハートアイコンを表示 */}
    </button>
  );
};

export default FavoriteButton;