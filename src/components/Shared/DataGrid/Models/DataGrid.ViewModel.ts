import { NextId } from '@/Core/NextId';

export class DataGridViewModel {
  public readonly DataGridId : string
  public readonly NextId = NextId

  constructor (dataGridId : string) {
    this.DataGridId = dataGridId;
  }
}
