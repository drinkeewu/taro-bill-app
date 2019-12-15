import Taro, { useState } from "@tarojs/taro";
import { ScrollView, View, Text } from "@tarojs/components";
import "./scroll-tabs.scss";

type ScrollTabsProps = {
  /** 标题数据 */
  data: {
    name: string,
    index: number
  }[],
  /** 列数 */
  columnNumber?: number,
  onChange?: (val:number) => void,
  defaultActive?: number
};

export default function ScrollTabs(
  props: ScrollTabsProps
) {
  const {
    data = []
  } = props

  const tabItem = (index:number) => `scroll-tab-item${index}`

  const defaultColumnNumber = 3
  const columnNumber = props.columnNumber || defaultColumnNumber
  const columnWidthPercent = (1 / columnNumber) * 100


  const [activeTab, setActiveTab] = useState(props.defaultActive)
  const [scrollToView, setScrollToView] = useState(tabItem(data.length - 1))

  function onItemClick(
    itemIndex:number,
    index:number
  ) {
    autoScrollTo(index)
    setActiveTab(itemIndex)
    props.onChange && props.onChange(itemIndex)
  }

  /** 自动滚动到指定目标 */
  function autoScrollTo(index:number) {
    const half = Math.floor(columnNumber / 2)
    if(index >= (
      half + columnNumber % half)
    ) {
      setScrollToView(tabItem(index - 2))
    } else {
      setScrollToView(tabItem(0))
    }
  }


  return (
    <ScrollView
      className='comp-scroll-tabs'
      scrollX
      scrollIntoView={scrollToView}
      scrollWithAnimation
    >
      {props.data && props.data.map((item, index) => (
        <View
          key={`item${item.index}`}
          id={`scroll-tab-item${index}`}
          className={
            `comp-scroll-tabs__item ${
              item.index === activeTab
                ? 'is-active'
                : ''
            }`
          }
          style={{
            width: `${columnWidthPercent}%`
          }}
          onClick={() => {onItemClick(item.index, index)}}
        >
          <Text>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
