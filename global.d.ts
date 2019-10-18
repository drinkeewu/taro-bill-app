
declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";



interface Taro {
   $navBarHeight: number;
}

type StringOrNumber = string | number;

interface Date {
  /**
   * 重写期格式化方法
   *
   * @memberof Date
   */
  Format: (fmt: string) => string
}

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt';
    [key: string]: any;
  }
}


