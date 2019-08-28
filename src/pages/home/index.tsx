import './home.scss';
import Taro , {Component} from '@tarojs/taro';
import { View, Button ,Text } from '@tarojs/components'
import Banner from './banner/index';
import Detail from './detail'



export default () => {
  return (
    <View className="homepage">
      <Banner />
      <Detail />
    </View>
  )
}
