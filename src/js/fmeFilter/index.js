import Vue from 'vue'
import './index.css'

const CHECK_STATUS = {
  CHECKED: 'checked',
  UNCHECKED: 'unchecked',
  EDIT: 'edit'
}

Vue.component('fme-filter', {
  template: `<div class="fme-filter-container">
  <ul class="fme-filter-tabs">
    <li v-for="tab in tabValues" :class="{active: tab.active}" v-on:click="changeTab(tab)">{{tab.name}}</li>
  </ul>
  <div v-for="(tab, index) in tabValues" :class="['fme-filter-items', {active: tab.active}]">
    <ul>
      <li class="item" v-on:click="checkAll(tab)">
        <span>全部</span><span :class="['fme-filter-select', tab.status]"></span>
      </li>
      <li class="item" v-for="item in tab.value" v-on:click="checkItem(tab, item)">
        <span>{{item.name}}</span><span :class="['fme-filter-select', {'checked': item.checked, 'unchecked': !item.checked}]"></span>
      </li>
    </ul>
  </div>
  <div class="fme-filter-operation">
    <div class="button reset" v-on:click="reset"><i class="icon-reset"></i>重置</div>
    <div class="button cancel">取消</div>
    <div class="button submit" v-on:click="submit">确认筛选</div>
  </div>
  </div>`,
  props: ['data'],
  mounted: function () {
    this.init()
  },
  data: function () {
    return {
      tabValues: []
    }
  },
  methods: {
    init: function () {
      this.tabValues = this.data.map((item, index) => ({
        key: item.key,
        name: item.name,
        status: 'checked',
        active: index === 0,
        value: item.value.map(v => ({...v, checked: true}))
      }))
    },
    changeTab: function (tab) {
      this.tabValues.forEach(item => {
        item.active = false
      })
      tab.active = true
    },
    checkItem: function (tab, item) {
      item.checked = !item.checked
      tab.status = this.getCheckAllStatus(tab.value)
    },
    checkAll: function (tab) {
      let checkAll = tab.status === CHECK_STATUS.UNCHECKED
      tab.value.forEach(item => {
        item.checked = checkAll
      })
      tab.status = this.getCheckAllStatus(tab.value)
    },
    getCheckAllStatus: function (checkItems) {
      let checkedNum = 0
      checkItems.forEach(item => {
        checkedNum += item.checked ? 1 : 0
      })
      return checkedNum === 0 ? CHECK_STATUS.UNCHECKED : checkedNum < checkItems.length ? CHECK_STATUS.EDIT : CHECK_STATUS.CHECKED
    },
    reset: function () {
      this.tabValues.forEach(tab => {
        tab.status = true
        tab.value.forEach(item => {
          item.checked = true
        })
        tab.status = this.getCheckAllStatus(tab.value)
      })
    },
    submit: function () {
      let result = {}
      this.tabValues.forEach(tab => {
        result[tab.key] = []
        tab.value.forEach(item => {
          if (item.checked) result[tab.key].push(item.value)
        })
      })
      return result
    }
  }
})