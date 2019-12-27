import Taro, { useState } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Banner from '@/components/banner';
import Flex from '@/components/flex';
import { AtAvatar } from 'taro-ui';
import './bill-detail.scss'


export default function () {

  const FORM_ITEMS = [
    {label: '类型', prop: 'billType'},
    {label: '金额', prop: 'amount'},
    {label: '日期', prop: 'date'},
    {label: '备注', prop: 'remark'},
  ]

  const [data, setData] = useState({
    billType:'',
    amount: '',
    date:'',
    remark: ''
  })

  return (
    <View className='bill-detail-page'>
      <Banner
        fixed={false}
      >
        <Flex
          direction='column'
          justify='center'
          align='center'
        >
          <AtAvatar circle />
          <Text className='bill-type-name'>类别</Text>
        </Flex>
      </Banner>
      <View className='bill-detail-page__content'>
        {
          FORM_ITEMS.map(item =>
            <View
              className='row'
              key={item.prop}
            >
              <Text>
                {item.label}: {data[item.prop]}
              </Text>
            </View>
          )
        }
      </View>

      <View className='footer'>
        <Flex>
          <Text>
            编辑
          </Text>
          <Text>
            删除
          </Text>
        </Flex>
      </View>
    </View>
  )
}
