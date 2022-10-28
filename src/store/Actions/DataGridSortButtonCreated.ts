import { MutationTypes } from '@/Store/Core/MutationTypes';
import { ActionContext } from 'vuex';
import { DataGridSortButtonStyleModel } from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.StyleModel';
import { DataGridSortButtonViewModel } from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.ViewModel';
import { InitializeDataGridSortButtonPayload } from '@/Store/Mutations/InitializeDataGridSortButton';
import { ApplicationState } from '@/Store/ApplicationStore';

export interface DataGridSortButtonCreatedPayload {
  DataGridId : string
  DataGridSortButtonId : string
  StyleModel : DataGridSortButtonStyleModel
  ViewModel : DataGridSortButtonViewModel
}

export const DataGridSortButtonCreated = (actionContext : ActionContext<ApplicationState, ApplicationState>, actionPayload : DataGridSortButtonCreatedPayload) => {
  const mutationPayload : InitializeDataGridSortButtonPayload = actionPayload;
  actionContext.commit(MutationTypes.InitializeDataGridSortButton, mutationPayload);
};
