<template>
  <div class="overview-container">
    <div class="header">
      <span class="title">自动化设备&自动化部署概览</span>
      <ul class="type">
        <li><i class="i-deployed"></i><span>Deployed</span></li>
        <li><i class="i-not-deployed"></i><span>Not Deployed</span></li>
        <li><i class="i-not-involving"></i><span>Not Involving</span></li>
      </ul>
    </div>
    <div class="body">
      <fix-column-table :data="overViewData"></fix-column-table>
    </div>
  </div>
</template>
<script>
  import FixColumnTable from './fix-column-table.vue';

  export default {
    name: 'overview',
    components: {FixColumnTable},
    data () {
      return {
        overViewData: [12, 3, 4, 45, 5, 5, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
      }
    }
  }
</script>
<style lang="less" scoped>
  .overview-container {
    display: inline-block;
    min-width: 1246px;
    max-height: 500px;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title{
        color: #636669;
        font-size: 16px;
        font-weight: 900;
      }
      .type {
        display: inline-flex;
        li {
          list-style: none;
          display: flex;
          align-items: center;
          margin-left: 15px;
          i {
            width: 16px;
            height: 16px;
            background-size: 16px;
            margin-right: 8px;
            &.i-deployed {
              background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICAgIDxkZWZzPiAgICAgICAgPGVsbGlwc2UgaWQ9ImEiIGN4PSIxMS45NDkiIGN5PSIxMiIgcng9IjExLjk0OSIgcnk9IjEyIi8+ICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI1My4yMTklIiB4Mj0iNTMuMjE5JSIgeTE9Ijg2LjExNCUiIHkyPSI5LjYwNCUiPiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyQkNCQkEiIHN0b3Atb3BhY2l0eT0iMCIvPiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzI0OUY5MiIvPiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4gICAgPC9kZWZzPiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4gICAgICAgIDwvbWFzaz4gICAgICAgIDx1c2UgZmlsbD0iIzJCQ0JCQSIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNiKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNS42IDExLjU1djEyLjU1M2w4IDMuMDEyIDUtMy41MTVWNy41MzJsLTguNSA4LjUzNnoiIG1hc2s9InVybCgjYykiLz4gICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiLz4gICAgICAgIDxnIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTYuNSAxMi4zMDJsMy41IDMuNTE1IDcuNzUtNy43ODMiLz4gICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTdFN0U3IiBkPSJNMTguMzMgNy4yMzhhMS4wMDggMS4wMDggMCAwIDEgLjEyNyAxLjUyOGwtNy43NSA3Ljc4M2EuOTk3Ljk5NyAwIDAgMS0xLjQxNCAwbC0zLjUtMy41MTVhMS4wMDggMS4wMDggMCAwIDEtLjA2OC0xLjM0NWwzLjM1MyAzLjM1Mi0uMDEuMDExLjcyNC43MjQgOC41MzktOC41Mzh6Ii8+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=);
            }
            &.i-not-deployed {
              background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICAgIDxkZWZzPiAgICAgICAgPGNpcmNsZSBpZD0iYSIgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIi8+ICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI0Ni42MDMlIiB4Mj0iNTAlIiB5MT0iMTA1LjM1MSUiIHkyPSIwJSI+ICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZDNUM2NSIgc3RvcC1vcGFjaXR5PSIwIi8+ICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRDM1MTU4Ii8+ICAgICAgICA8L2xpbmVhckdyYWRpZW50PiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8bWFzayBpZD0iYyIgZmlsbD0iI2ZmZiI+ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPC9tYXNrPiAgICAgICAgPHVzZSBmaWxsPSIjRkM1QzY1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNhIi8+ICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2IpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik03LjUgOC41bDQuNzA2IDMuNUwxNi40IDl2MTYuNUg3LjV6IiBtYXNrPSJ1cmwoI2MpIi8+ICAgICAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcgNykiPiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjEyIiB4PSIzLjk1IiB5PSItMS4wNSIgZmlsbD0iI0ZGRiIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDQuOTUgNC45NSkiLz4gICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTdFN0U3IiBkPSJNLjcgOS4xODVMOS4xODUuN2ExIDEgMCAwIDEgMCAxLjQxNGwtNy4wNyA3LjA3MWExIDEgMCAwIDEtMS40MTUgMHoiLz4gICAgICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxMiIgeD0iNCIgeT0iLTEiIGZpbGw9IiNGRkYiIHJ4PSIxIiB0cmFuc2Zvcm09InNjYWxlKC0xIDEpIHJvdGF0ZSg0NSAwIC03LjA3MSkiLz4gICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTdFN0U3IiBkPSJNOS4xNzggOS4yODVhMSAxIDAgMCAxLTEuNDE0IDBMLjY5MyAyLjIxNUExIDEgMCAwIDEgLjY5My44bDguNDg1IDguNDg1eiIvPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
            }
            &.i-not-involving {
              width: 30px;
              &:before {
                content: '”—”';
              }
            }
          }
          span {
            color: #636669;
          }
        }
      }
    }

  }
</style>