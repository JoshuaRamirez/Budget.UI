import { ApplicationState } from '@/Store/ApplicationStore';

export const GetDataGrid = (state : ApplicationState) => (dataGridId : string) => {
  const dataGrid = state.DataGridsState.DataGrids.find(x => x?.Id === dataGridId);
  return dataGrid;
};
