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
    'name|+1': ['可口可乐', '百事可乐', '雪碧', '维他', '非常可乐', '茉莉茶'],
    'category|1': ['碳酸饮料', '奶茶', '茶饮料', '果汁', '咖啡类', '乳饮料'],
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
    url: '/drink/list',
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
    url: '/drink/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/drink/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
