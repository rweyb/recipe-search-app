import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RecipeResults from '../components/RecipeResults';
import '../components/Style.css'
import FavoriteButton from '../components/FavoritesButton';

export default function RecipePage() {
    const navigate = useNavigate();
    const [results, setResults] = useState(null);
    

    const handleSearch = (query) => {
        console.log(query);
        navigate(`/search?query=${encodeURIComponent(query)}`);
        setResults(['レシピ1', 'レシピ1', 'レシピ1']);
    };

    return (
        <div>
            <h1>メニュー名で選ぶ</h1>
            <SearchBar onSearch={handleSearch} />
            <RecipeResults result={results} />
            <FavoriteButton />
        </div>
    )
} 