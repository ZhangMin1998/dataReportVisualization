import request from '../utils/request'

export function getTest (params) {
  return request({
    url: '/gettest',
    method: 'get',
    params: params
  })
}

export function postTest (data) {
  return request({
    url: '/posttest',
    method: 'post',
    data
  })
}
