import Taro,{useState}from '@tarojs/taro';
import { AtTabBar } from 'taro-ui'



type Props = {
  onChange? : (e:number) => void,
  current: number
}

export default (props: Props) => {

  const {current} = props

  const routeMap = {
    0 : '/pages/home/index',
    1 : '/pages/statistics/index',
  }

  function onTabClick(e:number) {
    props.onChange && props.onChange(e)
  }



  return <AtTabBar
    fixed
    tabList={[
      { title: '明细', iconType: 'bullet-list'},
      { title: '统计', iconType: 'analytics'},
      { title: '添加', iconType: 'add'},
      { title: '账户', iconType: 'credit-card'},
      { title: '设置', iconType: 'settings'},
    ]}
    selectedColor="#58c5fb"
    fontSize={12}
    current={current}
    onClick={onTabClick}
  />
}
