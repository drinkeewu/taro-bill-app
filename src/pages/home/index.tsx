import NavBar from '@/components/nav-bar/index';
import TabBar from '@/components/tab-bar/index'
import { View } from "@tarojs/components";
import Taro, { useState } from "@tarojs/taro";
import Banner from "./banner/index";
import Detail from "./detail";
import { Week,ChargeType } from "./detail/index";



export default () => {
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

  function onTabBarChange(e) {
  }

  return (
    <View className="homepage top-wrapper">
      <NavBar title="APP" />
      <Banner />
      <Detail days={days} />
      <TabBar onChange={onTabBarChange} />
    </View>
  );
};
