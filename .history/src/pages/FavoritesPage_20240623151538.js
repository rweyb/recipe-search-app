import React, { useState} from "react";
import { FaVideo } from "react-icons/fa";

const FavoritesPage = () => {

    const [favorites, setFavorites] = useState([]);

    //お気に入り追加
    const addFavorite = (id) => {
        setFavorites([...favorites, id]);
    };

    //お気に入りから削除
    const removeFavorite = (id) => {
        setFavorites(favorites.filter(favId => favId !== id));
    };

    return (
        <div>
            <h1>お気に入り</h1>
        </div>
    );
}

export default FavoritesPage;


