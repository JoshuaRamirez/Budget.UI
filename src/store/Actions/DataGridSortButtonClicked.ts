import { MutationTypes } from '@/Store/Core/MutationTypes';
import { ActionContext } from 'vuex';
import { ApplicationState } from '@/Store/ApplicationStore';

export interface DataGridSortButtonClickedPayload {
  DataGridId : string
  DataGridSortButtonId : string
}

export const DataGridSortButtonClicked = (actionContext : ActionContext<ApplicationState, ApplicationState>, payload : DataGridSortButtonClickedPayload) => {
  actionContext.commit(MutationTypes.ToggleDataGridSortButtonIndicator, payload);
};
