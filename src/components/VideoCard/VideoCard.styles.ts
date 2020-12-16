import styled from '@emotion/styled';
import theme, { ThemeType } from '../../theme/theme.constant';
import { variant, width, FontSizeProps, fontSize, typography, TypographyProps, padding, PaddingProps, color, ColorProps, display, DisplayProps } from 'styled-system';


export const VideoCardWrapper = styled.div<{ theme?: ThemeType }>`
  display: flex;
  padding: 20px;
  border-bottom: ${(props) => theme.borders[1] + ' ' + theme.colors.lightBlue}; 
`;

export const VideoCardImage = styled.img<{ resolution: string; height: number; width: number}>`
  ${({ height, width }) => ({
    height,
    width,
  })}
  ${variant({
    prop: 'resolution',
    variants: {
      'high': {
        padding: 10,
      },
      'medium': {
        padding: 5,
      },
      'low': {
        padding: 15,
        marginTop: 'auto',
        marginBottom: 'auto',
      },
    },
  })}
`;

export const VideoCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 50%;
`;

export const Text = styled.span<FontSizeProps & PaddingProps & ColorProps & DisplayProps>`
  ${fontSize}
  ${color}
  ${padding}
  ${display}
  word-break: break-word;
`;

export const VideoCardTitle = styled(Text)<{ theme?: ThemeType } & PaddingProps>`
  ${padding}
  font-weight: ${({theme}) => theme.fontWeights[5]};
  padding-top: 10px;
`;

export const VideoCardDescription = styled(Text)<{ theme?: ThemeType }>`
  font-weight: ${({theme}) => theme.fontWeights[4]};
  width: 85%;
`;
