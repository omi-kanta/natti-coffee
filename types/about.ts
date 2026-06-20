export type AboutContent = {
  // トップページ用
  topImage?: { url: string; width: number; height: number }
  topTitle?: string
  topSubTitle?: string

  // aboutページ用
  aboutHeading?: string
  aboutSubHeading?: string
  aboutImage?: { url: string; width: number; height: number }
  aboutImage2?: { url: string; width: number; height: number }
  aboutText1?: string

  // 左セクション
  aboutLeftTitle?: string
  aboutLeftText?: string

  // 右セクション
  aboutRightImage?: { url: string; width: number; height: number }
  aboutRightTitle?: string
  aboutRightText?: string

  // 左画像
  aboutLeftImage?: { url: string; width: number; height: number }

  // 末尾
  aboutEndingText?: string
}
