/*
 * @Author: drinkee.wu
 * @Date: 2019-11-12 19:45:47
 * @Last Modified by: drinkee.wu
 * @Last Modified time: 2019-11-12 19:52:29
 */

import { navigateTo, switchTab } from '@tarojs/taro'
import isEmpty from 'lodash/isEmpty'

function stringify(obj: Object ) {
  let string = ''
  Object.keys(obj).forEach((key, index) => {
    index > 0 &&  (string += '&')
    string += `${key}=${obj[key]}`
  })
  return string;
}

type Route = {
  name: string,
  path: string
}

export const routes: Route[] = [
  {
    name: 'home',
    path: 'pages/home/index'
  },
  {
    name: 'addBill',
    path: 'pages/add-bill/index'
  },
  {
    name: 'index',
    path: 'pages/index/index'
  },
  {
    name: 'account',
    path: 'pages/account/index'
  },
  {
    name: 'statistics',
    path: 'pages/statistics/index'
  },
  {
    name: 'setting',
    path: 'pages/setting/index'
  },
  {
    name: 'billDetail',
    path: 'pages/bill-detail/index'
  }
]

const Router =  {
  to: ({
    name,
    query = {},
  }: {
    name: string,
    query?: Object,
  }) => {
    const match = routes.find(route => route.name === name)
    const queryString = isEmpty(query)
      ? ''
      : stringify(query)
    if(match){
      const tabBarRoutes = [
        'home',
        'statistics',
        'account',
        'setting'
      ]
      tabBarRoutes.includes(match.name)
        ? switchTab({
          url: `/${match.path}`
        })
        : navigateTo({
          url: `/${match.path}?${queryString}`
        })
    }
  }
}
export default Router
