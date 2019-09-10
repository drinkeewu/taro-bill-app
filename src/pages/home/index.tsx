import { View, Text } from "@tarojs/components";
import Taro, { useState } from "@tarojs/taro";
import "./home.scss";
import Banner from "./banner/index";
import Detail from "./detail";
import { Week,ChargeType } from "./detail/index";
import NavBar from '@/components/nav-bar/index';





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
    }
  ]);

  return (
    <View className="homepage">
      <NavBar />
      <Banner />

      <Detail days={days} />
    </View>
  );
};
