import styled from 'styled-components';

export const PopoverWrap = styled.div`
  position: relative;
`;

export const PopoverLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
`;

export const PopoverContentWrap = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  width: fit-content;
  ${({ isOpen }) =>
    isOpen === false &&
    `
    display: none;
  `}
  ${({ isOpen }) =>
    isOpen === true &&
    `
    display: block;
  `}
`;

export const ArrowWrap = styled.div`
  transition: 0.2s;
  height: 24px;
  ${({ isOpen }) =>
    isOpen === true &&
    `
    transform: rotate(180deg);
  `}
`;

export const CategoryWrap = styled.ul`
  padding: 0;
  margin: 0;
`;

export const CategoryItem = styled.li`
  list-style-type: none;
`;

export const CategoryLabel = styled.label`
  display: block;
  font-size: 14px;
  line-height: 16px;
  padding: 2px 8px;
`;

export const CategoryInput = styled.input`
  display: none;
  &:checked + label {
    font-weight: 700;
  }
`;
