import { DataGridColumn } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Column';
import { DataGridRow } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Row';
import { SortDirection } from '@/Core/SortDirection';

export class DataGridDataModel<TColumn extends DataGridColumn, TRow extends DataGridRow> {
  public Columns : Array<TColumn>
  public Rows : Array<TRow>

  constructor () {
    this.Columns = new Array<TColumn>();
    this.Rows = new Array<TRow>();
  }

  public Sort (columnName : string, sortDirection : SortDirection) {
    this.Rows.sort((obj1, obj2) => {
      if ((obj1 as any)[columnName] > (obj2 as any)[columnName]) {
        if (sortDirection === SortDirection.Ascending) {
          return 1;
        }
        if (sortDirection === SortDirection.Descending) {
          return -1;
        }
      }
      if ((obj1 as any)[columnName] < (obj2 as any)[columnName]) {
        if (sortDirection === SortDirection.Ascending) {
          return -1;
        }
        if (sortDirection === SortDirection.Descending) {
          return 1;
        }
      }
      return 0;
    });
  }
}
