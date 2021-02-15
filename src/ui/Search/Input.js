// vendor modules
import styled, { keyframes } from 'styled-components';
// ui
import { backgroundColor, textColor } from 'ui/colors';
import { StyledDiv } from 'ui/DemoApp';
import { IconContainer } from 'ui/icons';

export const InputContainer = styled(StyledDiv)`
  height: 48px;
  width: 456px;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 16px 48px;

  border-radius: 100px;

  background: ${backgroundColor.greylight};

  border: 2px solid ${backgroundColor.grey};

  &:active,
  &:focus {
    border: 2px solid ${backgroundColor.accent};
  }

  &::placeholder {
    color: ${textColor.dark};
  }
`;

export const Icon = styled(IconContainer)`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 16px;
`;

export const PrefixIcon = styled(Icon)`
  left: 16px;
`;

export const CrossButton = styled(Icon)`
  width: 14px;
  height: 14px;
  right: 16px;
  top: 17px;

  cursor: pointer;
`;

const effectRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(Icon)`
  right: 16px;

  animation: ${effectRotate} 0.7s linear infinite;
`;
