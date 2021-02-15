// vendor modules
import styled from 'styled-components';
// ui
import { backgroundColor, textColor } from 'ui/colors';
import { StyledDiv } from 'ui/DemoApp';

const dropdownItemHeight = 48;
const dropdownMaxItems = 4;

export const DropdownContainer = styled(StyledDiv)`
  position: absolute;
  left: 0px;
  top: 72px;

  flex-direction: column;
  align-items: flex-start;

  height: ${({ active, data }) =>
    active
      ? `${Math.min(data.length, dropdownMaxItems) * dropdownItemHeight + 2}px`
      : '0px'};
  opacity: ${({ active }) => (active ? '1' : '0')};
  border: ${({ active }) => (active ? '1px' : '0px')} solid
    ${backgroundColor.grey};

  background: ${backgroundColor.greylight};

  overflow: hidden;
  transition: all 0.1s ease-out;
`;

export const ScrollContainer = styled(StyledDiv)`
  height: 100%;
  overflow-y: auto;

  flex-direction: column;
  align-items: flex-start;
`;

export const ListItem = styled(StyledDiv)`
  min-height: ${dropdownItemHeight}px;
  padding: 16px 48px;

  border-bottom: 1px solid ${backgroundColor.grey};

  transition: background 0.1s linear;
  cursor: pointer;

  &:hover {
    background: ${backgroundColor.accent};
    border-bottom: 1px solid ${backgroundColor.accent};
    color: ${textColor.light};

    & path {
      fill: ${textColor.light};
    }
  }
`;
