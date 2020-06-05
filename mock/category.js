import Mock from 'mockjs'

const drinkData = Mock.mock({
  'items|6': [{
    id: '@id',
    'name|+1': ['碳酸饮料', '奶茶', '茶饮料', '果汁', '咖啡类', '乳饮料'],
    createTime: '@datetime'
  }]
})

const foodData = Mock.mock({
  'items|3': [{
    id: '@id',
    'name|+1': ['甜食', '饭类', '粉类', '烧烤'],
    createTime: '@datetime'
  }]
})

export default [
  {
    url: '/drinkCategory/list',
    type: 'get',
    response: config => {
      const items = drinkData.items
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
    url: '/foodCategory/list',
    type: 'get',
    response: config => {
      const items = foodData.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
