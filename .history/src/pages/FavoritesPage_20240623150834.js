import React, { useState} from "react";

const FavoritesPage = () => {

    const [favorites, setFavorites] = useState([]);

    //お気に入り追加
    const addFavorite = (id) => {
        setFavorites([...favorites, id]);
    };

    

    return (
        <div>
            <h1>お気に入り</h1>
        </div>
    );
}

export default FavoritesPage;


