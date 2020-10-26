const booksList = [
  { id: 1, title: 'React v17 - 即将来袭' },
  { id: 2, title: 'TypeScript从0到精通' },
  { id: 3, title: '后端我们使用了BFF层' },
  { id: 4, title: 'Webpack使用了最新版本' },
  { id: 5, title: '前端测试我们使用了Jest' },
];

const booksDetails = [
  { id: 1, url: 'https://www.amazon.com/Elad-Elrom/e/B003XE8ICW' },
  { id: 2, url: 'https://www.amazon.com/gp/product/B07VMD99YH/' },
  { id: 3, url: 'https://www.amazon.com/gp/product/B01N5AIZ7G/' },
  { id: 4, url: 'https://www.amazon.com/gp/product/B004VH5YZY' },
  { id: 5, url: 'https://www.amazon.com/gp/product/1430219041' },
];

export const getBooks = async () =>
  new Promise((resolve) => setTimeout(() => resolve(booksList), 500));

export const getBookById = async (id: number) =>
  new Promise((resolve) => {
    const details = booksDetails.find((s) => s.id === id);
    return setTimeout(() => resolve(details), 500);
  });
