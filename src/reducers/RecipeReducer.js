import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

const fetchRecipe = async (query) => {

    const res = await fetch (`https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1048012658384045599&categoryType=large${query ? `&${query}` : ''}`);
    if (res.ok) { return res.json() }
    throw new Error(res.statusText);
};

export default function RecipeReducer() {
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
            {data && Array.isArray(data) && data.map(recipe => (
                <p key={recipe.id}>{recipe.title}</p>
        ))}
    </>
    );
}