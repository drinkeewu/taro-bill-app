import Taro from '@tarojs/taro';
import { Block } from '@tarojs/components';

type Props = {
  rif: boolean,
  children: any
}

export default ({
  rif,
  children
}) => {
  return rif
  ? <Block>{children}</Block>
  : null
}
