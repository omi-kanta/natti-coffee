import MenuSection from './MenuSection'
import { MenuItem } from '@/types/menu'

export default function DessertMenu({ items }: { items: MenuItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <MenuSection
      items={items}
      sectionId="dessert-menu"
      basePath="/menu/dessert"
      title="DESSERT MENU"
      subtitle="低糖質・グルテンフリーのデザートラインナップ"
    />
  )
}
