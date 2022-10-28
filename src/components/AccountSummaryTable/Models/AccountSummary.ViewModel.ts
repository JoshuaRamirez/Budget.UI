import { NextId } from '@/Core/NextId';

export class AccountSummaryViewModel {
  public DataGridId : string | undefined

  constructor () {
    this.DataGridId = NextId();
  }
}
