import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

const fetchRecipe = async (query) => {

    const url = `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1048012658384045599&categoryType=large${query ? `&${query}` : ''}`;
    const res =await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    return res.json() 
};

export default function RecipeSearch() {
    const [query, setQuery] = useState('');

    const { data, isLoading, isError, error } = useQuery(['recipe', query], () =>fetchRecipe(query), {
        enabled: !!query
    });
    
    const handleSearch = (newQuery) => {
        setQuery(newQuery);
    };
    
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {data && Array.isArray(data.result) && data.result.map(recipe => (
                <p key={recipe.id}>{recipe.recipeTitle}</p>
        ))}
    </>
    );
}