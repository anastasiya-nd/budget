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

export const SpendingWrap = styled.section`
  padding: 18px 0;
`;

export const SpendingHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e7e7e9;
`;

export const SpendingContent = styled.div`
  padding: 32px 0;
`;

export const FilterWrap = styled.div`
  display: flex;
  & > div {
    margin-right: 18px;
  }
`;
