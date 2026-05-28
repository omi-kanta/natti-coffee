export type Allergen = '卵' | '乳' | '豚肉' | '小麦' | '大豆' | 'えび' | 'かに';

export type MenuItem = {
  id: string;
  name: string;
  subheading: string;
  category: 'drink'[] | 'food'[];
  image: { url: string; width: number; height: number };
  description: string;
  ingredients: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  salt: number;
  allergens: Allergen[];
};