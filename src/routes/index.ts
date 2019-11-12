/*
 * @Author: drinkee.wu
 * @Date: 2019-11-12 19:45:47
 * @Last Modified by: drinkee.wu
 * @Last Modified time: 2019-11-12 19:52:29
 */

import { navigateTo } from '@tarojs/taro'
import qs, { ParsedUrlQuery } from 'querystring'
import { isEmpty } from 'lodash'

const routes = [
  {
    name: 'home',
    path: 'pages/home/index'
  }
]

export default {
  to: ({
    name,
    query = {}
  }: {
    name: string,
    query?: ParsedUrlQuery
  }) => {
      const match = routes.find(route => route.name === name)
      const queryString = isEmpty(query)
        ? ''
        : qs.stringify(query)
      match && navigateTo({
        url: `/${match.path}?${queryString}`
      })
  }
}
