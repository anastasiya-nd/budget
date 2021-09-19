import styled from 'styled-components';
import { ButtonItem } from '../Button/styles';
import LabelsField from '../LabelsField';
import NumberField from '../NumberField';
import RadioButtonField from '../RadioButtonField';
import Select from '../Select';
import { SelectWrap } from '../Select/styles';
import TextareaField from '../TextareaField';
import DateField from '../DateField';

export const Form = styled.form`
  padding: 24px 24px 28px;
`;

export const FormContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'category date'
    'amount currency'
    'note note'
    'labels labels';
  /* grid-template-columns: repeat(2, 192px); */
  grid-template-columns: repeat(2, 252px);
  grid-gap: 18px;
`;

export const CategorySelect = styled(Select)`
  grid-area: category;
  ${SelectWrap} {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Date = styled(DateField)`
  grid-area: date;
`;

export const Amount = styled(NumberField)`
  grid-area: amount;
`;

export const Currency = styled(RadioButtonField)`
  grid-area: currency;
  align-self: end;
`;

export const Note = styled(TextareaField)`
  grid-area: note;
`;

export const Labels = styled(LabelsField)`
  grid-area: labels;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  ${ButtonItem} {
    margin-left: 12px;
    padding: 8px 12px;
  }
`;

// export const ButtonItem = styled(Button)`  // What is better?
//   margin-left: 12px;
//   padding: 8px 12px;
// `;
