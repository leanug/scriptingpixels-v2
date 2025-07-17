// /src/stores/filter-store.js
export let currentFilter = 'all';

export const setFilter = (newFilter: string) => {
  currentFilter = newFilter;
  document.dispatchEvent(new CustomEvent('filterchange', { detail: newFilter }));
};
