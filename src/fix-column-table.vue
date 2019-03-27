<template>
  <div class="fix-column-table">
    <div class="table-header">
      <table ref="tableHeader">
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th colspan="4">Wireless Network</th>
          <th colspan="4">Core Network - CS</th>
          <th colspan="4">Core Network - PS</th>
          <th colspan="4">Transmission Network</th>
          <th colspan="4">Data Communication</th>
          <th colspan="4">Software(VAS)</th>
        </tr>
        <tr>
          <th>Vendor</th>
          <th>NE Quantity</th>
          <th>Alarm Probe</th>
          <th>MCP Probe</th>
          <th>PM Probe</th>
          <th>NE Quantity</th>
          <th>Alarm Probe</th>
          <th>MCP Probe</th>
          <th>PM Probe</th>
          <th>NE Quantity</th>
          <th>Alarm Probe</th>
          <th>MCP Probe</th>
          <th>PM Probe</th>
          <th>NE Quantity</th>
          <th>Alarm Probe</th>
          <th>MCP Probe</th>
          <th>PM Probe</th>
          <th>NE Quantity</th>
          <th>Alarm Probe</th>
          <th>MCP Probe</th>
          <th>PM Probe</th>
          <th>NE Quantity</th>
          <th>Alarm Probe</th>
          <th>MCP Probe</th>
          <th>PM Probe</th>
        </tr>
        </thead>
      </table>
    </div>
    <div class="table-body" @scroll="handleScroll">
      <table>
        <tbody>
        <tr v-for="(item, index) in items"
            :key="index">
          <td>JUNIPER</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="table-fix">
      <div class="table-fix-left">
        <table ref="tableFixLeft">
          <tbody>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr v-for="(item, index) in items"
              :key="index">
            <td>JUNIPER</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="table-fix-header">
        <table>
          <thead>
          <tr>
            <th>&nbsp;</th>
          </tr>
          <tr>
            <th>Vendor</th>
          </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Array,
        default: function () {
          return [];
        }
      },
    },
    data () {
      return {
        items: [12, 3, 4, 45, 5, 5, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,]
      }
    },
    methods: {
      handleScroll (e) {
        this.$refs.tableFixLeft.style.top = `-${e.target.scrollTop}px`;
        this.$refs.tableHeader.style.left = `-${e.target.scrollLeft}px`;
      }
    },
  };
</script>
<style lang="less" scoped>
  @table-width: 1246px;
  @table-height: 500px;
  .fix-column-table {
    position: relative;

    table {
      border-collapse: collapse;
      table-layout: fixed;
      font-size: 14px;
      thead {
        tr {
          height: 50px;
          th {
            font-size: 14px;
            color: #636669;
            border-bottom: none;
          }
        }
      }
      tr {
        height: 40px;
        td, th {
          border: 1px solid #e6eaf2;
          text-align: center;
          min-width: 70px;
        }
      }
    }

    .table-header {
      position: relative;
      overflow: hidden;
      width: @table-width;
      table {
        position: relative;
        tr {
          background-color: #fff;

        }
        tr:first-of-type {
          background-color: #eff2f8;
          color: #78849c;
        }
      }
    }

    .table-body {
      height: @table-height;
      width: @table-width;
      overflow-x: auto;
      overflow-y: auto;
      tr{
        background-color: #fff;
      }
    }

    .table-fix-left {
      height: @table-height + 80px;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 20px;
      background-color: #fff;
      table {
        position: relative;
      }
    }
    .table-fix-header {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      tr:first-of-type{
        background-color: #eff2f8;
        color: #78849c;
      }
    }
  }

</style>
