import React from 'react';
import theme from '../../theme/theme.constant';

interface MagnifyGlassProps {
  height?: number,
  width?: number, 
}

const MagnifyGlass: React.FunctionComponent<MagnifyGlassProps> = ({ height = 40, width = 40 }) => (
  <svg data-testid='magnify-glass-icon' height={height} width={width} viewBox="0 0 16 16">
    <path
      d="M14.23437,15.10449l-3.2539-3.25488a6.13908,6.13908,0,1,1,1.63574-1.85352c-.05859.10156-.11816.19922-.17969.29492l-.63086-.40625c.05567-.08593.10938-.17383.16016-.26269a5.406,5.406,0,1,0-1.19922,1.43945.37776.37776,0,0,1,.50781.02051l3.49121,3.49121Z"
      fill={theme.colors.white}
    />
  </svg>
);

export default MagnifyGlass;