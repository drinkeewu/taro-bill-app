import Taro, {  useState, useDidShow } from '@tarojs/taro';
import {View, Text, Button} from '@tarojs/components';



export default function Statistics(props)  {
  const tabList= [
    { title: '周' },
    { title: '月' },
    { title: '年' },
  ]
  const [state, setState] = useState({
    activeTab: 0
  })




  useDidShow(() => {
    this.$scope.getTabBar
      && typeof this.$scope.getTabBar === 'function'
      && this.$scope.getTabBar().setData({
      selected:1
    })
  })

  return (
    <View>
      <Text>统计</Text>
    </View>
  )
}
