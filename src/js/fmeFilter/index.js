import Vue from 'vue'
import './index.less'

Vue.component('fme-filter', {
  template: '<div class="fme-filter-container">' +
  '<ul class="fme-filter-tabs">' +
  '<li v-for=\'tab in tabValues\' class="active">{{tab}}</li>' +
  '</ul>' +
  '<div class="fme-filter-items">' +
  'items' +
  '</div>' +
  '<div class="fme-filter-operation">' +
  '<div class="button reset">重置</div>' +
  '<div class="button cancel">取消</div>' +
  '<div class="button confirm">确认筛选</div>' +
  '</div>' +
  '</div>',
  data: function () {
    return {
      tabValues: ['维护团队', '技能', 'FME状态', '办公室', '承包商']
    }
  }
})