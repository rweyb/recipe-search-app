import React, { useState} from 'react';
import SearchBar from '../components/SearchBar';
import RecipeResults from '../components/RecipeResults';
import '../components/Style.css'
import FavoriteButton from '../components/FavoritesButton';
import { FavoritesRecipeState } from '../components/FavoritesRecipeState';
import { useRecoilState } from 'recoil';


export default function IngredientPage() {
    
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //お気に入り
    const [favorites, setFavorites] =useRecoilState(FavoritesRecipeState);

    const handleSearch = async (ingredient) => {
        setLoading(true);
        try {
            const response = await fetch(
            `https://api.nhk.or.jp/v2/pg/genre/130/g1/0205/2024-06-23.json?key=uy1Ny9L1WFB2F1sY6HGzZj933YbxkgpS${
                ingredient ? `&query=${encodeURIComponent(ingredient)}` : ""
            }`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
    
        const result = await response.json();
        console.log(result);
        if (result && result.list && result.list.g1) {
            setData(result.list.g1);
        } else {
            // データがnullまたは期待する形式でない場合の処理
            setData([]);
            throw new Error('No data available in the expected format');
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
                <RecipeResults result={data} onAddFavorite={addFavorite} onRemoveFavorite={removeFavorite} />
            )}
            <FavoriteButton onAddFavorite = {addFavorite} onRemoveFavorite = {removeFavorite}/>
        </div>
        );
    }
