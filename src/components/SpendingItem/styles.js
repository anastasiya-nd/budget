import styled from 'styled-components';

const iconVariants = {
  food: '#DFC4C0',
  shopping: '#BE8C5F',
  entertainment: '#FF6B74',
  car: '#EF8151',
  bills: '#24695C',
  home: '#B7AD56',
  education: '#00A9CE',
  other: '#5652BA',
};

export const ButtonWrap = styled.div`
  width: 0px;
  margin-left: 16px;
  transition: 0.3s;
  opacity: 0;
  display: flex;
  justify-content: space-between;
`;

export const Spending = styled.div`
  padding: 8px 18px;
  background: #f5f1ee;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  overflow: hidden;
  height: 54px;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover ${ButtonWrap} {
    width: 52px;
    cursor: pointer;
    opacity: 1;
  }
`;

export const IconWrap = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ variant }) => iconVariants[variant] || '#fff'};
`;

export const CategoryWrap = styled.div`
  margin: 0 18px;
  max-width: 315px;
  width: 100%;
`;

export const CategoryName = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #000000;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #b2b2b2;
  margin: 4px 0 0;
`;

export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  background: #9bd0e1;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  padding: 3px 6px;
  color: #ffffff;
  margin: 0 4px;
`;

export const HiddenLabelsNumber = styled.span`
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #b2b2b2;
  margin: 0 4px;
`;

export const DateAndAmountWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
`;

export const Date = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #b2b2b2;
  max-width: 125px;
  text-align: right;
`;

export const Amount = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #24695c;
  width: 125px;
  text-align: right;
`;

export const SpendingButton = styled.button`
  &:hover {
    cursor: pointer;
  }
`;
