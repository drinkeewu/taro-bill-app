import Taro, { useState, useDidShow, useEffect, useRef } from "@tarojs/taro";
import { View, Text, Button, ScrollView } from "@tarojs/components";
import Tabs from "@/components/tabs";
import Flex from "@/components/flex";
import Banner from "@/components/banner";
import Chart from '@/components/chart'
// eslint-disable-next-line no-unused-vars
import ScrollTabs, { ScrollTabItem } from '../../components/scroll-tabs/index';
import './statistics.scss'
import SectionWrapper from "@/components/section-wrapper";


export enum BillType {
  Income = 0,
  Cost
}

export enum CycleType {
  Week = 0,
  Month,
  Year
}

export enum Weekday  {
  Sun = 0,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
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

  const billTypeTabs = getTypeTabsData(billType, true)
  const cycleTypeTabs = getTypeTabsData(cycleType)


  const WEEK_TABS = getWeekTabItems()
  const MONTH_TABS = getMonthTabItems()
  const YEAR_TABS = getYearTabItems()

  const tabItems = {
    [CycleType.Week]: WEEK_TABS,
    [CycleType.Month]: MONTH_TABS,
    [CycleType.Year]: YEAR_TABS
  }

  const TAB_ITEMS = tabItems[activeCycleType]

  function getWeekTabItems():ScrollTabItem[] {
    return Array.from(
      { length: getWeekIndexOfYear() - 1 },
      (v, i) => ({
        name: `${i+1}周`,
        index: i+1
      })
    )
  }

  function getMonthTabItems():ScrollTabItem[]{
    const monthIndex = new Date().getMonth() + 1
    return [
      ...Array.from(
        { length: monthIndex - 2},
        (v, i) => ({
          name: `${i+1}月`,
          index: i+1
        })
      ),
      {
        name: '上月',
        index:monthIndex - 1
      },
      {
        name: '本月',
        index: monthIndex
      }
    ]
  }

  function getYearTabItems():ScrollTabItem[] {
    return [
      {
        name: '去年',
        index: new Date().getFullYear() - 1
      },
      {
        name: '今年',
        index: new Date().getFullYear()
      }
    ]
  }

  function getDayIndexOfYear():number{
    const currentYear = new Date().getFullYear().toString()
    const passTimestamp = new Date().getTime() - new Date(currentYear).getTime()
    return  Math.ceil(passTimestamp / 8.65e7) + 1
  }

  function getWeekIndexOfYear() {
    const nowDayIndex = getDayIndexOfYear()
    const firstDay = new Date(`${new Date().getFullYear()}-01-01`).getDay()
    const firstWeekendDate = firstDay === Weekday.Sun
      ? 1
      : 7 - firstDay + 1
    return nowDayIndex <= firstWeekendDate
      ? 1
      : Math.ceil((nowDayIndex - firstWeekendDate) / 7)
  }

  // function isLeapYear(year: number):boolean {
  //   return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
  // }





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

      <View
        className='statistics-page__content'
      >
        <ScrollTabs
          data={TAB_ITEMS}
          columnNumber={5}
          defaultActive={TAB_ITEMS[TAB_ITEMS.length - 1].index}
        />
      </View>
      <View>

        <View className='main-content'>
          <View className='value-content'>
            <Text className='total'>
              总支出: 8888
            </Text>
            <Text>
              平均值: 8888
            </Text>
          </View>
          <View className='chart-wrapper'>
            <Chart
              option={{
                grid: {
                  top: 20,
                  bottom :20,
                  right: 0
                },
                xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                  type: 'value'
                },
                series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line'
                }]
              }}
            />
          </View>
          <View className='ranking'>
            <SectionWrapper
              leftTitle='支出排行榜'
              border={false}
            >
              <ScrollView
                scrollY
              >
              </ScrollView>
            </SectionWrapper>
          </View>
        </View>
      </View>
    </View>
  );
}
