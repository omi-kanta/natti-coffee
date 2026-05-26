"use client";
import { motion } from "framer-motion";

const colsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const getGridConfig = (count: number) => {
  const topCount = Math.ceil(count / 2);
  const bottomCount = Math.floor(count / 2);
  return { topCount, bottomCount };
};

type MenuGridProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

export default function MenuGrid<T>({ items, renderItem }: MenuGridProps<T>) {
  const { topCount, bottomCount } = getGridConfig(items.length);
  const topItems = items.slice(0, topCount);
  const bottomItems = items.slice(topCount);

  const topCols = Math.min(topCount, 4);
  const bottomCols = Math.min(bottomCount, 4);

  return (
    <>
      {/* SP: 全件 grid-cols-2 */}
      <div className="grid grid-cols-2 md:hidden gap-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            {renderItem(item, i)}
          </motion.div>
        ))}
      </div>

      {/* PC: 上下分割ロジック */}
      <div className="hidden md:block">
        <div className={`grid ${colsMap[topCols]} gap-6`}>
          {topItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {renderItem(item, i)}
            </motion.div>
          ))}
        </div>
        {bottomItems.length > 0 && (
          <div className={`grid ${colsMap[bottomCols]} gap-6 mt-6`}>
            {bottomItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (topCount + i) * 0.08 }}
              >
                {renderItem(item, topCount + i)}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
