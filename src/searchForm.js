export default {
  props: {
    searchText: {
      type: String,
      default: () => "查询",
    },
    resetText: {
      type: String,
      default: () => "重置",
    },
  },
};
