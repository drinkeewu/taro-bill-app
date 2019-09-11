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
