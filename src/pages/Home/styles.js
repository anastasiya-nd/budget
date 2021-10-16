import styled from 'styled-components';
import Button from '../../components/Button';

export const ModalContent = styled.div`
  padding: 24px 24px 32px;
`;

export const ModalButtonWrap = styled.div`
  margin: 24px auto 0;
  display: flex;
  justify-content: flex-end;
`;

export const ModalButton = styled(Button)`
  margin: 0 8px;
  &:last-of-type {
    margin-right: 0;
  }
`;
