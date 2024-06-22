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

    const handleSearch = async (query) => {
        setLoading(true);
        try {
            const response = await fetch(
            `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1048012658384045599&categoryType=large${
                query ? `&query=${query}` : ""
            }`
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
    
        const result = await response.json();
        console.log("result1", result);
        console.log("result2", result.result.large);
        setData(result.result.large || []);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };
    
    //お気に入りに追加
    const addFavorite = (recipeId) => {
        if (!favorites.includes(recipeId)) {
            setFavorites([...favorites, recipeId]);
        }
    };
    //お気に入りから削除
    const removeFavorite = (recipeId) => {
        setFavorites(favorites.filter(id => id !== recipeId));
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
