import MenuSection from "./MenuSection";
import { MenuItem } from "@/types/menu";

export default function LunchMenu({ items }: { items: MenuItem[] }) {
  return (
    <MenuSection
      items={items}
      sectionId="lunch-menu"
      basePath="/menu/lunch"
      title="LUNCH MENU"
      subtitle="日替わりランチ・週替わりセットメニュー"
    />
  );
}
