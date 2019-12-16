import Taro, { useDidShow, useState, useRef } from '@tarojs/taro';

import { View } from '@tarojs/components';
import * as echarts from '@/lib/echarts'



function LineChart() {

  const [ec, setEc] = useState({lazyload: true})
  let chart = null

  const refChart = node => (chart = node)

  useDidShow(() => {
    console.log(ref)
  })


  return (
    <View>
      <ec-canvas
        ec={ec}
        id='line-chart'
        ref={refChart}
      />
    </View>
  )
}

LineChart.config = {
  usingComponents: {
    'ec-canvas': '/components/ec-canvas/ec-canvas.js'
  }
}




export default LineChart
