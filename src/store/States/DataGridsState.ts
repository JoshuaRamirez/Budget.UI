import { DataGridSortButtonStyleModel } from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.StyleModel';
import { DataGridSortButtonViewModel } from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.ViewModel';
import { DataGridViewModel } from '@/Components/Shared/DataGrid/Models/DataGrid.ViewModel';
import { DataGridStyleModel } from '@/Components/Shared/DataGrid/Models/DataGrid.StyleModel';
import { DataGridDataModel } from '@/Components/Shared/DataGrid/Models/DataGrid.DataModel';
import { DataGridColumn } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Column';
import { DataGridRow } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Row';

export interface DataGridsState {
  DataGrids : {
    Id : string
    SortButtons : {
      Id : string,
      StyleModel : DataGridSortButtonStyleModel,
      ViewModel : DataGridSortButtonViewModel
    }[],
    DataModel? : DataGridDataModel<DataGridColumn, DataGridRow>
    ViewModel? : DataGridViewModel
    StyleModel? : DataGridStyleModel
  }[]
}

export function CreateDefaultDataGridsState () : DataGridsState {
  return {
    DataGrids: []
  };
}
