import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/entities';
import { State } from '../entities';
import { getForksAction } from '../thunks';
import { Wrapper, TableWrapper, Row, Cell, Link } from './styles';

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const { forks } = useSelector<RootState, State>((state) => state.table);

  useEffect(() => {
    dispatch(getForksAction('facebook/create-react-app'));
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
      </TableWrapper>
    </Wrapper>
  );
};

export default Table;
