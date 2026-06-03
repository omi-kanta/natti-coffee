import MenuSection from "./MenuSection";
import { MenuItem } from "@/types/menu";

export default function CoffeeMenu({ items }: { items: MenuItem[] }) {
  return (
    <MenuSection
      items={items}
      sectionId="drink-menu"
      basePath="/menu/drink"
      title="DRINK MENU"
      subtitle="おすすめドリンクを見る"
    />
  );
}
