import MenuItemDetailContent from '@/components/MenuItemDetailContent'
import type { MenuItem } from '@/types/menu'

type Props = { item: MenuItem; hasLunch?: boolean; hasDrink?: boolean; hasFood?: boolean; hasDessert?: boolean }

export default function FoodDetailContent({ item, hasLunch, hasDrink, hasFood, hasDessert }: Props) {
  return <MenuItemDetailContent item={item} hasLunch={hasLunch} hasDrink={hasDrink} hasFood={hasFood} hasDessert={hasDessert} />
}
