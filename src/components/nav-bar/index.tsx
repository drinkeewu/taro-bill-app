import Taro, {useEffect} from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { CSSProperties } from 'react';



export default props => {

  useEffect(() => {
    console.log(Taro)
  })
  const style:CSSProperties= {
    height: 44 + 'pt',
    backgroundColor: '#58c5fb',
    lineHeight: 44 + 20 + 'pt',
    textAlign: 'center',
    color: '#fff'
  }
  return (
    <View style={style}>
        <Text>
          APP
        </Text>
    </View>
  )
}
