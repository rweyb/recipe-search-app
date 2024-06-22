import { atom, atomFamily, selector } from "recoil";

export const FavoritesRecipeState = atom({
    key: 'FavoritesRecipeState',
    default: [],
});

export const idsAtom = atom({
    key: "idsAtom",
    default: [],
});

export const FavoritesListAtom = atomFamily({
    key: "FavoritesListAtom",
    default: null
});

export const FavoritesSelector = selector({
    key: "FavoritesSelector",
    get: ({ get }) => {
        const lists = get(idsAtom);
        return lists.map(id => get(FavoritesListAtom(id)));
    },

    //リストの追加/完了済/削除操作
    set: ({ set, reset}, {type, id, newItem }) => {
        switch (type) {

            //新たな（FavoritesListAtom）を生成
            case 'add' :
                set(FavoritesListAtom(newItem.id), newItem);
                set(idsAtom, lists =>[...lists, newItem.id]);
                break;
            //既存の項目（idであるFavoritesListAtom）のisDoneプロバディをtrueに
            case 'done' :
                set(FavoritesListAtom(id), todo => ({ ...todo, isDone: true}));
                break;
            //既存の項目(idであるFavoritesListAtom)を削除＆
            //id群(idsAtom)から、対応するid値を削除
            case 'remove' :
                reset(FavoritesListAtom(id));
                set(idsAtom, lists => lists.filter(e => e !== id));
                break;
                default :
                throw new Error('Type is invalid.');
        }
    }
});


















