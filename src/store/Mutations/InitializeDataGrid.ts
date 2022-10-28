import { DataGridStyleModel } from '@/Components/Shared/DataGrid/Models/DataGrid.StyleModel';
import { DataGridViewModel } from '@/Components/Shared/DataGrid/Models/DataGrid.ViewModel';
import { DataGridDataModel } from '@/Components/Shared/DataGrid/Models/DataGrid.DataModel';
import { DataGridColumn } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Column';
import { DataGridRow } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Row';
import { ApplicationState } from '@/Store/ApplicationStore';

export interface InitializeDataGridPayload {
  DataGridId : string
  DataModel : DataGridDataModel<DataGridColumn, DataGridRow>
  StyleModel : DataGridStyleModel
  ViewModel : DataGridViewModel
}

export function InitializeDataGrid (state : ApplicationState, payload : InitializeDataGridPayload) {
  const dataGrid = {
    Id: payload.DataGridId,
    SortButtons: [],
    DataModel: payload.DataModel,
    StyleModel: payload.StyleModel,
    ViewModel: payload.ViewModel
  };
  state.DataGridsState.DataGrids.push(dataGrid);
}
