import { View } from "@tarojs/components";
import Router from "@/routes";
import Render from "@/components/render";
import InputPanel from "@/components/input-panel";
import { AtTabs, AtTabsPane } from "taro-ui";
import Taro, { useState, useCallback, useEffect } from "@tarojs/taro";
import Cost from "@/pages/bill-operate/cost/index";
import Income from '../bill-operate/income/index';
import Transfer from '../bill-operate/transfer/index';



export default () => {
  // Taro.hideTabBar()

  const tabList = [
    { title: "支出" },
    { title: "转账" },
    { title: "收入" }
  ];

  const [activeTab, setActiveTab] = useState(0)
  const [inputPanelIsOpen, setInputPanelIsOpen] = useState(false)

  /**
   *
   * 标签栏切换回调函数
   * @param {number} val
   */
  function onTabClick(val: number) {
    setActiveTab(val)
  }

  function onInputComplete(result:string) {
    //TODO 调取接口保存账单记录
    Router.to({
      name: 'home',
    })
  }


  const onSelectChange = useCallback(
    (val: boolean) => {
      setInputPanelIsOpen(val)
    },
    [],
  )



  useEffect(() => {
      setInputPanelIsOpen(false)
  }, [activeTab])


  return (
    <View className='full-height'>

      <AtTabs
        current={activeTab}
        tabList={tabList}
        onClick={onTabClick}
      >
        <AtTabsPane
          current={activeTab}
          index={0}
        >
            <Cost
              onSelectChange={onSelectChange}
              activeTab={activeTab}
            />
        </AtTabsPane>
        <AtTabsPane
          current={activeTab}
          index={1}
        >
            <Income />
        </AtTabsPane>
        <AtTabsPane
          current={activeTab}
          index={2}
        >
            <Transfer />
        </AtTabsPane>
      </AtTabs>
      <Render rif={inputPanelIsOpen}>
        <InputPanel onComplete={onInputComplete} />
      </Render>
    </View>
  );
};
