import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { ROUTE_PATHS } from '../../navigation/constants';
import { Wrapper, Input, SearchIcon } from './styles';

const SearchInput: React.FC = () => {
  const history = useHistory();
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('facebook/create-react-app');

  const searchHandler = () => {
    history.push(`${ROUTE_PATHS.TABLE}?page=1&repository=${value}`);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const focusHandler = () => {
    setFocus(true);
  };
  const blurHandler = () => {
    setFocus(false);
  };
  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  return (
    <Wrapper focus={focus}>
      <Input
        placeholder="Search forks..."
        value={value}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onKeyPress={keyPressHandler}
      />
      <SearchIcon onClick={searchHandler} />
    </Wrapper>
  );
};

export default SearchInput;
