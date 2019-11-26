import "@tarojs/async-await";
import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import Index from "./pages/home";

import configStore from "./store";

import "./app.scss";
import './iconfont/iconfont.css'
import { addDateUtil } from './utils/index';


addDateUtil()


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore();




export class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  componentDidMount() {}
  usingComponents: {}
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/add-bill/index',
      'pages/add-bill-fake/index',
      'pages/index/index',
      'pages/statistics/index',
      'pages/account/index',
      'pages/setting/index',


    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#6190E8",
      navigationBarTitleText: "Bill",
      navigationBarTextStyle: "white",
    },
  tabBar: {
    custom: true,
    color: '#666',
    selectedColor: '#6190E8',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '明细',
        iconPath: './asset/detail.png',
        selectedIconPath: './asset/detail_selected.png'
      },
      {
        pagePath: 'pages/statistics/index',
        text: '统计',
        iconPath:'./asset/chart.png',
        selectedIconPath: './asset/chart_selected.png'
      },
      {
        pagePath: 'pages/add-bill-fake/index',
        iconPath: './asset/add_selected.png',
        selectedIconPath: './asset/add_selected.png',
        text: '添加',
      },
      {
        pagePath: 'pages/account/index',
        text: '账户',
        iconPath: './asset/account.png',
        selectedIconPath: './asset/account_selected.png'
      },
      {
        pagePath: 'pages/setting/index',
        text: '设置',
        iconPath: './asset/setting.png',
        selectedIconPath: './asset/setting_selected.png'
      }
    ],

  }
  };

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}




Taro.render(<App />, document.getElementById("app"));
