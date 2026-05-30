export type StoryContent = {
  storyHeroImage?: { url: string; width: number; height: number }  // ← 追加
  topStoryImage?: { url: string; width: number; height: number }
  topStoryTitle?: string
  topStorySubTitle?: string
  storyImage?: { url: string; width: number; height: number }
  storyHeading?: string
  storyDescription?: string
  storyLeftImage?: { url: string; width: number; height: number }
  storyLeftTitle?: string
  storyLeftText?: string
  storyCenterImage?: { url: string; width: number; height: number }
  storyCenterTitle?: string
  storyCenterText?: string
  storyRightImage?: { url: string; width: number; height: number }
  storyRightTitle?: string
  storyRightText?: string
  storyEndingText?: string
  storyEndingSubText?: string
}