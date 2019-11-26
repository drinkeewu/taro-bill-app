import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./tabs.scss";

type TabsProps = {
  data: {
    name: string;
    index: number;
  }[],

  current: number,
  onChange?: (val: number) => void,
  [propName: string]: any;
};



export default function Tabs(props: TabsProps) {

  const {
    data = [],
    current
  } = props


  return (
    <View className="comp-tab">
      {data.map((item, index) => (
        <View className={
          `comp-tab__item ${
            index === 0
            ? 'first'
            : index === data.length - 1
              ? 'last'
              : ''
          }${
            item.index === current
            ? ' active'
            : ''
          }`
          } key={`tab-item${item.index}`}
        >
          <Text>
            {item.name}
          </Text>
        </View>
      ))}
    </View>
  );
}
