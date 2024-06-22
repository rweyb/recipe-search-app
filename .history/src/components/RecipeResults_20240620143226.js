import React from "react";
import { useState } from "react";
import { useEffect } from "react";



export default function SearchResults({ query }) {

    const [data, setData] =useState([]);
    const [isLoading, setLoading] =useState(true);
    const [error, setError] =useState(null);


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