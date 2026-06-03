import MenuItemDetailContent from '@/components/MenuItemDetailContent'
import type { MenuItem } from '@/types/menu'

export default function FoodDetailContent({ item }: { item: MenuItem }) {
  return <MenuItemDetailContent item={item} />
}
