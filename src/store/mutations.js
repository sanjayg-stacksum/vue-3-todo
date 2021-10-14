export const MutationType = {
  CreateItem: "CREATE_ITEM",
  SetItems: "SET_ITEMS",
  CompleteItem: "COMPLETE_ITEM",
  SetLoading: "SET_LOADING",
};

export const mutations = {
  [MutationType.CreateItem](state, item) {
    state.items.unshift(item);
  },
  [MutationType.SetItems](state, items) {
    state.items = items;
  },
  [MutationType.CompleteItem](state, newItem) {
    const item = state.items.findIndex((s) => s.id === newItem.id);
    if (item === -1) return;
    state.items[item] = { ...state.items[item], ...newItem };
  },
  [MutationType.SetLoading](state, value) {
    state.loading = value;
  },
};
