import MenuSection from "./MenuSection";
import { MenuItem } from "@/types/menu";

export default function FoodMenu({ items }: { items: MenuItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <MenuSection
      items={items}
      sectionId="food-menu"
      basePath="/menu/food"
      title="FOOD MENU"
      subtitle="低糖質・グルテンフリーのフードラインナップ"
    />
  );
}
