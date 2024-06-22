import React, { useState} from 'react';
import SearchBar from '../components/SearchBar';
import RecipeResults from '../components/RecipeResults';
import '../components/Style.css'
import FavoriteButton from '../components/FavoritesButton';
import { FavoritesRecipeState } from '../components/FavoritesRecipeState';
import { useRecoilState } from 'recoil';


export default function RecipePage() {
    
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //お気に入り
    const [favorites, setFavorites] =useRecoilState(FavoritesRecipeState);

    const handleSearch = async (ingredient) => {
        setLoading(true);
        setError(null); // エラー状態をリセット
        try {
            const endpoint = ingredient
        ? `https://api.nhk.or.jp/v2/pg/genre/130/g1/0205/2024-06-22.json?key=uXZ4gbqfxRlbBngObyDumSDTOr5OGXRy&query=${encodeURIComponent(ingredient)}`
        : `https://api.nhk.or.jp/v2/pg/genre/130/g1/0205/2024-06-22.json?key=uXZ4gbqfxRlbBngObyDumSDTOr5OGXRy`;
    const response = await fetch(endpoint);
            

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
    
        const result = await response.json();
        if (result && result.list && result.list.g1) {
            setData(result.list.g1);
        } else {
            // データがnullまたは期待する形式でない場合の処理
            setData([]);
            console.error('No data available');
        }
        } catch (err) {
        setError(err.message);
        console.error(err); 
        } finally {
        setLoading(false);
        }
    };
    
    //お気に入りに追加
    const addFavorite = (programID) => {
        if (!favorites.includes(programID)) {
            setFavorites([...favorites, programID]);
        }
    };
    //お気に入りから削除
    const removeFavorite = (programID) => {
        setFavorites(favorites.filter(id => id !== programID));
    };


    return (
        <div>
            <h1>食材で選ぶ</h1>
            <SearchBar onSearch={handleSearch} />
            {isLoading ? (
            <p>ローディング中</p>
            ) : error ? (
            <p>{error}</p>
            ) : (
            <RecipeResults result={data} />
            )}
            <FavoriteButton onAddFavorite = {addFavorite} onRemoveFavorite = {removeFavorite}/>
        </div>
        );
    }
