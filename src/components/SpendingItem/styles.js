import styled from 'styled-components';

export const Spending = styled.div`
  padding: 12px 18px;
  background: #f5f1ee;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const CategoryWrap = styled.div`
  margin: 0 18px;
  max-width: 315px;
  width: 100%;
`;

export const CategoryName = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #000000;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 12px;
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
  line-height: 12px;
  letter-spacing: 0.02em;
  color: #b2b2b2;
  max-width: 125px;
  text-align: right;
`;

export const Amount = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #24695c;
  width: 125px;
  text-align: right;
`;
