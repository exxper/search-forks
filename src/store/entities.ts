import { State as Home } from '../features/home/entities';
import { State as Table } from '../features/table/entities';

export interface RootState {
  home: Home;
  table: Table;
}
