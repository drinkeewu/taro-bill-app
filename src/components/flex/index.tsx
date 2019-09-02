import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

export default (props)=> {

  const {
    align,
    justify,
    direction,
    paddingX,
    paddingY,
  } = props;

  return (
    <View style={{
      display: 'flex',
      alignItems: align || 'unset',
      justifyContent: justify || 'start',
      flexDirection: direction || 'flex-start',
      paddingLeft: paddingX || 0,
      paddingRight: paddingX || 0,
      paddingTop: paddingY || 0,
      paddingBottom: paddingY || 0,
    }}
    >
      {props.children}
    </View>
  )

}
