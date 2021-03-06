import React, { useState } from 'react';

import { Wrapper, Input, SearchIcon } from './styles';

const SearchInput: React.FC = () => {
  const [focus, setFocus] = useState(false);

  return (
    <Wrapper focus={focus}>
      <Input
        placeholder="Search forks..."
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
      <SearchIcon />
    </Wrapper>
  );
};

export default SearchInput;
