import T from "ant-design-vue/es/table/Table";
import columnsProps from "./columnsProps";
export default {
  components: {
    columnsProps,
  },
  data() {
    return {
      localDataSource: [],
      localColumns: [],
      localLoading: false,
    };
  },
  props: Object.assign(
    T.props,
    {},
    {
      request: Function,
      params: Object,
      postData: Function,
      defaultData: Array,
      search: Boolean | Object,
      dateFormatter: String | Boolean,
      beforeSearchSubmit: Function,
      columnEmptyText: {
        type: String | Boolean,
        default: () => "-",
      },
      debounceTime: {
        type: Number,
        default: () => 10,
      },
      onLoad: Function,
      onSizeChange: Function,
      onSubmit: Function,
      onReset: Function,
      onLoadingChange: Function,
      onRequestError: Function,
    }
  ),
  render() {
    return (
      <span>
        
      </span>
    );
  },
};
