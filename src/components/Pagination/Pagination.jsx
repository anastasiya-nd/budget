import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  PaginationWrap,
  PaginationButtonsWrap,
  PaginationItem,
  PaginationDots,
  PaginationButton,
  PaginationNavigation,
} from './styles';
import PrevArrow24 from '../Icons/PrevArrow24';
import NextArrow24 from '../Icons/NextArrow24';

const Pagination = ({ currentPage, total, onPageChange }) => {
  const [buttons, setButtons] = useState([]);
  const numberOfPages = [];

  for (let i = 1; i <= total; i++) { //eslint-disable-line
    numberOfPages.push(i);
  }

  useEffect(() => {
    let paginationArray;
    const leftDots = '...';
    const rightDots = ' ...';

    if (total <= 9) {
      paginationArray = numberOfPages;
    } else if (currentPage < 5) {
      const sliced1 = numberOfPages.slice(0, 6);
      const sliced2 = numberOfPages.slice(-3);
      paginationArray = [...sliced1, leftDots, ...sliced2];
    } else if (currentPage >= 5) {
      const sliced1 = numberOfPages.slice(0, 3);
      const sliced2 = numberOfPages.slice(-3);
      const sliced3 = numberOfPages.slice(`${currentPage - 3}`, `${currentPage + 2}`);
      if (
        sliced3[0] - sliced1[sliced1.length - 1] > 1 &&
        sliced2[0] - sliced3[sliced3.length - 1] > 1
      ) {
        paginationArray = [...sliced1, leftDots, ...sliced3, rightDots, ...sliced2];
      } else if (sliced1[sliced1.length - 1] - sliced3[0] > 1) {
        paginationArray = [...sliced1, leftDots, ...sliced3, ...sliced2];
      } else if (sliced2[0] - sliced3[sliced3.length - 1] > 1) {
        paginationArray = [...sliced1, ...sliced3, rightDots, ...sliced2];
      } else {
        paginationArray = [...sliced1, leftDots, ...sliced3, ...sliced2];
      }
    }

    paginationArray = Array.from(new Set(paginationArray));
    setButtons(paginationArray);
  }, [currentPage, total]);

  return (
    <PaginationWrap>
      <PaginationNavigation
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <PrevArrow24 />
        Prev
      </PaginationNavigation>
      <PaginationButtonsWrap>
        {buttons.map((button) => {
          return (
            <PaginationItem key={button}>
              {typeof button === 'number' ? (
                <PaginationButton
                  type="button"
                  onClick={() => onPageChange(button)}
                  active={+button === +currentPage}
                >
                  {button}
                </PaginationButton>
              ) : (
                <PaginationDots>{button}</PaginationDots>
              )}
            </PaginationItem>
          );
        })}
      </PaginationButtonsWrap>
      <PaginationNavigation
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === total}
      >
        Next
        <NextArrow24 />
      </PaginationNavigation>
    </PaginationWrap>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  total: 0,
};

export default Pagination;
