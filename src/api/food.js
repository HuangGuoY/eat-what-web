import axios from 'axios'
import request from '@/utils/request'
// 获取饮料列表（分页）
export const getFoodListPage = params => { return axios.get('http://localhost:8088/getFoodListPage', { params: params }) }

// 新增饮料
export const addFood = params => { return axios.post('http://localhost:8088/addFood', { params: params }) }

// 修改饮料
export const updateFood = params => { return axios.post('http://localhost:8088/updateFood', { params: params }) }

// mock用
export function getList(query) {
  return request({
    url: '/food/list',
    method: 'get',
    params: query
  })
}

export function addMockFood(data) {
  return request({
    url: '/food/create',
    method: 'post',
    data
  })
}

export function updateMockFood(data) {
  return request({
    url: '/food/update',
    method: 'post',
    data
  })
}
