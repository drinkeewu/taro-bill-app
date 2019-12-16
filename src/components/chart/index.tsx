import Taro, {  useState, useCallback, useEffect, useDidShow } from '@tarojs/taro'
import { View } from '@tarojs/components'

import * as echarts from '../ec-canvas/echarts'

import './echarts.scss'

import waldenTheme from './theme/walden.json'

echarts.registerTheme('walden', waldenTheme)


type ChartProps = {
  option: object,
}

function Echarts(props: ChartProps) {
  const { option } = props

  const initChart = useCallback(
    (canvas, width, height) => {
      const chart = echarts.init(canvas, 'walden', {
        width: width,
        height: height
      })
      canvas.setChart(chart)
      chart.setOption(option, true)
      return chart
    },
    [option],
  )

  const [ec, setEc] = useState({
    onInit: initChart
  })

  let chartRef = null;

  const refChart = node => (chartRef = node)

  useDidShow(() => {
    console.log(chartRef)
  })

  useEffect(() => {
    initChart
  }, [initChart])

  return (
    <View className='echarts'>
      <ec-canvas
        id='mychart-dom-area'
        canvas-id='mychart-area'
        ec={ec}
        ref={refChart}
      ></ec-canvas>
    </View>
  )
}

Echarts.config = {
  usingComponents: {
    'ec-canvas': '../ec-canvas/ec-canvas' // 书写第三方组件的相对路径
  }
}

export default Echarts
