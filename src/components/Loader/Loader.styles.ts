import styled from '@emotion/styled';
import theme, { ThemeType } from '../../theme/theme.constant';

export const LoaderWrapper = styled.div<{ theme?: ThemeType }>`
  margin-left: auto;
  margin-right: auto;
  height: 20px;
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  text-align: center;
  padding: 15px;
`;