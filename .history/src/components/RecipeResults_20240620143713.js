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
                const response = await fetch (`https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=e06e2a5afcf14b52139c1fb6c58e9dbc`);
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