import styled from 'styled-components';

const ButtonItem = styled.button`
  border: none;
  border-radius: 3px;
  padding: 8px;
  font-size: 14px;
  line-height: 16px;

  ${({ variant }) =>
    variant === 'primary' &&
    `
    background-color: #24695c;
    color: #fff;
  `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
    background-color: #f5f1ee;
    color: #000;
  `}
`;

export default ButtonItem;
