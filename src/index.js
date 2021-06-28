import { Table, Tooltip, Space, Icon } from "ant-design-vue";

import { TableProps } from "./interface";
import {
  mergeProps,
  initDefaultProps,
} from "ant-design-vue/es/_util/props-util";
import { isFunc } from "./utils";

const ProTable = {
  name: "ProTable",
  data() {
    return {
      localDataSource: [],
      localColumns: [],
      localLoading: false,
    };
  },
  props: mergeProps(
    Table.props,
    initDefaultProps(TableProps, {
      debounceTime: 10,
      columnEmptyText: "-",
    })
  ),
  watch: {
    columns: {
      handler(v) {
        this.localColumns = this.generaterColumns(v);
      },
      immediate: true,
    },
    dataSource: {
      handler(v) {
        this.localDataSource = v;
      },
      immediate: true,
    },
  },
  methods: {
    copyText() {
      alert("copy");
    },
    generaterColumns(columns) {
      return columns.map((c) => {
        const obj = { ...c, scopedSlots: c.scopedSlots || {} };

        if (c.tooltip) {
          obj.title = () => (
            <Space size={6}>
              {isFunc(c.title) ? c.title() : c.title}
              <Tooltip>
                <template slot="title">{c.tooltip}</template>
                <Icon type="question-circle" />
              </Tooltip>
            </Space>
          );
        }
        if (c.ellipsis) {
          obj.customRow = mergeProps(c.customRow, {
            class: ["pro-table-column-ellipsis"],
          });
        }
        obj.customRender = (text, record, index) => {
          return (
            <Space>
              <span >
                {c.customRender ? c.customRender(text, record, index) : text}
              </span>
              <span onClick={this.copyText} style={{ cursor: "pointer" }}>
                {c.copyable && <Icon type="copy"></Icon>}
              </span>
            </Space>
          );
        };

        return obj;
      });
    },
  },
  render() {
    const scopedSlots = Object.assign({}, this.$scopedSlots);
    const props = {};
    Object.keys(this.$props).forEach((prop) => {
      const localKey = `local${prop.slice(0, 1).toUpperCase()}${prop.slice(1)}`;
      if (this[localKey]) {
        props[prop] = this[localKey];
      } else {
        props[prop] = this.$props[prop];
      }
    });

    return (
      <Table {...{ props, scopedSlots }}>
        {Object.keys(this.$slots).map((name) => (
          <template slot={name}>{this.$slots[name]}</template>
        ))}
      </Table>
    );
  },
};

console.log(Table);

export default ProTable;
