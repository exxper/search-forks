import styled from 'styled-components';
import { colors, metrics } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 20% 0px 20%;
`;

export const Content = styled.div``;

export const Title = styled.div`
  display: flex;
  color: ${colors.blue1};
  justify-content: center;
  align-items: center;
  font-size: 36px;
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.blue1};
  margin-bottom: ${metrics.spacing}px;
  font-size: 28px;
`;
