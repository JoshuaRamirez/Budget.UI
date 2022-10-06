import { AccountSummaryDataRow } from '@/Components/AccountSummaryTable/Shapes/AccountSummaryDataRow';
import { DataGridColumn } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Column';

export class AccountSummaryDataColumn implements DataGridColumn {
  public ColumnId : keyof AccountSummaryDataRow
  public ColumnName : string

  constructor (data : AccountSummaryDataColumn) {
    this.ColumnId = data.ColumnId;
    this.ColumnName = data.ColumnName;
  }
}
