import { ApplicationState } from '@/Store/States/ApplicationState';

export const GetDataGridSortButton = (state : ApplicationState) => (dataGridId : string, dataGridSortButtonId : string) => {
  const dataGrid = state.DataGridsState.DataGrids.find(x => x?.Id === dataGridId);
  const dataGridSortButton = dataGrid?.SortButtons.find(x => x.Id === dataGridSortButtonId);
  return dataGridSortButton;
};
