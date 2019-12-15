import { View } from "@tarojs/components";
import Router from "@/routes";
import Taro, { useState, useDidShow } from "@tarojs/taro";
import Detail from "./detail"
import { Week, ChargeType } from "./detail/types";


export default function Home()  {
  const [days, setDays] = useState([
    {
      date: "08月08日",
      week: Week.Sun,
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
    },


  ]);


  useDidShow(() => {
    this.$scope.getTabBar
      && typeof this.$scope.getTabBar === 'function'
      && this.$scope.getTabBar().setData({
        selected: 0
      })
    Router.to({
      name: 'statistics'
    })
  })



  return (
    <View className='homepage top-wrapper'>
      <Detail days={days} />
    </View>
  );
};
