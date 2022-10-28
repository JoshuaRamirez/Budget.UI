import { DataGridSortButtonViewModel } from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.ViewModel';
import { DataGridSortButtonStyleModel } from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.StyleModel';
import { GetDataGrid } from '@/Store/Getters/GetDataGrid';
import { ApplicationState } from '@/Store/ApplicationStore';

export interface InitializeDataGridSortButtonPayload {
  DataGridId : string
  DataGridSortButtonId : string
  StyleModel : DataGridSortButtonStyleModel
  ViewModel : DataGridSortButtonViewModel
}

export function InitializeDataGridSortButton (state : ApplicationState, payload : InitializeDataGridSortButtonPayload) {
  const dataGrid = GetDataGrid(state)(payload.DataGridId);
  dataGrid?.SortButtons.push({
    Id: payload.DataGridSortButtonId,
    StyleModel: payload.StyleModel,
    ViewModel: payload.ViewModel
  });
}
