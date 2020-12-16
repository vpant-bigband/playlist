import React, { useCallback } from 'react';
import { HeaderWrapper } from './Header.styles';
import SearchBox from './SearchBox/SearchBox';

const Header: React.FunctionComponent<{ onSearchIconClick: (keyword: string) => void }>  = ({ onSearchIconClick }) => {
  return (
    <HeaderWrapper>
      <SearchBox onSearchIconClick={onSearchIconClick} />
    </HeaderWrapper>
  );
}

export default Header;