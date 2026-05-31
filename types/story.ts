export type StoryContent = {
  // トップページ用（OurPhilosophyコンポーネントで使用）
  topImage?: { url: string; width: number; height: number }
  topTitle?: string
  topSubTitle?: string

  // storyページ用
  storyImage?: { url: string; width: number; height: number }
  storyHeading?: string
  storyDescription?: string
  storySubImage?: { url: string; width: number; height: number }

  // ストーリーカード（3枚）
  storyCardImage1?: { url: string; width: number; height: number }
  storyCardTitle1?: string
  storyCardText1?: string
  storyCardImage2?: { url: string; width: number; height: number }
  storyCardTitle2?: string
  storyCardText2?: string
  storyCardImage3?: { url: string; width: number; height: number }
  storyCardTitle3?: string
  storyCardText3?: string

  // ストーリー末尾
  storyEndingText?: string
  storyEndingSubText?: string
}
