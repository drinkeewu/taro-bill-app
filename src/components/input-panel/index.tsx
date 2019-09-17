import Taro, { useReducer, useEffect } from '@tarojs/taro';
import { View, Label, Input, Text } from '@tarojs/components';
import "taro-ui/dist/style/components/flex.scss";
import './input-panel.scss'
import Flex from '../flex';
import { useInputValue } from '../../hooks/index';



const reducer = (state, {
  type, payload
}) => {
  switch (type) {
    case 'ADD':
      return state

    default:
      return state
  }
}

const layout = [
  [{
    text: '7',
    type: 'number',
    value: 7
  },{
    text: '8',
    type: 'number',
    value: 8,
  },{
    text: '8',
    type: 'number',
    value: 9,
  },{
    text: () => new Date().getDate(),
    type: 'date',
    value:() => new Date().getDate()
  }]
]

const LAYOUT = [
  ['7' ,'8', '9', 'date'],
  ['4', '5', '6', 'plus'],
  ['1', '2', '3', 'minus'],
  ['.', '0', 'delete', 'complete']
]



const InputPanel = props => {

  const {
    value: remark,
    onChange: onRemarkChange,
  } = useInputValue('')

  const [state, dispatch] = useReducer(reducer, {
    amount: 0
  })


  useEffect(() => {
    console.log(remark)
  }, [remark])
  return (
    <View className="comp-input-panel">
        {/* 输入框 */}
        <View className="comp-input-panel__line">
          <Flex align="center">
            <Label>
              备注:
            </Label>
            <Input value={remark} onInput={onRemarkChange} />
          </Flex>
          <Text >
            {state.amount}
          </Text>
        </View>
        {/* 数字键盘 */}
        <View className="at-row at-row--wrap">
          {
            LAYOUT[0].map((item, index) =>
            <View className="at-col at-col-3 comp-input-panel__item"
              key={index}
            >
              <Text>{item}</Text>
            </View>
          )}
          {
            LAYOUT[1].map((item, index) =>
            <View className="at-col at-col-3 comp-input-panel__item"
              key={index}
            >
              <Text>{item}</Text>
            </View>
          )}
          {
            LAYOUT[2].map((item, index) =>
            <View className="at-col at-col-3 comp-input-panel__item"
              key={index}
            >
              <Text>{item}</Text>
            </View>
          )}
          {
            LAYOUT[3].map((item, index) =>
            <View className="at-col at-col-3 comp-input-panel__item"
              key={index}
            >
              <Text>{item}</Text>
            </View>
          )}
        </View>
    </View>
  )
}

export default InputPanel
