import React from 'react';

import SearchInput from '../../../components/SearchInput';
import { Wrapper, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <SearchInput />
      </Content>
    </Wrapper>
  );
};

export default Home;
