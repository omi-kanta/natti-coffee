import MenuSection from "./MenuSection";
import MenuImageModal from "./MenuImageModal";
import { MenuItem } from "@/types/menu";

type Props = {
  items: MenuItem[];
  drinkMenuImage?: { url: string; width: number; height: number };
};

export default function CoffeeMenu({ items, drinkMenuImage }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <>
      <MenuSection
        items={items}
        sectionId="drink-menu"
        basePath="/menu/drink"
        title="DRINK MENU"
        subtitle="おすすめドリンクを見る"
      />
      {drinkMenuImage && (
        <div className="flex justify-center -mt-8 mb-12">
          <MenuImageModal image={drinkMenuImage} buttonLabel="ドリンクメニューを見る" />
        </div>
      )}
    </>
  );
}
