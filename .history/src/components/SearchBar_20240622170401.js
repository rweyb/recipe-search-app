import React from "react";
import { useState } from "react";
import './Style.css'

export default function SearchBar({ onSearch }) {
const [query, setQuery] = useState('');

const handleSearch = (e) => {
  e.preventDefault(); // フォーム送信のデフォルト動作を防ぎます
  console.log('検索ボタンがクリックされました', query);
  onSearch(query);
};



return( 
  <div className="search-container" onSubmit={handleSearch}> 
    <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit">検索</button>
  </div>
);
}

