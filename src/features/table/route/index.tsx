import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import { RootState } from '../../../store/entities';
import { getForksAction } from '../thunks';
import {
  Wrapper,
  TableWrapper,
  ContentWrapper,
  Row,
  Cell,
  Link,
  PageWrapper,
  PageNumber,
} from './styles';

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const { table } = useSelector<RootState, RootState>((state) => state);
  const { forks, pageInfo } = table;
  const location = useLocation();

  useEffect(() => {
    const { page, repository } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    if (repository) {
      dispatch(
        getForksAction({
          fullName: repository as string,
          page: page as string,
        }),
      );
    }
  }, []);

  return (
    <Wrapper>
      <TableWrapper>
        <Row isTitle>
          <Cell left size={2}>
            Repository name
          </Cell>
          <Cell>Owner</Cell>
          <Cell>Stars</Cell>
          <Cell size={2}>Link</Cell>
          <Cell>Favorite</Cell>
        </Row>
        <ContentWrapper>
          {forks.map((it) => {
            return (
              <Row key={it.id}>
                <Cell left size={2}>
                  {it.full_name}
                </Cell>
                <Cell>{it.owner.login}</Cell>
                <Cell>{it.stargazers_count}</Cell>
                <Cell size={2}>
                  <Link href={it.html_url} target="_blank">
                    {it.html_url}
                  </Link>
                </Cell>
                <Cell>{'<3'}</Cell>
              </Row>
            );
          })}
        </ContentWrapper>
        <PageWrapper>
          <div>{'<'}</div>
          <PageNumber>{pageInfo.next - 1}</PageNumber>
          <div>{'>'}</div>
        </PageWrapper>
      </TableWrapper>
    </Wrapper>
  );
};

export default Table;
