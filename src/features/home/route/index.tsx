import React from 'react';

import SearchInput from '../../../components/SearchInput';
import { Wrapper, Content, Title, Subtitle } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Hello!</Title>
        <Subtitle>Try to find forks of repo</Subtitle>
        <SearchInput />
      </Content>
    </Wrapper>
  );
};

export default Home;
