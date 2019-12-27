import { View } from "@tarojs/components";
import Router from "@/routes";
import Taro, { useState, useDidShow } from "@tarojs/taro";
import Detail from "./detail"
import { Week, ChargeType } from "./detail/types";


export default function Home()  {
  const initState = Array.from(
    {length: 6},
    (v, i) => (
      {
        date: `08月${i+1}日`,
        week: Week.Sun % 7,
        chargeType: ChargeType.Income,
        total: 88,
        bills: [
          {
            category: "餐饮",
            desc: "早餐",
            amount: 12
          },
          {
            category: "餐饮",
            desc: "早餐",
            amount: 12
          }
        ]
      }
    )
  )
  const [days, setDays] = useState(initState);


  useDidShow(() => {
    this.$scope.getTabBar
      && typeof this.$scope.getTabBar === 'function'
      && this.$scope.getTabBar().setData({
        selected: 0
      })
  })



  return (
    <View className='homepage top-wrapper'>
      <Detail days={days} />
    </View>
  );
};
