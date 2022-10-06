import { AccountSummaryDataColumn } from '@/Components/AccountSummaryTable/Shapes/AccountSummaryDataColumn';
import { AccountSummaryDataRow } from '@/Components/AccountSummaryTable/Shapes/AccountSummaryDataRow';
import { DataGridDataModel } from '@/Components/Shared/DataGrid/Models/DataGrid.DataModel';

export class AccountSummaryData implements DataGridDataModel<AccountSummaryDataColumn, AccountSummaryDataRow> {
  public Columns : Array<AccountSummaryDataColumn>
  public Rows : Array<AccountSummaryDataRow>

  constructor () {
    this.Columns = new Array<AccountSummaryDataColumn>();
    this.Rows = new Array<AccountSummaryDataRow>();
  }
}
