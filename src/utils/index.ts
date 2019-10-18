/*
 * @Author: Drinkee
 * @Date: 2019-09-30 22:46:37
 * @Last Modified by: Drinkee
 * @Last Modified time: 2019-09-30 22:51:44
 */

 /**
  * 添加日期转字符串格式化方法
  */
export const addDateUtil = function () :void {
  Date.prototype.Format = function (fmt: string):string {
    const o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (`${this.getFullYear()}`).substr(4 - RegExp.$1.length));
    for (const k in o) { if (new RegExp(`(${k})`).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length))); }
    return fmt;
  };
}
