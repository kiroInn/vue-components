import Vue from 'vue'
import './index.less'

Vue.component('fme-filter', {
  template: '<div class="fme-filter-container">' +
  '<ul class="fme-filter-tabs">' +
  '<li v-for="tab in tabValues" :class="{active: tab.active}" v-on:click="changeTab(tab)">{{tab.name}}</li>' +
  '</ul>' +
  '<div v-for="(tab, index) in tabValues" :class="[\'fme-filter-items\', {active: tab.active}]">' +
  '<ul>' +
  '<li class="item" v-on:click="checkAll(tab)">' +
  '<span>全部</span><span :class="[\'select\', {\'checked-all\': tab.checkedAll, unchecked: !tab.checkedAll}]"></span>' +
  '</li>' +
  '<li class="item" v-for="item in tab.value" v-on:click="checkItem(item)">' +
  '<span>{{item.value}}</span><span :class="[\'select\', {checked: item.checked, unchecked: !item.checked}]"></span>' +
  '</li>' +
  '</ul>' +
  '</div>' +
  '<div class="fme-filter-operation">' +
  '<div class="button reset">重置</div>' +
  '<div class="button cancel">取消</div>' +
  '<div class="button confirm">确认筛选</div>' +
  '</div>' +
  '</div>',
  mounted: function () {
    this.tabValues = [{
      name: '维护团队',
      value: [
        {value: 'GuFMoffice', checked: true},
        {value: 'GuFMoffice1', checked: true},
        {value: 'GuFMoffice2', checked: true}
      ],
      checkedAll: true,
      active: true
    }, {
      name: '技能',
      value: [
        {value: 'GuFMoffice3', checked: true},
        {value: 'GuFMoffice4', checked: true},
        {value: 'GuFMoffice5', checked: true}
      ],
      checkedAll: true,
      active: false
    }, {
      name: 'FME状态',
      value: [
        {value: 'GuFMoffic6', checked: true},
        {value: 'GuFMoffice7', checked: true},
        {value: 'GuFMoffice8', checked: true}
      ],
      checkedAll: true,
      active: false
    }, {
      name: '办公室',
      value: [
        {value: 'GuFMoffice', checked: true},
        {value: 'GuFMoffice1', checked: true},
        {value: 'GuFMoffice2', checked: true}
      ],
      checkedAll: true,
      active: false
    }, {
      name: '承包商',
      value: [
        {value: 'GuFMoffice', checked: true},
        {value: 'GuFMoffice1', checked: true},
        {value: 'GuFMoffice2', checked: true}
      ],
      checkedAll: true,
      active: false
    }]
  },
  data: function () {
    return {
      tabValues: []
    }
  },
  methods: {
    changeTab: function (tab) {
      this.tabValues.map(item => {
        item.active = false
      })
      tab.active = true
    },
    checkItem: function (item) {
      item.checked = !item.checked
    },
    checkAll: function (tab) {
      tab.value.forEach(item => {
        item
      })
    }
  }
})