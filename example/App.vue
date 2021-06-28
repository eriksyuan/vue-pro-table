<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ProTable :dataSource="dataSource" :columns="columns">
    </ProTable>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ProTable from "../src/index";
export default {
  name: "App",
  components: {
    HelloWorld,
    ProTable,
  },
  data() {
    return {
      dataSource: [
        {
          title: "kgashdgaskdklasdj;asudjusydfhgfdsgfjhsgyfsdyfghsdfghj",
          age: 12,
        },
      ],
      columns: [
        {
          title: () => <span>11</span>,
          tooltip: "年后",
          ellipsis: true,
          copyable: true,
          dataIndex: "title",
        },
        {
          title: () => "年龄",
          dataIndex: "age",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
