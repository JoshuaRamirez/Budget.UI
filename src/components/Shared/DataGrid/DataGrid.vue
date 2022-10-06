<template>
  <table class="table">
    <thead>
    <tr>
      <th v-for="column in dataModel.Columns" :key="column.ColumnId" scope="col">
        {{ column.ColumnName }}
        <DataGridSortButton :DataGridId="dataGridId" :DataGridSortButtonId="NextId()"/>
      </th>
    </tr>
    </thead>
    <tbody class="table-group-divider">
    <tr v-for="row in dataModel.Rows" :key="row.RowId">
      <td v-for="column in dataModel.Columns" :key="column.ColumnId">
        {{ row[column.ColumnId] }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import DataGridSortButton from '@/Components/Shared/DataGridSortButton/DataGridSortButton.vue';
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import { DataGridViewModel } from '@/Components/Shared/DataGrid/Models/DataGrid.ViewModel';
import { DataGridCreatedPayload } from '@/Store/Actions/DataGridCreated';
import { ActionTypes } from '@/Store/Core/ActionTypes';
import { DataGridDataModel } from '@/Components/Shared/DataGrid/Models/DataGrid.DataModel';
import { DataGridStyleModel } from '@/Components/Shared/DataGrid/Models/DataGrid.StyleModel';
import { DataGridColumn } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Column';
import { DataGridRow } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Row';
import { NextId } from '@/Core/NextId';

const props = defineProps<{ DataGridId : string, DataModel : DataGridDataModel<DataGridColumn, DataGridRow> }>();
const store = useStore();
let dataGridId : string;
let dataModel : DataGridDataModel<DataGridColumn, DataGridRow>;
// let styleModel : DataGridStyleModel
// let viewModel : DataGridViewModel
const onCreated = () => {
  const DataGridId = props.DataGridId;
  const DataModel = props.DataModel;
  const ViewModel = new DataGridViewModel();
  const StyleModel = new DataGridStyleModel();
  const actionPayload : DataGridCreatedPayload = { DataGridId, DataModel, ViewModel, StyleModel };
  store.dispatch(ActionTypes.DataGridCreated, actionPayload);
  const dataGrid = store.getters.GetDataGrid(DataGridId);
  dataModel = dataGrid.DataModel;
  // styleModel = dataGrid.StyleModel
  // viewModel = dataGrid.ViewModel
  dataGridId = DataGridId;
};
onCreated();
</script>
