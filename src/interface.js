import PropTypes from "ant-design-vue/es/_util/vue-types/index";
import { ColumnProps as defaultColumnProps } from "ant-design-vue/es/table/interface";
import { mergeProps } from "ant-design-vue/es/_util/props-util";
export const ColumnProps = mergeProps(defaultColumnProps, {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  tooltip: PropTypes.string,
  ellipsis: PropTypes.bool,
  copyable: PropTypes.bool,
  valueType: PropTypes.string,
  valueEnum: PropTypes.object,
  order: PropTypes.number,
  fieldProps: PropTypes.object,
  formItemProps: PropTypes.object,
  renderFormItem: PropTypes.func,
  search: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  hideInSearch: PropTypes.bool,
  hideInTable: PropTypes.bool,
});


export const TableProps = {
  columns: PropTypes.arrayOf(PropTypes.shape(ColumnProps)),
  request: PropTypes.func,
  params: PropTypes.object,
  postData: PropTypes.func,
  defaultData: PropTypes.array,
  search: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  dateFormatter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  beforeSearchSubmit: PropTypes.func,
  columnEmptyText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  debounceTime: PropTypes.number,
  onLoad: PropTypes.func,
  onSizeChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  onLoadingChange: PropTypes.func,
  onRequestError: PropTypes.func,
};
