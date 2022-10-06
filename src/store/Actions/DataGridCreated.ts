import { MutationTypes } from '@/Store/Core/MutationTypes';
import { DataGridStyleModel } from '@/Components/Shared/DataGrid/Models/DataGrid.StyleModel';
import { DataGridViewModel } from '@/Components/Shared/DataGrid/Models/DataGrid.ViewModel';
import { ActionContext } from 'vuex';
import { ApplicationState } from '@/Store/States/ApplicationState';
import { DataGridDataModel } from '@/Components/Shared/DataGrid/Models/DataGrid.DataModel';
import { DataGridColumn } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Column';
import { DataGridRow } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Row';
import { InitializeDataGridPayload } from '@/Store/Mutations/InitializeDataGrid';

export interface DataGridCreatedPayload {
  DataGridId : string
  DataModel : DataGridDataModel<DataGridColumn, DataGridRow>
  StyleModel : DataGridStyleModel
  ViewModel : DataGridViewModel
}

export const DataGridCreated = (actionContext : ActionContext<ApplicationState, ApplicationState>, payload : DataGridCreatedPayload) => {
  const mutationPayload : InitializeDataGridPayload = payload;
  actionContext.commit(MutationTypes.InitializeDataGrid, mutationPayload);
};
