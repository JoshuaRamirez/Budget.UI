<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in controller.DataModel.Columns" :key="column.ColumnId" class="columnHeader" scope="col">
          {{ column.ColumnName }}
          <DataGridSortButton :DataGridId="controller.ViewModel.DataGridId" :DataGridSortButtonId="column.ColumnId"/>
        </th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="row in controller.DataModel.Rows" :key="row.RowId">
        <td v-for="column in controller.DataModel.Columns" :key="column.ColumnId">
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
import { DataGridDataModel } from '@/Components/Shared/DataGrid/Models/DataGrid.DataModel';
import { DataGridColumn } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Column';
import { DataGridRow } from '@/Components/Shared/DataGrid/Shapes/DataGrid.Row';
import { DataGridController } from '@/Components/Shared/DataGrid/DataGrid.Controller';

export interface DataGridProps {
  DataGridId : string
  DataModel : DataGridDataModel<DataGridColumn, DataGridRow>
}

const props = defineProps<DataGridProps>();
const store = useStore();
const controller = new DataGridController(props, store);
</script>

<style>
.columnHeader {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
