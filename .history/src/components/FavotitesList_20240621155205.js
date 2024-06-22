import { atom, atomFamily, selector } from "recoil";

export const FavoritesRecipeState = atom({
    key: "FavoritesRecipeState",
    default: [],
});

export const FavoritesListAtom = atomFamily({
    key: "FavoritesListAtom",
    default: null
});

export const FavoritesSelector = selector({
    key: "FavoritesSelector",
    get: ({ get }) => {
        const lists = get(FavoritesRecipeState);
        return lists.map(id => get(FavoritesListAtom(id)));
    },

    //リストの追加/完了済/削除操作
    
})