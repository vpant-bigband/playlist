import React, { useState, useCallback } from 'react';
import { SearchBoxWrapper, SearchBoxInput, SearchIconWrapper } from './SearchBox.styles';
import MagnifyGlass from '../../Icons/MagnifyGlass';

interface Props {
  title?: string;
  onSearchIconClick: (text: string) => void; 
}

const SearchBox: React.FunctionComponent<Props> = ( { title = 'Search for videos', onSearchIconClick }) => {
  const [text, setText] = useState<string>('');

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, [setText]);

  const onClick = useCallback(() => onSearchIconClick(text), [onSearchIconClick, text]);

  return (
    <SearchBoxWrapper minWidth={['85%','75%','65%']} fontSize={[1, 2, 3, 4]}>
      <SearchBoxInput onChange={onChange} placeholder={title} />
      <SearchIconWrapper width={['20%', null, '10%', '12%', '8%']} onClick={onClick}>
        <MagnifyGlass />
      </SearchIconWrapper>
    </SearchBoxWrapper>
  );
}

export default SearchBox;