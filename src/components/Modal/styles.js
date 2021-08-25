import styled from 'styled-components';

// eslint-disable-next-line
export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: ${({ variant }) => (variant ? 'block' : 'none')};
`;

export const ModalContainer = styled.div`
  width: fit-content;
  margin: 80px auto 0;
  background-color: #fff;
  position: relative;
`;

export const ModalHeader = styled.div`
  padding: 18px;
  background-color: #f5f1ee;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;
`;
