import styled from 'styled-components';
import { ReactComponent as BaseSearchIcon } from '../../assets/search.svg';

import { metrics, colors } from '../../styles';

interface WrapperProps {
  focus: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex: 1;
  border-style: solid;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${colors.grey};
  align-items: center;
  ${({ focus }) => {
    if (focus)
      return `
        border-color: ${colors.blue};
      `;
  }}
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  height: 40px;
  box-sizing: border-box;
  color: ${colors.blue1};
  padding: ${metrics.spacing * 0.5}px ${metrics.spacing}px;
  font-size: ${metrics.fontSize.regular};
  font-weight: 500;
  background-color: ${colors.white};
  border-color: ${colors.none};
  border-width: 0px;
  border-radius: 20px;
  outline: none;
  text-overflow: ellipsis;
  &:focus {
    cursor: auto;
  }
  transition: all 0.2s ease;
`;

export const SearchIcon = styled(BaseSearchIcon)`
  width: 28px;
  height: 28px;
  fill: ${colors.grey};
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    fill: ${colors.blue};
  }
`;
