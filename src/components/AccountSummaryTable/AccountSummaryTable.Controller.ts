import SampleUserData from '@/Api/SampleAccountSummaryData';
import { AccountSummaryData } from '@/Components/AccountSummaryTable/Shapes/AccountSummaryData';
import { AccountSummaryViewModel } from '@/Components/AccountSummaryTable/Models/AccountSummary.ViewModel';

export class AccountSummaryTableController {
  public DataModel : AccountSummaryData
  public ViewModel : AccountSummaryViewModel

  constructor () {
    this.DataModel = SampleUserData;
    this.ViewModel = new AccountSummaryViewModel();
  }
}
