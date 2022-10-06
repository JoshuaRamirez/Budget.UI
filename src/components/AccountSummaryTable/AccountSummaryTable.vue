<template v-if="dataGridId">
  <DataGrid :DataGridId="dataGridId" :DataModel="dataModel"/>
</template>

<script lang="ts" setup>
import DataGrid from '@/Components/Shared/DataGrid/DataGrid.vue';
import SampleUserData from '@/Api/SampleAccountSummaryData';
import { NextId } from '@/Core/NextId';

const dataGridId = NextId();
const dataModel = SampleUserData;
</script>

<style scoped>

</style>
