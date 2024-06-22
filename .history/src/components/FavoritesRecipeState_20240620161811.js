import { atom } from 'recoil';

export const FavoritesRecipeState = atom({
    key: 'FavoritesRecipeState',
    default: [],
});




/*
ここは本来、値は配列で持たせましょう。
（教科書の TODO と同じ考え方です。TODOは、IDとタイトルが含まれたオブジェクトの配列だったと思いますが、
今回は

            {
                "categoryId": "31",
                "categoryName": "定番の肉料理",
                "categoryUrl": "https://recipe.rakuten.co.jp/category/31/"
            },
このような単位のオブジェクトの配列になります。
）

・上記の例でいうと、"31"のハートを押すと、31のオブジェクトが追加される。
"31"のハートを解除すると、31のオブジェクトが削除される。

・TODOのmax id を取得するコードが、教科書にはあったと思います。
今回それは不要ですが、お気に入りリストの件数を返す関数を用意してください。



*/














