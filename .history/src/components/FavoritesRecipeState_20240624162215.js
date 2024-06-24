import { atom, atomFamily, selector } from "recoil";


//お気に入りレシピIDの配列を保持
export const FavoritesRecipeState = atom({
    key: 'FavoritesRecipeState',
    default: [],
});

//特定のIDに基づいて個々のレシピの詳細情報を保持
export const FavoritesListAtom = atomFamily({
    key: "FavoritesListAtom",
    default: null
});


//FavoritesRecipeStateとFavoritesListAtomから派生した詳細情報を保持
export const FavoritesSelector = selector({
    key: "FavoritesSelector",
    get: ({ get }) => {
        const lists = get(FavoritesRecipeState);
        return lists.map(id => get(FavoritesListAtom(id)));
    },

    //リストの追加/完了済/削除操作
    set: ({ set, reset}, {type, id, newItem }) => {
        switch (type) {

            //新たな（FavoritesListAtom）を生成
            case 'add' :
                set(FavoritesListAtom(newItem.id), newItem);
                set(FavoritesRecipeState, lists =>[...lists, newItem.id]);
                break;
            //既存の項目（idであるFavoritesListAtom）のisDoneプロバディをtrueに
            case 'done' :
                set(FavoritesListAtom(id), todo => ({ ...todo, isDone: true}));
                break;
            //既存の項目(idであるFavoritesListAtom)を削除＆
            //id群(idsAtom)から、対応するid値を削除
            case 'remove' :
                reset(FavoritesListAtom(id));
                set(FavoritesRecipeState, lists => lists.filter(e => e !== id));
                break;
                default :
                throw new Error('Type is invalid.');
        }
    }
});
