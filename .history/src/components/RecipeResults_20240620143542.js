import React from "react";
import { useState } from "react";
import { useEffect } from "react";



export default function RecipeResults({ result }) {

    const [data, setData] =useState(null);
    const [isLoading, setLoading] =useState(true);
    const [error, setError] =useState('');




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