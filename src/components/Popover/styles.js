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
  z-index: 10;
  top: 100%;
  left: 0;
  background: #fff;
  width: fit-content;
  box-shadow: 0px 4px 8px rgba(22, 61, 53, 0.12);
  border-radius: 4px;
  padding: 8px 0 16px;
  display: ${({ variant }) => (variant ? 'block' : 'none')};
`;

export const ArrowWrap = styled.div`
  transition: 0.2s;
  height: 24px;
  transform: ${({ variant }) => (variant ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
