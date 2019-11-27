import { toString } from '@/shared/util'
import Taro, { useState, useMemo } from '@tarojs/taro';
import { View, Label, Input, Text, Picker } from '@tarojs/components';
import "taro-ui/dist/style/components/flex.scss";
import './input-panel.scss'
import Flex from '../flex';
import { useInputValue } from '../../hooks/index';

const nowDate = new Date().Format('yyyy-MM-dd')

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


  const [state, setState] = useState({
    displayString: '0',
  })
  const [date, setDate] = useState(new Date().Format('yyyy-MM-dd'))

  /** 是否显示等于号 */
  const canCalc = useMemo(() => {
    const { displayString } = state;
    const isAdd = displayString.includes('+')
    const calcItems = isAdd
      ? displayString.split('+').map(i => +i)
      : displayString.split('-').map(i => +i)
    // eslint-disable-next-line no-restricted-globals
    return !isNaN(calcItems[0]) && !isNaN(calcItems[1])
  }, [state])

  /** 字符串中是否已经含有运算符 */
  const hadCalcString = useMemo(() => {
    const { displayString } = state;
    return displayString.includes('-')
      || displayString.includes('+')
  }, [state])


  /** 字符串中含有的运算符号 */
  const containCalcStr = useMemo(() => {
    const { displayString } = state;
    if(hadCalcString) {
      const isAdd = displayString.includes('+')
      return isAdd ? '+' : '-'
    }
    return ' '

  }, [hadCalcString, state])

  /** 计算队列 */
  const calcItems = useMemo(() => {
    return state.displayString.split(
      containCalcStr
    ).map(i => +i)
  }, [containCalcStr, state.displayString])



  /**
   * 传入字符串是否是两位小数
   *
   * @param {string} string
   * @returns
   */
  function hasTwoDecimal(string:string) {
    const hasDot = string.includes('.')
    if(hasDot) {
      const sides = string.split('.')
      return !!(sides[1] && sides[1].length === 2)
    }
    return false
  }

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
        handleOperate(`${value}`)
        break;
      case 'COMPLETE':
        handleComplete()
        break;
      default:
        break;
    }
  }

  /**
   * 运算符操作
   *
   * @param {string} type 运算符类型
   * @param {string} value 运算符字符串值
   */
  function handleOperate(
    value: string
  ):void {
    const { displayString } = state;

    setState({
      ...state,
      displayString: hadCalcString
        ? calcString(displayString) + toString(value)
        : displayString + toString(value)
    })
  }

  /**
   * 计算字符串结果
   *
   * @param {string} string
   */
  function calcString(string: string) {
    const isAdd = string.includes('+');
    /** 需要计算的队列 */

    const total = isAdd
      ? calcItems.reduce((i ,v) => i+v)
      : (calcItems[0] - calcItems[1])
    return toString(total)
  }

  /**
   * 输入数字
   *
   * @param {StringOrNumber} value 字符串的值
   */
  function handleTyping(
    value:StringOrNumber
  ) {
    const isDot = value === '.'
    const { displayString } = state;
    const stopUpdate =
      //限制每个运算数不超过8位, 不超过过两位小数
      (!hadCalcString
        ? toString(calcItems[0]).length === 8 || hasTwoDecimal(`${calcItems[0]}`)
        : toString(calcItems[1]).length === 8 || hasTwoDecimal(`${calcItems[1]}`)
      )
      || displayString.length === 17

    !stopUpdate && setState({
      ...state,
      displayString: displayString === '0' && !isDot
        ? toString(value)
        : displayString + toString(value)
    })
  }

  /**
   * 退格操作
   *
   */
  function handleDelete(){
    const { displayString } = state;
    const isLastString = displayString.length === 1
    setState({
      ...state,
      displayString: isLastString
        ? '0'
        : displayString.slice(0, -1)
    })
  }

  /**
   * 点击完成或者 "="
   *
   */
  function handleComplete() {
    const { displayString } = state
    canCalc
    ?  setState({
      ...state,
      displayString: calcString(displayString)
    })
    : props.onComplete(state.displayString)
  }

  function onDateChange(e:any) {
    setDate(e.detail.value)
  }



  return (
    <View className='comp-input-panel'>

        {/* 输入框 */}
        <View className='comp-input-panel__line'>
          <Flex align='center'>
            <Label style={{flexShrink: 0}}>
              备注:
            </Label>
            <Input
              className='remark-input'
              value={remark}
              onInput={onRemarkChange}
            />
          </Flex>
          <Text className='amount-text'>
            {state.displayString}
          </Text>
        </View>

        {/* 数字键盘 */}
        {
          LAYOUT.map((row, rowIndex) =>
            <View
              className='at-row at-row--wrap'
              key={`row-${rowIndex}`}
            >
            {
                row.map((col, colIndex) => {
                  return (
                      <View
                        className={`at-col at-col-3 comp-input-panel__item ${
                          col.type === 'COMPLETE'
                            ? 'complete-button'
                            :''}`
                        }
                        key={`r-${rowIndex}-c-${colIndex}`}
                        onClick={() => onPanelItemClick(col)}

                      >
                        {col.type === 'COMPLETE' && canCalc
                            ? '='
                            : col.type === 'DATE'
                              ? <Picker
                                value={date}
                                mode='date'
                                onChange={onDateChange}
                              >
                                {date}
                              </Picker>
                              : col.text
                        }
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
