import React from "react";
import { useRecoilValue } from "recoil";
import { FavoritesSelector } from "./FavoritesRecipeState";

function FavoritesCount() {
    // FavoritesSelectorからお気に入りの件数を取得
    const { count } = useRecoilValue(FavoritesSelector);

  return <div>お気に入りの件数: **{count}**</div>;
}

export default FavoritesCount;