<template v-if="controller.ViewModel.DataGridId">
  <DataGrid :DataGridId="controller.ViewModel.DataGridId" :DataModel="controller.DataModel"/>
</template>

<script lang="ts" setup>
import DataGrid from '@/Components/Shared/DataGrid/DataGrid.vue';
import { AccountSummaryTableController } from '@/Components/AccountSummaryTable/AccountSummaryTable.Controller';

const controller = new AccountSummaryTableController();
</script>

<style scoped>

</style>
