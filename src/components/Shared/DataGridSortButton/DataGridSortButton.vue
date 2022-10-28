<template>
  <a :class=[controller.StyleModel.SortCssActiveStatusClass] @click=controller.OnSortClicked()>
    <i :class="[controller.StyleModel.SortCssSortDirectionIconClass]" class="bi px-1"></i>
  </a>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import { DataGridSortButtonController } from '@/Components/Shared/DataGridSortButton/DataGridSortButton.Controller';
import { ApplicationState } from '@/Store/ApplicationStore';

export interface DataGridSortButtonProps {
  DataGridId : string;
  DataGridSortButtonId : string
}

const props = defineProps<DataGridSortButtonProps>();
const store = useStore<ApplicationState>();
const controller = new DataGridSortButtonController(props, store);
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
