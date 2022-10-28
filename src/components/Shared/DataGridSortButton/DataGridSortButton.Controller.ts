import { Store } from 'vuex';
import { DataGridSortButtonViewModel } from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.ViewModel';
import { DataGridSortButtonStyleModel } from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.StyleModel';
import { DataGridSortButtonCreatedPayload } from '@/Store/Actions/DataGridSortButtonCreated';
import { ActionTypes } from '@/Store/Core/ActionTypes';
import { DataGridSortButtonClickedPayload } from '@/Store/Actions/DataGridSortButtonClicked';
import DataGridSortButtonProps from '@/Components/Shared/DataGridSortButton/DataGridSortButton.vue';
import { ApplicationState } from '@/Store/ApplicationStore';

type Props = InstanceType<typeof DataGridSortButtonProps>

export class DataGridSortButtonController {
  public readonly ViewModel : DataGridSortButtonViewModel
  public readonly StyleModel : DataGridSortButtonStyleModel
  private readonly _props : Readonly<Props>
  private readonly _store : Store<ApplicationState>
  private readonly _dataGridId : string

  constructor (props : Readonly<Props>, store : Store<ApplicationState>) {
    this._props = props;
    this._store = store;
    const dataGridId = props.DataGridId;
    this._dataGridId = dataGridId;
    const dataGridSortButtonId = this._props.DataGridSortButtonId;
    this.ViewModel = new DataGridSortButtonViewModel(dataGridSortButtonId);
    this.StyleModel = new DataGridSortButtonStyleModel(this.ViewModel);
    this.dispatchDataGridSortButtonCreated();
    const boundInstance = this._store.getters.GetDataGridSortButton(dataGridId, dataGridSortButtonId);
    this.ViewModel = boundInstance.ViewModel;
    this.StyleModel = boundInstance.StyleModel;
  }

  public OnSortClicked () {
    this.dispatchDataGridSortButtonClicked();
  }

  private dispatchDataGridSortButtonClicked () {
    const dataGridId = this._props.DataGridId;
    const dataGridSortButtonId = this._props.DataGridSortButtonId;
    const payload : DataGridSortButtonClickedPayload = {
      DataGridId: dataGridId,
      DataGridSortButtonId: dataGridSortButtonId
    };
    this._store.dispatch(ActionTypes.DataGridSortButtonClicked, payload);
  }

  private dispatchDataGridSortButtonCreated () {
    const dataGridId = this._dataGridId;
    const dataGridSortButtonId = this.ViewModel.Id;
    const viewModel = this.ViewModel;
    const styleModel = this.StyleModel;
    const actionPayload : DataGridSortButtonCreatedPayload = {
      DataGridId: dataGridId,
      DataGridSortButtonId: dataGridSortButtonId,
      ViewModel: viewModel,
      StyleModel: styleModel
    };
    this._store.dispatch(ActionTypes.DataGridSortButtonCreated, actionPayload);
  }
}
