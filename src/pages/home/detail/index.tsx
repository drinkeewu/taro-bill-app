import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Flex from "@/components/flex";
import "./detail.scss";

export enum ChargeType {
  Income = 1,
  Expense,
  Transfer
}

export enum Week {
  Sun = 0,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
//每条账单记录详情
export type Bill = {
  category: string;
  desc: string;
  amount: number;
};
//每日详情
export type DayDetail = {
  date: string;
  week: Week;
  chargeType: ChargeType;
  bills: Bill[];
  total: number;
};

export type Props = {
  days: DayDetail[];
};

const WEEK_FILTER = {
  [Week.Sun]: "星期日",
  [Week.Mon]: "星期一",
  [Week.Tue]: "星期二",
  [Week.Wed]: "星期三",
  [Week.Thu]: "星期四",
  [Week.Fri]: "星期五",
  [Week.Sat]: "星期六"
};

const CHARGE_TYPE = {
  [ChargeType.Income]: "收入",
  [ChargeType.Expense]: "支出",
  [ChargeType.Transfer]: "转账"
};

export default ({ days }: Props) => {
  const borderBottomStyle = {
    borderBottom:'1px solid #eee'
  }
  return (
    <View className="home-detail">
      <View className="detail-item">
        {days &&
          days.map((day, index) => {
            return (
              <View key={"day-item" + index}>
                  <Flex
                    className="detail-item__title"
                    justify="space-between"
                    padding={['5px', '20px']}
                    style={borderBottomStyle}
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
                        className="bill-item"
                        justify="space-between"
                        padding={['5px', '20px']}
                        key={`bill-item-${bIndex}`}
                      >
                        <Text>{bill.desc}</Text>
                        <Text>{bill.amount}</Text>
                      </Flex>
                    );
                  })}
              </View>
            );
          })}
      </View>
    </View>
  );
};
