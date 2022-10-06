import { AccountSummaryData } from '@/Components/AccountSummaryTable/Shapes/AccountSummaryData';

const userData = new AccountSummaryData();
userData.Columns = [
  { ColumnId: 'UserId', ColumnName: '#' },
  { ColumnId: 'FirstName', ColumnName: 'First Name' },
  { ColumnId: 'LastName', ColumnName: 'Last Name' },
  { ColumnId: 'Exchanges', ColumnName: 'Exchanges' },
  { ColumnId: 'TotalFunds', ColumnName: 'Total Funds' },
  { ColumnId: 'ActiveBotCount', ColumnName: 'Active Bots' }
];
userData.Rows = [
  { RowId: Date.now().toString(), UserId: '100', Id: '1', FirstName: 'Kendrick', LastName: 'Monday', Exchanges: 1, TotalFunds: 1234.56, ActiveBotCount: 0 },
  { RowId: Date.now().toString(), UserId: '101', Id: '2', FirstName: 'Penelope', LastName: 'Good', Exchanges: 3, TotalFunds: 7890.12, ActiveBotCount: 0 },
  { RowId: Date.now().toString(), UserId: '102', Id: '3', FirstName: 'Brianna', LastName: 'Seymour', Exchanges: 4, TotalFunds: 3456.78, ActiveBotCount: 0 },
  { RowId: Date.now().toString(), UserId: '103', Id: '4', FirstName: 'Grant', LastName: 'Brant', Exchanges: 2, TotalFunds: 9012.34, ActiveBotCount: 0 },
  { RowId: Date.now().toString(), UserId: '104', Id: '5', FirstName: 'Jonah', LastName: 'Mercer', Exchanges: 1, TotalFunds: 5678.90, ActiveBotCount: 0 }
];
export default userData;
