import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./cell.scss";

type CellProps = {
  name: string,
  renderRight?: any
}

export default function Cell(props: CellProps) {
  return (
    <View className='comp-cell'>
      <View>
        {props.name}
      </View>
      <View>
        {props.renderRight}
      </View>
    </View>
  );
}
