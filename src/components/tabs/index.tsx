import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./tabs.scss";

type TabItem = {
    name: string;
    index: number;
}

type TabsProps = {
  data: TabItem[],

  current: number,
  onChange?: (val: number) => void,
  [propName: string]: any;
};



export default function Tabs(props: TabsProps) {

  const {
    data = [],
    current
  } = props

  const [activeIndex, setActiveIndex] = useState(current)

  /** tab-item类名计算函数 */
  function getTabItemClass(
    item: TabItem,
    index: number
  ) {
    return `comp-tab__item ${
      index === 0
      ? 'first'
      : index === data.length - 1
        ? 'last'
        : ''
    }${
      item.index === activeIndex
      ? ' active'
      : ''
    }`
  }

  function onTabItemClick(
    index:number
  ) {
    setActiveIndex(index)
    props.onChange && props.onChange(index)
  }


  return (
    <View className="comp-tab">
      {data.map((item, index) => (
        <View
          className={getTabItemClass(item, index)}
          key={`tab-item${item.index}`}
          onClick={() => onTabItemClick(item.index)}
        >
          <Text>
            {item.name}
          </Text>
        </View>
      ))}
    </View>
  );
}
