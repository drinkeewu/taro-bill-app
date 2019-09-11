import { View } from "@tarojs/components";
import TabBar from '@/components/tab-bar/index';
import Taro, { useState, useEffect, useRouter } from "@tarojs/taro";
import Detail from "./detail"
import Statistics from '../statistics/index'
import Setting from '../setting/index'
import Account from '../account/index'
import { Week, ChargeType } from "./detail/types";



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

  const [activeTab, setActiveTab] = useState(0)

  function onTabBarChange(e:number) {
    setActiveTab(e)
    e === 2 && Taro.navigateTo({
      url: '/pages/add-bill/index'
    })
  }

  const router = useRouter()



  useEffect(() => {
    console.log(router)
    return () => {

    };
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
      <TabBar  current={activeTab} onChange={onTabBarChange} />
    </View>
  );
};
