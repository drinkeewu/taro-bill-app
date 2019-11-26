import Taro, { useState, useDidShow } from "@tarojs/taro";
import { CoverView, CoverImage } from "@tarojs/components";
import "./custom-tab-bar.scss";

function CustomTabBar() {
  const [selected, setSelected] = useState(0);
  const [state, setState] = useState({
    color: "#666",
    selectedColor: "#6190E8",
    list: [
      {
        pagePath: "/pages/home/index",
        text: "明细",
        iconPath: "../asset/detail.png",
        selectedIconPath: "../asset/detail_selected.png"
      },
      {
        pagePath: "/pages/statistics/index",
        text: "统计",
        iconPath: "../asset/chart.png",
        selectedIconPath: "../asset/chart_selected.png"
      },
      {
        pagePath: '/pages/add-bill/index',
        iconPath: '../asset/add_selected.png',
        selectedIconPath: '../asset/add_selected.png',
        text: '记账',
      },
      {
        pagePath: "/pages/account/index",
        text: "账户",
        iconPath: "../asset/account.png",
        selectedIconPath: "../asset/account_selected.png"
      },
      {
        pagePath: "/pages/setting/index",
        text: "设置",
        iconPath: "../asset/setting.png",
        selectedIconPath: "../asset/setting_selected.png"
      }
    ]
  });

  const switchTab = (item, index) => {
    const url = item.pagePath;
    index !== 2
    ? Taro.switchTab({
      url
    })
    : Taro.navigateTo({
      url
    });
  };

  const jumpToAdd = () => {
    Taro.navigateTo({ url: "/pages/add-bill/index" });
  };





  return (
    <CoverView className="tab-bar">
      <CoverView className="tab-bar-wrap">
        {state.list.map((item, index) => {
          return (
            <CoverView
              className="tab-bar-wrap-item"
              onClick={() => switchTab(item, index)}
              data-path={item.pagePath}
              key={item.text}
            >
              <CoverImage
                className="tab-bar-wrap-item-icon"
                src={selected === index
                  ? item.selectedIconPath
                  : item.iconPath
                }
              />
              <CoverView
                className={
                  selected === index
                  ? "tab-bar-wrap-item-btn active"
                  : "tab-bar-wrap-item-btn"}
              >
                {item.text}
              </CoverView>
            </CoverView>
          );
        })}
      </CoverView>
    </CoverView>
  );
};
export default CustomTabBar;
