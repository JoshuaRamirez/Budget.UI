import { GetDataGridSortButton } from '@/Store/Getters/GetDataGridSortButton';
import { ApplicationState } from '@/Store/ApplicationStore';

export interface ToggleDataGridSortButtonIndicatorPayload {
  DataGridId : string,
  DataGridSortButtonId : string
}

export function ToggleDataGridSortButtonIndicator (state : ApplicationState, payload : ToggleDataGridSortButtonIndicatorPayload) {
  const sortButton = GetDataGridSortButton(state)(payload.DataGridId, payload.DataGridSortButtonId);
  sortButton?.ViewModel.ToggleSortIndicator();
}
