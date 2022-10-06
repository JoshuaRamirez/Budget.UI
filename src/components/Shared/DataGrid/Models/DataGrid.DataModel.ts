import { DataGridColumn } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Column';
import { DataGridRow } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Row';

export interface DataGridDataModel<TColumn extends DataGridColumn, TRow extends DataGridRow> {
  Columns : Array<TColumn>
  Rows : Array<TRow>
}
