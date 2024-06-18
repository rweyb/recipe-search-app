import React from "react";
import { useState } from "react";
import { useEffect } from "react";



export default function SearchResults({ query }) {

    const [data, setData] =useState([]);
    const [isLoading, setLoading] =useState(true);
    const [error, setError] =useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch (`https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1048012658384045599&categoryType=largee${query ? `&query=${query}` : ''}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const result = await response.json();
                setData(result.categories || []);

            } catch (err) {
                setError(err.message);
            }finally {
                setLoading(false);
            }
        };
        if (query) {
            fetchData();
        }
    },[query]);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if(error) {
        return<p>Error: {error}</p>;
    }

    return(
        <div>
            {data.map((item, index) => (
            <div key={index}>
                {item.categoryName}
            </div>
            ))}
        </div>
    );
}