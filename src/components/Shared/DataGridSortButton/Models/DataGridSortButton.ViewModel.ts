import { SortDirection } from '@/Core/SortDirection';

export class DataGridSortButtonViewModel {
  public Id : string
  public CurrentSortDirection : SortDirection | null
  public IsEnabled : boolean

  constructor (id : string) {
    this.Id = id;
    this.CurrentSortDirection = null;
    this.IsEnabled = false;
  }

  public get IsAscending () : boolean {
    return this.CurrentSortDirection === SortDirection.Ascending;
  }

  public get IsDescending () : boolean {
    return this.CurrentSortDirection === SortDirection.Descending;
  }

  public ToggleSortIndicator () {
    if (this.CurrentSortDirection == null) {
      this.CurrentSortDirection = SortDirection.Ascending;
      this.IsEnabled = true;
    } else if (this.IsAscending) {
      this.CurrentSortDirection = SortDirection.Descending;
    } else if (this.IsDescending) {
      this.CurrentSortDirection = null;
      this.IsEnabled = false;
    }
  }
}
