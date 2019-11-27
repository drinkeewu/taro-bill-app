import Taro, { useState, useDidShow, useEffect } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import Tabs from "@/components/tabs";
import Banner from "@/components/banner";
import Flex from "@/components/flex";

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
const billType = {
  /** 支出 */
  [BillType.Cost]: "支出",
  /** 收入 */
  [BillType.Income]: "收入"
};

const cycleType = {
  [CycleType.Week]: '周',
  [CycleType.Month]: '月',
  [CycleType.Year]: '年',
}

export default function Statistics() {
  const [activeBillType, setActiveBillType] = useState(BillType.Cost);
  const [activeCycleType, setActiveCycleType] = useState(CycleType.Week)


  const billTypeTabs = getTypeTabsData(billType, true)
  const cycleTypeTabs = getTypeTabsData(cycleType)

  function getTypeTabsData(
    param:object,
    reverse:boolean = false
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
    if(type === 'bill'){
      setActiveBillType(index)
    } else {
      setActiveCycleType(index)
    }
  }

  useDidShow(() => {
    this.$scope.getTabBar &&
      typeof this.$scope.getTabBar === "function" &&
      this.$scope.getTabBar().setData({
        selected: 1
      });
  });

  useEffect(() => {
    console.log('activeBillType:',activeBillType)
  }, [activeBillType])

  useEffect(() => {
    console.log('activeCycleType:', activeCycleType)
  }, [activeCycleType])

  return (
    <View>
      <Banner>
        <Flex justify="space-between">
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
    </View>
  );
}
