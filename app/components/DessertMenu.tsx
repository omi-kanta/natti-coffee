import MenuSection from './MenuSection'
import { MenuItem } from '@/types/menu'

export default function DessertMenu({ items }: { items: MenuItem[] }) {
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
