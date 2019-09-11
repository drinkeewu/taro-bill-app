import Taro, { useEffect, useState, useDidShow } from '@tarojs/taro';
import {View, Text, Button} from '@tarojs/components';


export default (props) => {
  let [state, setState] = useState(0)
  useDidShow(() => {
    setState(++state)
    console.log('sta show')
  })
  useEffect(() => {
    console.log('statistic effect', state)
    return () => {
    };
  }, [state])
  return (
    <View>
      <Text>
        统计页面
        {state}
      </Text>
      <Button onClick={() => setState(--state)}>
          -
        </Button>
        <Button onClick={() => setState(++state)}>
          +
        </Button>
    </View>
  )
}
