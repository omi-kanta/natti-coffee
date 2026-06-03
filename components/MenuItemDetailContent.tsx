'use client'

import Image from 'next/image'
import Header from '../app/components/Header'
import Footer from '../app/components/Footer'
import type { MenuItem } from '@/types/menu'

const allergenEmoji: Record<string, string> = {
  '卵':               '🥚',
  '乳':               '🥛',
  '豚肉':             '🐷',
  '鶏肉':             '🐔',
  '牛肉':             '🐄',
  '大豆':             '🫘',
  '小麦':             '🌾',
  'ごま':             '🌿',
  'マカダミアナッツ':  '🥜',
  'カシューナッツ':    '🥜',
  'アーモンド':        '🌰',
  '落花生（ピーナッツ）': '🥜',
  'くるみ':           '🌰',
  'そば':             '🍜',
  'かに':             '🦀',
  'えび':             '🦐',
  'さば':             '🐟',
  'さけ':             '🐟',
  'いか':             '🦑',
  'いくら':           '🍣',
  'あわび':           '🐚',
  'オレンジ':         '🍊',
  'りんご':           '🍎',
  'バナナ':           '🍌',
  'キウイ':           '🥝',
  'ゼラチン':         '🧪',
  'もも':             '🍑',
}

const labelStyle: Record<string, string> = {
  '腸活':         'bg-[#E8F5E9] text-[#2D6A2D]',
  'グルテンフリー': 'bg-[#FFF8E1] text-[#B8860B]',
  '砂糖不使用':    'bg-[#F3E5F5] text-[#6A1B9A]',
}

export default function MenuItemDetailContent({ item }: { item: MenuItem }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />

      {/* SP: 商品名（画像の上） */}
      <div className="md:hidden px-8 pt-10 pb-3">
        <h1
          className="text-2xl font-bold text-[#1A1A1A] leading-snug"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          {item.name}
        </h1>
      </div>

      <div className="max-w-5xl mx-auto md:px-8 md:py-10">

        {/* 2カラム */}
        <div className="flex flex-col md:flex-row items-start md:gap-14">

          {/* 左カラム: 画像（SP: フルワイド・角丸なし / PC: 角丸あり） */}
          <div className="w-full md:w-[580px] shrink-0">
            <div className="relative w-full md:rounded-2xl md:shadow-md overflow-hidden h-[300px] md:h-[520px]">
              <Image
                src={item.image.url}
                alt={item.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* 右カラム: テキスト */}
          <div className="flex-1 min-w-0 px-8 pt-6 md:px-0 md:pt-0 md:pl-4">

            {/* PC専用: 商品名 */}
            <h1
              className="hidden md:block text-2xl font-bold text-[#1A1A1A] leading-snug mb-3"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {item.name}
            </h1>

            {/* 価格 */}
            <p
              className="text-sm text-[#1A1A1A] mb-3"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              ¥{item.price.toLocaleString()}（税込）
            </p>

            {/* ラベル */}
            {item.label && item.label.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.label.map(l => (
                  <span
                    key={l}
                    className={`text-[11px] px-3 py-1 rounded-full font-medium ${labelStyle[l] ?? 'bg-gray-100 text-gray-600'}`}
                  >
                    {l}
                  </span>
                ))}
              </div>
            )}

            {/* 説明文 */}
            <p
              className="text-sm leading-relaxed text-gray-600 whitespace-pre-line mb-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              {item.description}
            </p>

            {/* 区切り線 */}
            <hr className="border-t border-[#E5E5E5] mb-4" />

            {/* 使用食材・原材料 */}
            <p
              className="text-sm font-medium text-[#1A1A1A] mb-1"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              使用食材・原材料
            </p>
            <p
              className="text-xs text-gray-500 leading-loose mb-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              {item.ingredients}
            </p>

            {/* 食物アレルギーカード */}
            <div className="w-full rounded-xl border border-[#2D4A2D]/20 bg-[#FAF7F2] p-4 mb-3">
              <p
                className="text-[12px] font-medium text-[#1A1A1A] mb-1"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                食物アレルギー情報
              </p>
              <p
                className="text-[11px] text-[#999] mb-3"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                商品に含まれる特定原材料 8品目
              </p>
              {item.allergens.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {item.allergens.map(allergen => (
                    <div key={allergen} className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full bg-[#2D4A2D] flex items-center justify-center">
                        <span className="text-base leading-none" role="img" aria-label={allergen}>
                          {allergenEmoji[allergen] ?? '⚠'}
                        </span>
                      </div>
                      <span
                        className="text-[10px] text-[#555]"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
                      >
                        {allergen}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  className="text-[12px] text-[#555]"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
                >
                  特定原材料は含まれておりません
                </p>
              )}
            </div>

            {/* 注目成分カード */}
            {item.focusNutrient && (
              <div className="w-full rounded-xl border border-[#2D4A2D]/20 bg-[#FAF7F2] p-4">
                <p
                  className="text-[12px] font-medium text-[#1A1A1A] mb-2"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  注目成分
                </p>
                <p
                  className="text-[13px] text-[#555] leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
                >
                  {item.focusNutrient}
                </p>
              </div>
            )}

          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
