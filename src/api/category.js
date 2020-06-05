import request from '@/utils/request'

// mock用
export function getdrinkList(params) {
  return request({
    url: '/drinkCategory/list',
    method: 'get',
    params
  })
}

// mock用,获取食物列表
export function getFoodList(params) {
  return request({
    url: '/foodCategory/list',
    method: 'get',
    params
  })
}
