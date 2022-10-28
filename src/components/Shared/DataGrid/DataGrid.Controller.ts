import { DataGridViewModel } from '@/Components/Shared/DataGrid/Models/DataGrid.ViewModel';
import { DataGridStyleModel } from '@/Components/Shared/DataGrid/Models/DataGrid.StyleModel';
import { Store } from 'vuex';
import { DataGridCreatedPayload } from '@/Store/Actions/DataGridCreated';
import { ActionTypes } from '@/Store/Core/ActionTypes';
import { DataGridDataModel } from '@/Components/Shared/DataGrid/Models/DataGrid.DataModel';
import { DataGridColumn } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Column';
import { DataGridRow } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Row';
import DataGridProps from '@/Components/Shared/DataGrid/DataGrid.vue';
import { ApplicationState } from '@/Store/ApplicationStore';

type Props = InstanceType<typeof DataGridProps>

export class DataGridController {
  public ViewModel : DataGridViewModel
  public StyleModel : DataGridStyleModel
  public DataModel : DataGridDataModel<DataGridColumn, DataGridRow>
  private _props : Readonly<Props>
  private _store : Store<ApplicationState>

  constructor (props : Readonly<Props>, store : Store<ApplicationState>) {
    this._props = props;
    this._store = store;
    const dataGridId = this._props.DataGridId;
    this.ViewModel = new DataGridViewModel(dataGridId);
    this.StyleModel = new DataGridStyleModel();
    this.DataModel = this._props.DataModel;
    this.dispatchDataGridCreated();
    const boundInstance = this._store.getters.GetDataGrid(dataGridId);
    this.ViewModel = boundInstance.ViewModel;
    this.StyleModel = boundInstance.StyleModel;
    this.DataModel = boundInstance.DataModel;
  }

  private dispatchDataGridCreated () {
    const dataGridId = this.ViewModel.DataGridId;
    const dataModel = this.DataModel;
    const viewModel = this.ViewModel;
    const styleModel = this.StyleModel;
    const actionPayload : DataGridCreatedPayload = {
      DataGridId: dataGridId,
      DataModel: dataModel,
      ViewModel: viewModel,
      StyleModel: styleModel
    };
    this._store.dispatch(ActionTypes.DataGridCreated, actionPayload);
  }
}
