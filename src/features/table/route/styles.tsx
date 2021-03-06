import styled from 'styled-components';

import { colors, metrics } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${metrics.spacing * 2}px;
`;

export const Row = styled.div<{ isTitle?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: row;
  min-height: 35px;
  font-weight: ${({ isTitle = false }) => (isTitle ? 'bold' : 'normal')};
`;

export const Cell = styled.div<{ size?: number; left?: boolean }>`
  display: flex;
  flex: ${({ size = 1 }) => size};
  justify-content: ${({ left = false }) => (left ? 'start' : 'center')};
  align-items: center;
`;

export const Link = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.shuttleGray};
  text-decoration: underline;
  width: 300px;
`;
