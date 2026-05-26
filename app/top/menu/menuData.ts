export type MenuItem = {
  slug: string
  category: 'フード' | 'スイーツ'
  name: string
  description: string
  image: string
  allergens: string[]
  calories: number
  ingredients: string
  nutrition: {
    energy: number
    protein: number
    fat: number
    carbs: number
    salt: number
  }
  glutenFree: boolean
}

export type DrinkItem = {
  slug: string
  name: string
  description: string
  image: string
  allergens: string[]
  calories: number
  ingredients: string
  nutrition: {
    energy: number
    protein: number
    fat: number
    carbs: number
    salt: number
  }
}

export const menuItems: MenuItem[] = [
  {
    slug: 'galette',
    category: 'フード',
    name: 'ガレット コンプレット',
    description: 'そば粉を使った生地に、卵・ハム・チーズをのせた\nフランス・ブルターニュ地方の伝統的なガレット。\nそば粉100%使用でグルテンフリーです。',
    image: 'https://images.unsplash.com/photo-1577953589629-446f28f0d8c1?w=800&q=80',
    allergens: ['卵', '乳', '豚肉'],
    calories: 380,
    ingredients: 'そば粉（国産）、卵、ロースハム（豚肉・食塩・砂糖）、チーズ（乳成分を含む）、バター（乳成分を含む）、食塩',
    nutrition: { energy: 380, protein: 18.2, fat: 22.4, carbs: 24.8, salt: 1.8 },
    glutenFree: true,
  },
  {
    slug: 'salad-bowl',
    category: 'フード',
    name: '旬の野菜たっぷりサラダボウル',
    description: '季節の野菜をたっぷり使ったサラダボウル。\nごまドレッシングで仕上げた、体にやさしい一品です。',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    allergens: ['大豆', 'ごま'],
    calories: 180,
    ingredients: 'レタス、水菜、ルッコラ、ミニトマト、アボカド、豆腐、ごまドレッシング（ごま・米酢・大豆油・食塩）',
    nutrition: { energy: 180, protein: 9.6, fat: 12.8, carbs: 8.4, salt: 0.6 },
    glutenFree: true,
  },
  {
    slug: 'low-carb-wrap',
    category: 'フード',
    name: '低糖質トルティーヤ 彩り野菜',
    description: '低糖質のトルティーヤに新鮮な彩り野菜を包みました。\n体への負担を軽くしながらおいしさをそのままに。',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80',
    allergens: ['小麦', '大豆'],
    calories: 210,
    ingredients: '低糖質トルティーヤ（小麦ふすま・食物繊維）、レタス、トマト、パプリカ、きゅうり、コーン、豆腐マヨネーズ（大豆を含む）、レモン果汁、食塩',
    nutrition: { energy: 210, protein: 8.4, fat: 9.2, carbs: 18.6, salt: 0.9 },
    glutenFree: false,
  },
  {
    slug: 'mushroom-egg',
    category: 'フード',
    name: 'フレンチマッシュルームエッグ',
    description: 'マッシュルームと卵を使ったフレンチスタイルの一品。\nパルマハムとチーズの旨みが引き立ちます。',
    image: 'https://images.unsplash.com/photo-1655017976653-55a06c602d11?w=800&q=80',
    allergens: ['卵', '乳', '豚肉'],
    calories: 290,
    ingredients: '卵、マッシュルーム、パルマハム（豚肉・食塩）、チーズ（乳成分を含む）、バター（乳成分を含む）、にんにく、パセリ、食塩、こしょう',
    nutrition: { energy: 290, protein: 16.4, fat: 22.0, carbs: 4.2, salt: 1.4 },
    glutenFree: true,
  },
  {
    slug: 'gluten-free-cake',
    category: 'スイーツ',
    name: 'グルテンフリーの本日のケーキ',
    description: '米粉を使った、もっちりやさしい食感のケーキ。\n小麦を使わずに作った natti ならではのスイーツです。',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
    allergens: ['卵', '乳'],
    calories: 290,
    ingredients: '米粉（国産）、砂糖（きび砂糖）、卵、バター（乳成分を含む）、牛乳（乳成分を含む）、ベーキングパウダー（アルミフリー）、バニラエッセンス',
    nutrition: { energy: 290, protein: 5.8, fat: 14.2, carbs: 36.4, salt: 0.3 },
    glutenFree: true,
  },
  {
    slug: 'rice-flour-scone',
    category: 'スイーツ',
    name: '米粉スコーン',
    description: 'グルテンフリーの米粉を使ったスコーン。\nサクッとした食感の中にやさしい甘さが広がります。',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    allergens: ['卵', '乳'],
    calories: 240,
    ingredients: '米粉（国産）、バター（乳成分を含む）、砂糖（きび砂糖）、卵、牛乳（乳成分を含む）、ベーキングパウダー（アルミフリー）、食塩',
    nutrition: { energy: 240, protein: 4.8, fat: 11.6, carbs: 30.2, salt: 0.4 },
    glutenFree: true,
  },
]

export const drinkItems: DrinkItem[] = [
  {
    slug: 'coffee',
    name: 'コーヒー',
    description: '自家焙煎した豆をレバーマシンで丁寧に抽出。\n素材の風味をそのままに、クリーンでやさしい味わいです。',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    allergens: [],
    calories: 5,
    ingredients: 'コーヒー（自家焙煎豆）、水',
    nutrition: { energy: 5, protein: 0.2, fat: 0.1, carbs: 0.7, salt: 0.0 },
  },
  {
    slug: 'cafe-latte',
    name: 'カフェラテ',
    description: 'まろやかなミルクと深煎りコーヒーが織りなすハーモニー。\nきめ細かなフォームミルクがやさしく包みます。',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
    allergens: ['乳'],
    calories: 120,
    ingredients: 'エスプレッソ（自家焙煎豆）、牛乳（乳成分を含む）',
    nutrition: { energy: 120, protein: 6.2, fat: 4.8, carbs: 11.4, salt: 0.2 },
  },
  {
    slug: 'espresso',
    name: 'エスプレッソ',
    description: '凝縮されたコーヒーの旨みと芳醇な香り。\n自家焙煎豆の個性を存分に引き出した一杯です。',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
    allergens: [],
    calories: 10,
    ingredients: 'エスプレッソ（自家焙煎豆）、水',
    nutrition: { energy: 10, protein: 0.5, fat: 0.2, carbs: 1.4, salt: 0.0 },
  },
  {
    slug: 'matcha-latte',
    name: '抹茶ラテ',
    description: '国産抹茶と低糖質ミルクで仕上げた、やさしい甘みの一杯。\n鮮やかな緑と深い香りをお楽しみください。',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80',
    allergens: ['乳'],
    calories: 110,
    ingredients: '抹茶（国産）、牛乳（乳成分を含む）、砂糖（きび砂糖）',
    nutrition: { energy: 110, protein: 5.8, fat: 4.2, carbs: 12.6, salt: 0.2 },
  },
]

export const allergenEmoji: Record<string, string> = {
  '卵':    '🥚',
  '乳':    '🥛',
  '小麦':  '🌾',
  '大豆':  '🫘',
  '豚肉':  '🐷',
  'ごま':  '🌿',
  'えび':  '🦐',
  'かに':  '🦀',
  '落花生': '🥜',
}
