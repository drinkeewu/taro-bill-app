import Taro from "@tarojs/taro";
import { AtIcon } from "taro-ui";
import { View } from "@tarojs/components";
import "./cell.scss";
import Flex from "../flex";

type CellProps = {
  icon: string,
  name: string,
  renderRight?: any,
  children: any
}

export default function Cell(props: CellProps) {
  return (
    <View className='comp-cell'>
      <Flex align='center'>
        <View className='icon-wrapper'>
          <AtIcon
            prefixClass='icon'
            value={props.icon}
            size='26'
            color='#999'
          />
        </View>
        {props.name}
      </Flex>
      <View>
        {props.renderRight}
      </View>
    </View>
  );
}
