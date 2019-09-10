import Taro, {useEffect} from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { CSSProperties } from 'react';

type Props = {
  title?: string
}

export default ({title}: Props) => {

  useEffect(() => {
    console.log(Taro)
  })
  const style:CSSProperties= {
    zIndex:500,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 44 / 0.75+ 'px',
    backgroundColor: '#58c5fb',
    lineHeight: (44 + 20) / 0.75 + 'px',
    textAlign: 'center',
    color: '#fff'
  }
  return (
    <View style={style}>
        <Text style={{color: '#fff'}}>
          {title}
        </Text>
    </View>
  )
}
