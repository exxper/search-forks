import styled from 'styled-components';
import { HiOutlineChevronLeft, HiOutlineHeart } from 'react-icons/hi';

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
  flex-direction: row;
  padding: ${metrics.spacing}px;
  font-weight: ${({ isTitle = false }) => (isTitle ? 'bold' : 'normal')};
  border-bottom: ${({ isTitle = false }) =>
    isTitle ? `1px solid ${colors.black4}` : 'none'};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
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

export const FavIcon = styled(HiOutlineHeart)<{ $saved: boolean }>`
  cursor: pointer;
  color: ${colors.danger};
  fill: ${({ $saved }) => ($saved ? colors.danger : colors.none)};
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${metrics.spacing * 3}px;
  color: ${colors.black4};
  font-size: ${metrics.fontSize.medium}px;
  user-select: none;
`;

export const PageArrow = styled(HiOutlineChevronLeft)<{ $isRight?: boolean }>`
  transform: rotate(${({ $isRight }) => ($isRight ? '180deg' : 0)});
  cursor: pointer;
`;

export const PageNumber = styled.span<{ current?: boolean }>`
  border-bottom: ${({ current }) => (current ? '1px solid black' : 'none')};
  margin: 0 ${metrics.spacing * 0.5}px;
  cursor: pointer;
`;
