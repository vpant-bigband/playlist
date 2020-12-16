import styled from '@emotion/styled';
import { fontSize } from 'styled-system';
import { ThemeType } from '../../theme/theme.constant';

export const HeaderWrapper = styled.div<{ theme?: ThemeType }>`
  height: 60px;
  background-color: ${(props) => props.theme.colors.blue};
  display: flex; 
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  width: 100px;
  height: 100%;
  margin: auto; 
`;
