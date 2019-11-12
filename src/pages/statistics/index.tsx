import Taro, {  useState, useDidShow } from '@tarojs/taro';
import {View, Text, Button} from '@tarojs/components';
import { AtTabs, AtTabsPane } from "taro-ui";



export default (props) => {
  const tabList= [
    { title: '周' },
    { title: '月' },
    { title: '年' },
  ]
  const [state, setState] = useState({
    activeTab: 0
  })

  function onTabClick(val: number) {
    setState({
      ...state,
    })
  }


  return (
    <View>
      <Text>统计</Text>
    </View>
  )
}
