import Taro , { useState } from '@tarojs/taro';
import Expend from '@/pages/bill-operate/expend/index'
import { View, Text } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';

export default () => {
  const tabList = [
    {title : '支出'},
    {title : '转账'},
    {title : '收入'},
  ]

  const [activeTab, setActiveTab] = useState(0)
  const [inputPanelIsOpen, setInputPanelIsOpen] = useState(false)

  function onTabClick(val: number) {
    setActiveTab(val)
  }
  function onSelectChange(val: boolean) {
    setInputPanelIsOpen(val)
  }

  return (
    <View className="full-height">
      <AtTabs
        current={activeTab}
        tabList={tabList}
        onClick={onTabClick}
      >
        <AtTabsPane current={activeTab} index={0}>
          <View>
            <Expend onSelectChange={onSelectChange} />
          </View>
        </AtTabsPane>
      </AtTabs>

    </View>
  )
}
