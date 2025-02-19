<template>
  <div class="table-wrapper">
    <table :class="tableClass">
      <thead v-if="!hideHeader">
        <tr>
          <th v-for="header in headers" :key="header.id" :class="headerClass">
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="row.id || rowIndex">
          <td v-for="header in headers" :key="header.id" :class="cellClass">
            {{ row[header.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

interface TableHeader {
  id: string;
  label: string;
  key: string;
}

interface TableRow {
  [key: string]: any;
}

withDefaults(defineProps<{
  headers: TableHeader[];
  rows: TableRow[];
  tableClass?: string;
  headerClass?: string;
  cellClass?: string;
  hideHeader?: boolean;
}>(), {
  tableClass: 'table',
  headerClass: 'table-header',
  cellClass: 'table-cell',
  hideHeader: false // Default to show the header
});
</script>

<style scoped>
.table-wrapper {
  overflow-x: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
}

/* Using CSS variables for theming */
:root {
  --table-border-color: rgba(var(--foreground-rgb), 0.1);
  --table-header-bg: rgba(var(--background-end-rgb), 0.5);
  --table-header-text: rgb(var(--foreground-rgb));
  --table-cell-bg: rgba(var(--background-start-rgb), 1);
  --table-cell-text: rgb(var(--foreground-rgb));
}

@media (prefers-color-scheme: dark) {
  :root {
    --table-border-color: rgba(var(--dark-foreground-rgb), 0.1);
    --table-header-bg: rgba(var(--dark-background-end-rgb), 0.5);
    --table-header-text: rgb(var(--dark-foreground-rgb));
    --table-cell-bg: rgba(var(--dark-background-start-rgb), 1);
    --table-cell-text: rgb(var(--dark-foreground-rgb));
  }
}

/* Basic table styling */
.table {
  border: 1px solid var(--table-border-color);
}

.table-header {
  background-color: var(--table-header-bg);
  color: var(--table-header-text);
  font-weight: bold;
  padding: 8px;
  text-align: left;
}

.table-cell {
  background-color: var(--table-cell-bg);
  color: var(--table-cell-text);
  border: 1px solid var(--table-border-color);
  padding: 8px;
  vertical-align: top;
}
</style>