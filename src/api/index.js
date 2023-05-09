import request from '../utils/request'

const icode = 'C2CE489D152F6DD7' // 13926EAFCAA16CC3   C2CE489D152F6DD7

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

export function wordcloudApi () {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode }
  })
}
export function mapScatterApi () {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: { icode }
  })
}
export function screenDataApi () {
  return request({
    url: '/screen/data',
    method: 'get',
    params: { icode }
  })
}
