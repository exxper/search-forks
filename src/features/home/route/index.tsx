import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import SearchInput from '../../../components/SearchInput';
import { ROUTE_PATHS } from '../../../navigation/constants';

import { Wrapper, Content } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Content>
        <SearchInput
          onSearch={(value) => {
            history.push(`${ROUTE_PATHS.TABLE}?page=1&repository=${value}`);
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default Home;
