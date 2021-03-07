import React from 'react';

import SearchInput from '../../../components/SearchInput';
import { Wrapper, Content, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Hello!</Title>
        <SearchInput />
      </Content>
    </Wrapper>
  );
};

export default Home;
