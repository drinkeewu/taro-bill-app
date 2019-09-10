import Taro,{useState}from '@tarojs/taro';
import { AtTabBar } from 'taro-ui'

type Props = {
  onChange? : (e:number) => void
}

export default (props: Props) => {

  const [activeTab, setActveTab] = useState(0)

  const routeMap = {
    0 : '/pages/home/index',
  }

  function onTabClick(e:number) {
    setActveTab(e)
    props.onChange && props.onChange(e)
    navigate(routeMap[e])
  }

  function navigate(url:string) {
    url && Taro.navigateTo({
      url
    })
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
    current={activeTab}
    onClick={onTabClick}
  />
}
