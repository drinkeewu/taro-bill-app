import "@tarojs/async-await";
import "taro-ui/dist/style/index.scss";
import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import Index from "./pages/home/home";

import configStore from "./store";

import "./app.scss";



// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore();

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  componentDidMount() {}
  config: Config = {
    pages: [
      "pages/home/home", //明细页面
      "pages/index/index",
      'pages/add-bill/index',
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#58c5fb",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
    },
    // tabBar: {
    //   color: '#666',
    //   selectedColor: '#58c5fb',
    //   list: [
    //     {
    //       pagePath: 'pages/home/home',
    //       text: '明细'
    //     },
    //     {
    //       pagePath: 'pages/statistics/index',
    //       text: '统计'
    //     },
    //     {
    //       pagePath: 'pages/add-bill/index',
    //       text: '添加'
    //     },
    //     {
    //       pagePath: 'pages/account/index',
    //       text: '账户'
    //     },
    //     {
    //       pagePath: 'pages/setting/index',
    //       text: '设置'
    //     }
    //   ]
    // }
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

Taro.getSystemInfo({}).then(config => {
  console.log('sysinfo', config)
})


Taro.render(<App />, document.getElementById("app"));
