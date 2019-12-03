import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./cell.scss";

export default function Cell(props: any) {
  return (
    <View className='comp-cell'>
      <View>{props.left}</View>
      <View>{props.right}</View>
    </View>
  );
}
