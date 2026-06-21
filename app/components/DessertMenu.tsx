import MenuSection from './MenuSection'
import MenuImageModal from './MenuImageModal'
import { MenuItem } from '@/types/menu'

type Props = {
  items: MenuItem[];
  dessertMenuImage?: { url: string; width: number; height: number };
};

export default function DessertMenu({ items, dessertMenuImage }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <>
      <MenuSection
        items={items}
        sectionId="dessert-menu"
        basePath="/menu/dessert"
        title="DESSERT MENU"
        subtitle="低糖質・グルテンフリーのデザートラインナップ"
      />
      {dessertMenuImage && (
        <div className="flex justify-center -mt-8 mb-12">
          <MenuImageModal image={dessertMenuImage} buttonLabel="デザートメニューを見る" />
        </div>
      )}
    </>
  )
}
