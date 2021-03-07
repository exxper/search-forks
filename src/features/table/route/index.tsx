import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';

import Spinner from '../../../components/Spinner';
import SearchInput from '../../../components/SearchInput';
import { ROUTE_PATHS } from '../../../navigation/constants';
import { RootState } from '../../../store/entities';
import { RepoResponse } from '../api/entities';
import { actions } from '../slice';
import { SAVED_REPOS } from '../constants';
import { getForksAction, toggleFavoriteAction } from '../thunks';
import {
  Wrapper,
  TableWrapper,
  ContentWrapper,
  Row,
  Cell,
  Link,
  PageWrapper,
  PageNumber,
  PageArrow,
  FavIcon,
  SearchWrapper,
  SpinnerWrapper,
} from './styles';

const Table: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { home, table } = useSelector<RootState, RootState>((state) => state);
  const { forks, pageInfo, favorites, pending } = table;

  const changePageHandler = (newPage: number) => () => {
    history.push(
      `${ROUTE_PATHS.TABLE}?page=${newPage}&repository=${home.input}`,
    );
  };

  const toggleFavorite = (id: number) => () => {
    dispatch(toggleFavoriteAction(id));
  };

  const renderRow = (repo: RepoResponse) => {
    const {
      id,
      full_name,
      owner: { login },
      stargazers_count,
      html_url,
    } = repo;
    const isFavorite = favorites.includes(id);

    return (
      <Row key={id}>
        <Cell left size={2}>
          {full_name}
        </Cell>
        <Cell>{login}</Cell>
        <Cell>{stargazers_count}</Cell>
        <Cell size={2}>
          <Link href={html_url} target="_blank">
            {html_url}
          </Link>
        </Cell>
        <Cell>
          <FavIcon $saved={isFavorite} onClick={toggleFavorite(id)} />
        </Cell>
      </Row>
    );
  };

  const renderPages = () => {
    if (!pageInfo) {
      return;
    }

    const { first, prev, next, last } = pageInfo;
    const currentPage = next ? next - 1 : prev + 1;

    return (
      <PageWrapper>
        {!!prev && <PageArrow onClick={changePageHandler(prev)} />}
        {!!first && prev !== first && (
          <React.Fragment>
            <PageNumber onClick={changePageHandler(first)}>{first}</PageNumber>
            {prev - 1 !== first ? '...' : ''}
          </React.Fragment>
        )}
        {!!prev && (
          <PageNumber onClick={changePageHandler(prev)}>{prev}</PageNumber>
        )}
        <PageNumber current>{currentPage}</PageNumber>
        {!!next && (
          <PageNumber onClick={changePageHandler(next)}>{next}</PageNumber>
        )}
        {!!last && next !== last && (
          <React.Fragment>
            {next + 1 !== last ? '...' : ''}
            <PageNumber onClick={changePageHandler(last)}>{last}</PageNumber>
          </React.Fragment>
        )}
        {!!next && <PageArrow $isRight onClick={changePageHandler(next)} />}
      </PageWrapper>
    );
  };

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
  }, [location]);

  useEffect(() => {
    const savedRepos = JSON.parse(
      localStorage.getItem(SAVED_REPOS) || '[]',
    ) as number[];

    dispatch(actions.setFavorites(savedRepos));
  }, []);

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput />
      </SearchWrapper>
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
          {pending ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : (
            forks.map(renderRow)
          )}
        </ContentWrapper>
        {renderPages()}
      </TableWrapper>
    </Wrapper>
  );
};

export default Table;
