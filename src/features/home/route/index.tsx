import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import SearchInput from '../../../components/SearchInput';
import { ROUTE_PATHS } from '../../../navigation/constants';
import { getForksAction } from '../../table/thunks';

import { Wrapper, Content } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Content>
        <SearchInput
          onSearch={(value) => {
            dispatch(getForksAction(value));
            history.push(`${ROUTE_PATHS.TABLE}`);
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default Home;
