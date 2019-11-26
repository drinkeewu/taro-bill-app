import Taro, { useDidShow } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';



export default function Account(props) {

  useDidShow(() => {
    this.$scope.getTabBar
      && typeof this.$scope.getTabBar === 'function'
      && this.$scope.getTabBar().setData({
      selected: 3
    })
  })

  return (
    <View>
      <Text>账户页面</Text>
    </View>
  )
}
