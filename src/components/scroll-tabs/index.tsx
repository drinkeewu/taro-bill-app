import Taro, { useState ,useDidShow, useCallback, useEffect} from "@tarojs/taro";
import { ScrollView, View, Text } from "@tarojs/components";
import "./scroll-tabs.scss";

export type ScrollTabItem = {
    name: string,
    index: number
}

type ScrollTabsProps = {
  /** 标题数据 */
  data: ScrollTabItem[],
  /** 列数 */
  columnNumber?: number,
  onChange?: (val:number) => void,
  defaultActive?: number,
};

export default function ScrollTabs(
  props: ScrollTabsProps
) {
  const {
    data = []
  } = props

  const tabItemId = (index:number) => `scroll-tab-item${index}`

  const defaultColumnNumber = 3
  const columnNumber = props.columnNumber || defaultColumnNumber
  const columnWidthPercent = (1 / columnNumber) * 100


  const [activeTab, setActiveTab] = useState(props.defaultActive)
  const [scrollToView, setScrollToView] = useState(tabItemId(data.length - 1))



  /** 自动滚动到指定目标 */
  const autoScrollTo = useCallback(
    (index:number) => {
      const half = Math.floor(columnNumber / 2)
      if(index >= (
        half + columnNumber % half)
      ) {
        setScrollToView(tabItemId(index - 2))
      } else {
        setScrollToView(tabItemId(0))
      }
    },
    [columnNumber],
  )

  const onItemClick = useCallback(
    (itemIndex:number, index:number) => {
      console.log(itemIndex);
      autoScrollTo(index)
      setActiveTab(itemIndex)
      props.onChange && props.onChange(itemIndex)
    },
    [autoScrollTo, props],
  )


  const initClick = useCallback(
    () => {
      const activeIndex = data.findIndex(i => i.index === props.defaultActive)
      const lastIndex = data.length - 1
      activeTab !== props.defaultActive
      && onItemClick(
        props.defaultActive || data[lastIndex].index,
        activeIndex || lastIndex
      )
    },
    [activeTab, data, onItemClick, props.defaultActive]
  )

  const onDataChange = useCallback(
    () => {
      const lastIndex = data.length - 1
      const lastItemIndex = data[lastIndex].index
      onItemClick(lastItemIndex, lastIndex)
    },
    [data, onItemClick],
  )

  useEffect(() => {
    onDataChange()
  }, [onDataChange])

  useDidShow(() => {
    initClick()
  })


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
          id={tabItemId(index)}
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
