import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';



const fetchRecipe = async (query) => {

    const res =await fetch (`https://api.nhk.or.jp/v2/pg/genre/130/g1/0205/2024-06-22.json?key=uXZ4gbqfxRlbBngObyDumSDTOr5OGXRy${query ? `&query=${query}` : ''}`);

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
            {data && data.list && data.list.g1 && data.list.g1.map(program => (
                <div key={program.id}>
                    <h3>{program.title}</h3>
                    <p>{program.subtitle}</p>
                    // ここにレシピ情報を表示するコードを追加
                </div>
        ))}
    </>
    );
}