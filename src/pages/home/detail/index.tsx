import Taro from "@tarojs/taro";
import { View, Text, ScrollView } from "@tarojs/components";
import { AtAvatar } from "taro-ui";
import Flex from "@/components/flex";
import "./detail.scss";
import { Week, ChargeType, Props } from "./types";
import Banner from '../banner/index'

export const WEEK_FILTER = {
  [Week.Sun]: "星期日",
  [Week.Mon]: "星期一",
  [Week.Tue]: "星期二",
  [Week.Wed]: "星期三",
  [Week.Thu]: "星期四",
  [Week.Fri]: "星期五",
  [Week.Sat]: "星期六"
};

export const CHARGE_TYPE = {
  [ChargeType.Income]: "收入",
  [ChargeType.Expense]: "支出",
  [ChargeType.Transfer]: "转账"
};

const borderBottomStyle = {
  borderBottom:'1px solid #eee'
}

export default ({ days } : Props) => {


  return (
    <View>
      <Banner />
      <ScrollView
        className='home-detail'
        scrollY
      >
        <View className='detail-item'>
          {days &&
            days.map((day, index) => {
              return (
                <View key={"day-item" + index}>
                  <Flex
                    className='detail-item__title'
                    justify='space-between'
                    padding={['5px', '20px']}
                    style={borderBottomStyle}
                    align='center'
                  >

                    <Text>
                      {day.date} {WEEK_FILTER[day.week]}
                    </Text>

                    <Text>
                      {CHARGE_TYPE[day.chargeType]}: {day.total}
                    </Text>
                  </Flex>
                  {day.bills &&
                    day.bills.map((bill, bIndex) => {
                      return (
                        <Flex
                          className='bill-item'
                          justify='space-between'
                          align='center'
                          padding={['5px', '20px']}
                          key={`bill-item-${bIndex}`}
                        >
                          <Flex align='center'>
                            <AtAvatar
                              circle
                              text='买'
                              size='small'
                            />
                            <Text style={{marginLeft: '10px'}}>{bill.desc}</Text>
                          </Flex>
                          <Text>{bill.amount}</Text>
                        </Flex>
                      );
                    })}
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};
