import React from "react";
import FavoriteButton from "./FavoritesButton";


export default function RecipeResults({ 
    result, 
    onAddFavorite, 
    onRemoveFavorite,
}) {

    return(
        <div>
        {result &&
            result.map((item, index) => (
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
                <FavoriteButton 
                recipeId={item.id} 
                onAddFavorite={onAddFavorite} 
                onRemoveFavorite={onRemoveFavorite} 
                />
            </div>
            ))}
        </div>
    );
}