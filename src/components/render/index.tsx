import Taro from '@tarojs/taro';
import { Block } from '@tarojs/components';

type RenderProps = {
  rif: boolean,
  children: any
}
const Render = ({
  rif,
  children
}: RenderProps) => {
  return rif
    ? <Block>{children}</Block>
    : null
}


export default Render
