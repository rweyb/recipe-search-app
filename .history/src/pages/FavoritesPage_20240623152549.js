import React, { useState} from "react";
import FavoriteButton from "../components/FavoritesButton";

const FavoritesPage = () => {

    const [favorites, setFavorites] = useState([]);

    //お気に入り追加
    const addFavorite = (id) => {
        if (!favorites.includes(id)) {
            setFavorites([...favorites, id]);
        }
    };

    //お気に入りから削除
    const removeFavorite = (id) => {
        setFavorites(favorites.filter(favId => favId !== id));
    };

    return (
        <div>
            <h1>お気に入り</h1>
            <ul>
                {favorites.map((id) => (
                    <li key={id}>
                        {id}
                        <FavoriteButton />
                        <button onClick={() => removeFavorite(id)}>削除</button>
                    </li>
                ))}
            </ul>
             {/* 仮のボタンを追加してお気に入りに追加する動作をテスト */}
        <button onClick={() => addFavorite('2024062317701')}>お気に入りに追加</button>
        </div>
    );
}

export default FavoritesPage;


