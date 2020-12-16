import styled from '@emotion/styled';
import { FontSizeProps, fontSize, minWidth, MinWidthProps, width, WidthProps } from 'styled-system';
import { ThemeType } from '../../../theme/theme.constant';


export const SearchBoxWrapper = styled.div<{ theme?: ThemeType } & FontSizeProps & MinWidthProps>`
  ${fontSize};
  ${minWidth}
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  margin: 5px;
`;

export const SearchBoxInput = styled.input<{ theme?: ThemeType}>`
  border: none;
  color: ${(props) => props.theme.colors.black};
  width: 100%;
  height: 100%;
  font-size: inherit;
  background-color: ${(props) => props.theme.colors.transparent};
  padding-left: 5px;
`;

export const SearchIconWrapper = styled.span<{ theme?: ThemeType } & WidthProps>`
  background-color: ${(props) => props.theme.colors.deepRed};
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  ${width};
`;