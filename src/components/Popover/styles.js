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
  box-shadow: 0 3px 7px 3px rgb(0 0 0 / 20%);
  border-radius: 4px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const ArrowWrap = styled.div`
  transition: 0.2s;
  height: 24px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
