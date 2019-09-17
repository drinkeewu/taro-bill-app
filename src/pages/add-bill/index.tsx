import Taro, { useState, useCallback, useEffect } from "@tarojs/taro";
import Expend from "@/pages/bill-operate/expend/index";
import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import Render from "@/components/render";
import InputPanel from "@/components/input-panel";

export default () => {
  const tabList = [{ title: "支出" }, { title: "转账" }, { title: "收入" }];

  const [activeTab, setActiveTab] = useState(0);
  const [inputPanelIsOpen, setInputPanelIsOpen] = useState(false);

  /**
   *
   * 标签栏切换回调函数
   * @param {number} val
   */
  function onTabClick(val: number) {
    setActiveTab(val);
    setInputPanelIsOpen(false)
  }

  const onSelectCategoryCallback = useCallback((val: boolean) => {
    setInputPanelIsOpen(val);
  }, []);

  useEffect(() => {
    console.log("add bill effect");
    return () => {};
  }, []);

  return (
    <View className="full-height">
      <AtTabs
        current={activeTab}
        tabList={tabList}
        onClick={onTabClick}
      >
        <AtTabsPane current={activeTab} index={0}>
            <Expend onSelectChange={onSelectCategoryCallback} />
        </AtTabsPane>
      </AtTabs>
      <Render rif>
        <InputPanel />
      </Render>
    </View>
  );
};
