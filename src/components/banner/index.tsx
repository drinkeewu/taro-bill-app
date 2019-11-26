import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import './banner.scss'

export default function Banner(props) {
  return (
    <View className="comp-banner">
      {props.children}
    </View>
  )
}
