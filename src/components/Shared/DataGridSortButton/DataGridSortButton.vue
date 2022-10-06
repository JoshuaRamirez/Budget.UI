<template>
  <a :class=[styleModel.SortCssActiveStatusClass] @click=onSortClicked()>
    <i :class="[styleModel.SortCssSortDirectionIconClass]" class="bi px-1"></i>
  </a>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import { ActionTypes } from '@/Store/Core/ActionTypes';
import {
  DataGridSortButtonStyleModel
} from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.StyleModel';
import { DataGridSortButtonViewModel } from '@/Components/Shared/DataGridSortButton/Models/DataGridSortButton.ViewModel';
import { DataGridSortButtonCreatedPayload } from '@/Store/Actions/DataGridSortButtonCreated';
import { DataGridSortButtonClickedPayload } from '@/Store/Actions/DataGridSortButtonClicked';

const props = defineProps<{ DataGridId : string, DataGridSortButtonId : string }>();
const store = useStore();
// let viewModel : DataGridSortButtonViewModel
let styleModel : DataGridSortButtonStyleModel;
const onCreated = () => {
  const DataGridId = props.DataGridId;
  const DataGridSortButtonId = props.DataGridSortButtonId;
  const ViewModel = new DataGridSortButtonViewModel(props.DataGridSortButtonId);
  const StyleModel = new DataGridSortButtonStyleModel(ViewModel);
  const actionPayload : DataGridSortButtonCreatedPayload = {
    DataGridId, DataGridSortButtonId, ViewModel, StyleModel
  };
  store.dispatch(ActionTypes.DataGridSortButtonCreated, actionPayload);
  const dataGridSortButton = store.getters.GetDataGridSortButton(DataGridId, DataGridSortButtonId);
  styleModel = dataGridSortButton.StyleModel;
  // viewModel = dataGridSortButton.ViewModel
};
const onSortClicked = () => {
  const DataGridId = props.DataGridId;
  const DataGridSortButtonId = props.DataGridSortButtonId;
  const payload : DataGridSortButtonClickedPayload = { DataGridId, DataGridSortButtonId };
  store.dispatch(ActionTypes.DataGridSortButtonClicked, payload);
};
onCreated();
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
