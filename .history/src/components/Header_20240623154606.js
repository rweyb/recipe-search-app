import React from 'react';
import logo2 from '../logo/logo2.png';
import { Button } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { FavoritesRecipeState } from './FavoritesRecipeState';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

export default function Header() {

     // FavoritesRecipeState atomからお気に入りレシピのIDの配列を取得
    const favoritesIds = useRecoilValue(FavoritesRecipeState);

  // お気に入りレシピの数を計算
    const favoritesCount = favoritesIds.length;


    const headerStyle = {
        display: 'flex', // フレックスボックスを使用
        justifyContent: 'space-between', 
        alignItems: 'center', // 要素を垂直方向の中央に配置
        backgroundColor: 'lightblue', // ヘッダーの背景色
        padding: '10px', // パディング
    };

    const logoAndTitleStyle = {
        display: 'flex', // フレックスボックスを使用
        alignItems: 'center', // 要素を垂直方向の中央に配置
        justifyContent: 'center', // 要素を水平方向の中央に配置
        flexGrow: 1, // 利用可能なスペースを埋める
    };

    const logoStyle = {
        height: '50px',
        marginRight: '10px',
        cursor: 'pointer', 
    };

    
    return (
    <>
    <header style={headerStyle}>
    <div style={logoAndTitleStyle}>
        <Link to="/">
        <img src={logo2} style={logoStyle} alt="レシピ"  />
        </Link>
        <h1 style={{margin: '0'}}>レシピ検索アプリ</h1>
    </div>
        <Link to="/favorites">
        <Button variant='contained'>{favoritesCount}</Button>
        </Link>
        
    </header>
    </>
    );
}
