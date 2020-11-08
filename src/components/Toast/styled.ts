import styled, { keyframes } from 'styled-components';

const entryAnimation = keyframes`
  0% {
  transform: translateX(100%)
  }
  
  100% {
  transform: translateX(0)
  }
`;

const exitAnimation = keyframes`
  0% {
    opacity: 1;
  }
  
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.aside`
  animation: ${entryAnimation} 0.3s forwards ease-in,
    ${exitAnimation} 0.3s 5s forwards ease-out;
  background-color: #bf616a;
  border-radius: 8px;
  box-shadow: rgba(184, 194, 215, 0.25) 0 4px 6px,
    rgba(184, 194, 215, 0.1) 0 5px 7px;
  color: #2e3440;
  font-size: 14px;
  margin-bottom: 16px;
  margin-right: 24px;
  max-width: 300px;
  padding: 8px;
  text-align: center;
  transform: translateX(100%);
`;

export const ToastStyled = { Wrapper };
