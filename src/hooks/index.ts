import { useState } from "@tarojs/taro"



/**
 * 输入框输入hooks
 *
 * @param {(string | undefined)} initValue
 * @returns
 */
export const useInputValue = (initValue: string | undefined) => {
  const [value, setValue] = useState(initValue)
  function handleChange(e:any){
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}
