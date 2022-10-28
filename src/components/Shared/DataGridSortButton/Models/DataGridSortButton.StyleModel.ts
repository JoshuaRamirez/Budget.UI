import { DataGridSortButtonViewModel } from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.ViewModel';

export class DataGridSortButtonStyleModel {
  private _viewModel : DataGridSortButtonViewModel

  constructor (viewModel : DataGridSortButtonViewModel) {
    this._viewModel = viewModel;
  }

  public get SortCssSortDirectionIconClass () : string {
    if (this._viewModel.CurrentSortDirection == null) {
      return 'bi-sort-up-alt';
    } else if (this._viewModel.IsAscending) {
      return 'bi-sort-alpha-up';
    } else if (this._viewModel.IsDescending) {
      return 'bi-sort-alpha-down-alt';
    } else {
      throw new Error('Invalid State');
    }
  }

  public get SortCssActiveStatusClass () : string {
    if (this._viewModel.IsEnabled) {
      return 'link-primary';
    } else {
      return 'link-secondary';
    }
  }
}
