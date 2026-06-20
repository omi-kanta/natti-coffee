import MenuSection from "./MenuSection";
import { MenuItem } from "@/types/menu";

export default function LunchMenu({ items }: { items: MenuItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <MenuSection
      items={items}
      sectionId="lunch-menu"
      basePath="/menu/lunch"
      title="LUNCH MENU"
      subtitle="スープ・デザート・選べる2ドリンク付き"
    />
  );
}
