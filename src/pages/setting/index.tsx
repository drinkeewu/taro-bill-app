import Taro, { useDidShow } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';


export default function Setting(props)  {
  useDidShow(() => {
    this.$scope.getTabBar
      && typeof this.$scope.getTabBar === 'function'
      && this.$scope.getTabBar().setData({
      selected: 4
    })
  })
  return (
    <View>
      <Text>设置页面</Text>
    </View>
  )
}
