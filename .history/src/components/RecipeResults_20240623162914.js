import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FavoriteButton from "./FavoritesButton";


export default function RecipeResults({ result, onAddFavorite, onRemoveFavorite }) {

    const [data, setData] =useState(null);
    const [isLoading, setLoading] =useState(true);
    const [error, setError] =useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch (`https://api.nhk.or.jp/v2/pg/genre/130/g1/0205/2024-06-23.json?key=uy1Ny9L1WFB2F1sY6HGzZj933YbxkgpS`);
                const result = await response.json();
                setData(result.categories || []);
            } catch (err) {
                setError(err.message);
            }finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if(error) {
        return<p>Error: {error}</p>;
    }


    return(
        <div>
        {data &&
            data.map((item, index) => (
            <div key={index}>
                <div>{item.id}</div>
                <div>{item.service.name}</div>
                <img
                    src={item.service.logo_s.url}
                    width={item.service.logo_s.width}
                    height={item.service.logo_s.height}
                    alt={""}
                />
                <div>{item.title}</div>
                <FavoriteButton recipeId={item.id} onAddFavorite={() => onAddFavorite(item.id)} onRemoveFavorite={() => onRemoveFavorite(item.id)} />
            </div>
            ))}
        </div>
    );
}