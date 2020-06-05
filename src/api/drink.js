import axios from 'axios'
import request from '@/utils/request'
// 获取饮料列表（分页）
export const getDrinkListPage = params => { return axios.get('http://localhost:8088/getDrinkListPage', { params: params }) }

// 新增饮料
export const addDrink = params => { return axios.post('http://localhost:8088/addDrink', { params: params }) }

// 修改饮料
export const updateDrink = params => { return axios.post('http://localhost:8088/updateDrink', { params: params }) }

// mock用
export function getList(query) {
  return request({
    url: '/drink/list',
    method: 'get',
    params: query
  })
}

export function addMockDrink(data) {
  return request({
    url: '/drink/create',
    method: 'post',
    data
  })
}

export function updateMockDrink(data) {
  return request({
    url: '/drink/update',
    method: 'post',
    data
  })
}
