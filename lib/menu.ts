import { client } from './microcms';
import { MenuItem } from '@/types/menu';

// メニュー一覧取得
export const getMenuList = async (category?: 'drink' | 'food') => {
  const data = await client.getList<MenuItem>({
    endpoint: 'menu',
    queries: {
      filters: category ? `category[equals]${category}` : undefined,
      limit: 100,
    },
  });
  return data.contents;
};

// メニュー詳細取得
export const getMenuItem = async (id: string) => {
  const data = await client.get<MenuItem>({
    endpoint: 'menu',
    contentId: id,
  });
  return data;
};