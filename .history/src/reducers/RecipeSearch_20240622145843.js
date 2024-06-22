import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

//APIのエンドポイントと開発キー
const API_ENDPOINT ='きょうの料理レシピレンタル';
const API_KEY ='MjAyNC8wNi8yMiAwNToyMDoxN2QxYTQyOGE2LThkYzUtNDk1MS1hMzE5LTU4NjVlYWRkODIyOA==';


const fetchRecipe = async (query) => {

    const res =await fetch (`${API_ENDPOINT}?key=${API_KEY}&{query=${query}` ,
        {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            },
        });

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