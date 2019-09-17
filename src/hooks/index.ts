import { useState } from "@tarojs/taro"



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
