<template>
  <div :class="className" :style="{title:title,height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000

export default {
  name: 'BarChart',
  mixins: [resize],
  props: {
    title: {
      type: String,
      default: '统计'
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        title: {
          left: 'center',
          text: '吃饭吃粉对比'
        },
        grid: {
          top: 30,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '吃粉人数',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [49, 60, 66, 50, 65, 100, 110],
          animationDuration
        }, {
          name: '吃饭人数',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [101, 90, 84, 100, 85, 50, 40],
          animationDuration
        }]
      })
    }
  }
}
</script>
