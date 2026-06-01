'use client'

import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import type { MenuItem } from '@/types/menu'

const allergenEmoji: Record<string, string> = {
  '卵': '🥚',
  '乳': '🥛',
  '小麦': '🌾',
  '大豆': '🫘',
  '豚肉': '🐷',
  'ごま': '🌿',
  'えび': '🦐',
  'かに': '🦀',
  '落花生': '🥜',
}

export default function MenuDetailContent({ item }: { item: MenuItem }) {
  const handleBack = () => {
    sessionStorage.setItem('natti_scroll_to', 'food-menu')
    window.location.href = '/'
  }

  const nutritionRows = [
    { label: 'エネルギー', value: `${item.calories}kcal` },
    { label: 'たんぱく質', value: `${item.protein}g` },
    { label: '脂質', value: `${item.fat}g` },
    { label: '炭水化物', value: `${item.carbs}g` },
    { label: '食塩相当量', value: `${item.salt}g` },
  ]

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />

      <div className="max-w-5xl mx-auto px-8 py-10">

        {/* 戻るリンク */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-[#2D4A2D] text-sm font-light hover:opacity-60 transition-opacity mb-8"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          メニュー一覧に戻る
        </button>

        {/* 2カラム */}
        <div className="flex flex-col md:flex-row items-start gap-14">

          {/* 左カラム: 画像 */}
          <div className="w-full md:w-[580px] shrink-0">
            <div className="relative w-full rounded-2xl shadow-md overflow-hidden" style={{ height: '520px' }}>
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
          <div className="flex-1 min-w-0 pl-4">

            {/* 商品名 */}
            <h1
              className="text-2xl font-bold text-[#1A1A1A] leading-snug mb-3"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {item.name}
            </h1>

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

            {/* エネルギーカード */}
            <div className="w-full rounded-xl border border-[#2D4A2D]/20 bg-[#FAF7F2] p-4">
              <p
                className="text-[12px] font-medium text-[#1A1A1A] mb-2"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                エネルギー情報
              </p>
              <p
                className="text-[32px] text-[#1A1A1A] leading-none"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
              >
                {item.calories}
                <span className="text-sm ml-1 text-[#888]">kcal</span>
              </p>
            </div>

          </div>
        </div>

        {/* 栄養成分テーブル */}
        <div className="mt-10">
          <p
            className="text-[13px] font-medium text-[#1A1A1A] mb-3"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            栄養成分情報
          </p>
          <table className="w-full border-collapse">
            <tbody>
              {nutritionRows.map(row => (
                <tr key={row.label} className="border-b border-[#EBEBEB]">
                  <td
                    className="py-2.5 text-[13px] text-[#888]"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
                  >
                    {row.label}
                  </td>
                  <td
                    className="py-2.5 text-[13px] text-[#333] text-right"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
                  >
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <Footer />
    </div>
  )
}