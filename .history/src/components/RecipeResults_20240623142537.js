import React from "react";
import { useState } from "react";
import { useEffect } from "react";



export default function RecipeResults({ result }) {

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
            {data && data.map((item, index) => (
            <div key={index}>
                {item}
            </div>
            ))}
        </div>
    );
}