export type Allergen =
  | '卵'
  | '乳'
  | '豚肉'
  | '鶏肉'
  | '牛肉'
  | '大豆'
  | '小麦'
  | 'ごま'
  | 'マカダミアナッツ'
  | 'カシューナッツ'
  | 'アーモンド'
  | '落花生（ピーナッツ）'
  | 'くるみ'
  | 'そば'
  | 'かに'
  | 'えび'
  | 'さば'
  | 'さけ'
  | 'いか'
  | 'いくら'
  | 'あわび'
  | 'オレンジ'
  | 'りんご'
  | 'バナナ'
  | 'キウイ'
  | 'ゼラチン'
  | 'もも';

export type MenuItem = {
  id: string;
  name: string;
  subheading: string;
  category: 'drink'[] | 'food'[] | 'lunch'[] | 'dessert'[];
  image: { url: string; width: number; height: number };
  description: string;
  ingredients: string;
  price: number;
  label?: string[];
  focusNutrient?: string;
  allergens: Allergen[];
};