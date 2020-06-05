import Mock from 'mockjs'
import moment from 'moment'

// 生产当月的开始日期
const startDate = moment().startOf('month').toDate()
// 截止日期
const endDate = new Date()
// 随机时间段
const randomDate = (startDate, endDate) => {
  const date = new Date(+startDate + Math.random() * (endDate - startDate))
  const hour = 0 + Math.random() * (23 - 0) | 0
  const minute = 0 + Math.random() * (59 - 0) | 0
  const second = 0 + Math.random() * (59 - 0) | 0
  date.setHours(hour)
  date.setMinutes(minute)
  date.setSeconds(second)
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
}
const data = Mock.mock({
  'items|15': [{
    id: '@id',
    'name|+1': ['螺蛳粉', '老友粉', '番茄炒蛋饭', '青椒牛肉饭', '水煮豆腐', '烤鸡腿', '烤鸡翅', '桂林米粉', '生榨米粉', '饺子', '馄饨', '双层芝士汉堡', '香辣鸡腿堡', '必胜客-榴莲多多比萨', '必胜客-超级至尊比萨'],
    'category|1': ['甜食', '饭类', '粉类', '烧烤', '西餐类'],
    'status|1': ['正常', '下架'],
    'createTime|1': function() {
      var category = []
      for (var i = 30; i > 0; i--) {
        category.push(randomDate(startDate, endDate))
      }
      var index = Math.floor((Math.random() * category.length))
      return category[index]
    }
  }]
})

export default [
  {
    url: '/food/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },

  {
    url: '/food/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/food/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
