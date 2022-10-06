import { DataGridRow } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Row';

export class AccountSummaryDataRow implements DataGridRow {
  public Id : string
  public RowId : string
  public UserId : string
  public FirstName : string
  public LastName : string
  public Exchanges : number
  public TotalFunds : number
  public ActiveBotCount : number

  constructor (data : AccountSummaryDataRow) {
    if (!data.RowId.length) {
      this.RowId = Date.now().toString();
    } else {
      this.RowId = data.RowId;
    }
    this.Id = data.Id;
    this.UserId = data.UserId;
    this.FirstName = data.FirstName;
    this.LastName = data.LastName;
    this.Exchanges = data.Exchanges;
    this.TotalFunds = data.TotalFunds;
    this.ActiveBotCount = data.ActiveBotCount;
  }
}
