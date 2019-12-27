import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import classNames from 'classnames'

import './banner.scss'

type IBannerProp = {
  fixed?: boolean,
  children?: any
}

export default function Banner(props: IBannerProp) {
  const {
    fixed = true
  } = props
  const clsName = classNames({
    'comp-banner': true,
    'fixed': fixed
  })

  return (
    <View className={clsName}>
      {props.children}
    </View>
  )
}
