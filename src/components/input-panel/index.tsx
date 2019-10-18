import Taro, { useEffect, useState } from '@tarojs/taro';
import { View, Label, Input, Text } from '@tarojs/components';
import "taro-ui/dist/style/components/flex.scss";
import './input-panel.scss'
import Flex from '../flex';
import { useInputValue } from '../../hooks/index';




const nowDate = new Date().Format('yyyy-MM-dd')

enum OperateType  {
  ADD = '+',
  MINUS = '-'
}

/**
 * 数字键盘布局数据
 */
const LAYOUT = [
  [
    {text: '7', type: 'TYPING', value: 7},
    {text: '8', type: 'TYPING', value: 8},
    {text: '9', type: 'TYPING', value: 9,},
    {
      text:nowDate,
      type: 'DATE',
      value:nowDate
    }
  ],

  [
    {text: '4', type: 'TYPING', value: 4},
    {text: '5', type: 'TYPING', value: 5},
    {text: '6', type: 'TYPING', value: 6},
    {text: '+', type: 'ADD', value: '+'},
  ],

  [
    {text: '1', type: 'TYPING', value: 1},
    {text: '2', type: 'TYPING', value: 2},
    {text: '3', type: 'TYPING', value: 3},
    {text: '-', type: 'MINUS', value: '-'},
  ],

  [
    {text: '.', type: 'TYPING', value: '.'},
    {text: '0', type: 'TYPING', value: 0},
    {text: 'Del', type: 'DELETE', value: 'Del'},
    {text: '完成', type: 'COMPLETE', value: 'complete' },
  ],

]



const InputPanel = props => {

  const {
    value: remark,
    onChange: onRemarkChange,
  } = useInputValue('')



  const [state, setstate] = useState({
    string: '0'
  })


  /**
   * 键盘点击回调函数
   */
  function onPanelItemClick({
    value,
    type,
  }: {
    value: StringOrNumber,
    type: string
  }):void {
    switch (type) {
      case 'TYPING':
          handleTyping(value)
        break;

      case 'DELETE':
          handleDelete()
        break

      case 'MINUS':
      case 'ADD':
      case 'CALC':
          handleOperate(type, `${value}`)
        break;

      default:
        break;
    }
  }
  /**
   * 加减法运算
   */
  function handleOperate(
    type: string,
    typeValue: string
  ):void {

  }

  function handleTyping(
    value:StringOrNumber
  ) {
    // setAmountStr(amountStr === '0'
    //   ? '' + value
    //   : amountStr + '' + value
    // )
  }

  function handleDelete(){
    // setAmountStr(
    //   amountStr !== '0'
    //   ? amountStr.substring(0, amountStr.length - 1)
    //   : '0')
  }











  return (
    <View className="comp-input-panel">

        {/* 输入框 */}
        <View className="comp-input-panel__line">
          <Flex align="center">
            <Label>
              备注:
            </Label>
            <Input
              value={remark}
              onInput={onRemarkChange}
            />
          </Flex>
          <Text className="amount-text">
            {}
          </Text>
        </View>

        {/* 数字键盘 */}
        {
          LAYOUT.map((row, rowIndex) =>
            <View
              className="at-row at-row--wrap"
              key={`row-${rowIndex}`}
            >
            {
                row.map((col, colIndex) => {
                  return (
                      <View
                        className={`at-col at-col-3 comp-input-panel__item ${
                          col.type === 'COMPLETE' ? 'complete-button':''}`
                        }
                        key={`r-${rowIndex}-c-${colIndex}`}
                        onClick={() => onPanelItemClick(col)}

                      >
                        {col.text}
                      </View>
                    )
                  })
                }
            </View>
          )
        }
    </View>
  )
}

export default InputPanel
