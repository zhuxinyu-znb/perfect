import React from 'react';
import { useRecoilValue } from 'recoil';
import { getBookDetail } from '../../recoil/selectors/booksSelectors';

const BookDetail = () => {
  const currentBook = useRecoilValue(getBookDetail);
  return currentBook ? (
    <>
      <h2>View Book on Amazon:</h2>
      <p>
        URL:
        <a
          href={(currentBook as any).url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {(currentBook as any).url}
        </a>
      </p>
    </>
  ) : null;
};

export default BookDetail;
