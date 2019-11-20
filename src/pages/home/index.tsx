import { View } from "@tarojs/components";
import TabBar from '@/components/tab-bar/index';
import Taro, { useState, useEffect } from "@tarojs/taro";
import Detail from "./detail"
import Statistics from '../statistics/index'
import Setting from '../setting/index'
import Account from '../account/index'
import { Week, ChargeType } from "./detail/types";
import Router from '../../routes/index';


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

  const [activeTab, setActiveTab] = useState(0)

  function onTabBarChange(activeIndex:number) {
    activeIndex !==2
    ? setActiveTab(activeIndex)
    : Router.to({
      name: 'addBill',
    })
  }




  useEffect(() => {

  })



  return (
    <View className="homepage top-wrapper">

      {
        activeTab === 0
        ? <Detail days={days} />
        : activeTab === 1
          ? (<Statistics />)
          : activeTab === 2
            ?<View />
            :activeTab === 3
              ? <Account />
              :<Setting />
      }
      {/* <TabBar  current={activeTab} onChange={onTabBarChange} /> */}
    </View>
  );
};
