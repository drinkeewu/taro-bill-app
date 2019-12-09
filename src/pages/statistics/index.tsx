import Taro, { useState, useDidShow, useEffect } from "@tarojs/taro";
import { View, Text, Button, ScrollView } from "@tarojs/components";
import Tabs from "@/components/tabs";
import Flex from "@/components/flex";
import Banner from "@/components/banner";
import ScrollTabs from '../../components/scroll-tabs/index';
import { AtTabs, AtTabsPane } from 'taro-ui';
import './statistics.scss'


export enum BillType {
  Income = 0,
  Cost
}

export enum CycleType {
  Week = 0,
  Month,
  Year
}

/** 账单类型 */
const billType = Object.freeze({
  /** 支出 */
  [BillType.Cost]: "支出",
  /** 收入 */
  [BillType.Income]: "收入"
});

const cycleType = Object.freeze({
  [CycleType.Week]: '周',
  [CycleType.Month]: '月',
  [CycleType.Year]: '年',
})

export default function Statistics() {
  const [activeBillType, setActiveBillType] = useState(BillType.Cost);
  const [activeCycleType, setActiveCycleType] = useState(CycleType.Week)
  const [current, setCurrent] = useState(0)

  const billTypeTabs = getTypeTabsData(billType, true)
  const cycleTypeTabs = getTypeTabsData(cycleType)

  function getTypeTabsData(
    param: object,
    reverse: boolean = false
  ) {
    const result = Object.keys(param)
      .map(key => ({
        index: +key,
        name: param[key] + ""
      }))
    return reverse
      ? result.reverse()
      : result;
  }

  function onTabsChange({
    type,
    index
  }: {
    type: 'bill' | 'cycle',
    index: number
  }) {
    if (type === 'bill') {
      setActiveBillType(index)
    } else {
      setActiveCycleType(index)
    }
  }

  function onTabsClick(val: number) {
    setCurrent(val)
  }


  useDidShow(() => {
    this.$scope.getTabBar &&
      typeof this.$scope.getTabBar === "function" &&
      this.$scope.getTabBar().setData({
        selected: 1
      });
  });

  useEffect(() => {
    console.log('activeBillType:', activeBillType)
  }, [activeBillType])

  useEffect(() => {
    console.log('activeCycleType:', activeCycleType)
  }, [activeCycleType])

  return (
    <View className='statistics-page'>
      <Banner>
        <Flex justify='space-between'>
          {/* 账单类型切换 */}
          <Tabs
            current={activeBillType}
            data={billTypeTabs}
            onChange={(index) => onTabsChange({
              type: 'bill',
              index
            })}
          />

          {/* 周期类型切换 */}
          <Tabs
            current={activeCycleType}
            data={cycleTypeTabs}
            onChange={(index) => onTabsChange({
              type: 'cycle',
              index
            })}
          />
        </Flex>
      </Banner>

      <ScrollView className='statistics-page__content'>
        <AtTabs
          current={current}
          scroll
          tabList={[
            { title: '标签页1' },
            { title: '标签页2' },
            { title: '标签页3' },
            { title: '标签页4' },
            { title: '标签页5' },
            { title: '标签页6' }
          ]}
          onClick={onTabsClick}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
          </AtTabsPane>
        </AtTabs>

        <ScrollTabs />
      </ScrollView>
    </View>
  );
}
