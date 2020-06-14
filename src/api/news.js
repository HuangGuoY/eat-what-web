import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/news/list',
    method: 'get',
    params: query
  })
}

export function fetchNews(id) {
  return request({
    url: '/news/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/news/pv',
    method: 'get',
    params: { pv }
  })
}

export function createNews(data) {
  return request({
    url: '/news/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/news/update',
    method: 'post',
    data
  })
}
