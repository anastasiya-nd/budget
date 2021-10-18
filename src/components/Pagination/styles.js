import styled from 'styled-components';

const commonStylesOfPagintaionItem = `
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  padding: 0 2px;
`;

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationButtonsWrap = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 24px;
`;

export const PaginationItem = styled.li`
  margin: 0 4px;
`;

export const PaginationButton = styled.button`
  color: ${({ active }) => (active ? '#24695C' : '#b2b2b2')};
  transition: 0.15s;
  ${commonStylesOfPagintaionItem}
  &:hover {
    color: #24695c;
    cursor: pointer;
  }
`;

export const PaginationDots = styled.span`
  ${commonStylesOfPagintaionItem}
  color: #b2b2b2;
`;

export const PaginationNavigation = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 14px;
  color: #b2b2b2;
  transition: 0.15s;
  font-weight: 600;
  svg {
    fill: #b2b2b2;
    transition: 0.15s;
  }
  &:hover {
    color: #24695c;
    cursor: pointer;
  }
  &:hover svg {
    fill: #24695c;
  }
  &:disabled {
    color: #cbcbcb;
  }
  &:disabled svg {
    fill: #cbcbcb;
  }
`;
