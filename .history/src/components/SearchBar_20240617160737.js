import React from "react";
import { useState } from "react";
import './Style.css'

export default function SearchBar({ onSearch }) {
const [query, setQuery] = useState('');

const handleSearch = () => {
  console.log('検索ボタンがクリックされました', query);
  onSearch(query);
};



return( 
  <div className="search-container">
    <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={handleSearch}>検索</button>
  </div>
);
}

