import Taro, { useDidShow } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Banner from '@/components/banner';
import Flex from '@/components/flex';
import { AtAvatar, AtTabs, AtTabsPane } from 'taro-ui';

// eslint-disable-next-line import/no-commonjs
const avatarURL = require('@/asset/img/avatar.jpeg')


export default function Setting(props)  {
  useDidShow(() => {
    this.$scope.getTabBar
      && typeof this.$scope.getTabBar === 'function'
      && this.$scope.getTabBar().setData({
        selected: 4
      })
  })
  return (
    <View>
      <Banner>
        <Flex
          direction='column'
          justify='center'
          align='center'
        >
          <AtAvatar
            circle
            size='large'
            image={avatarURL}
          />
          <Text>
            Drinkee
          </Text>
        </Flex>

        <View className='at-row' style={{
          paddingTop: '30px',
          paddingBottom: '10px'
        }}
        >
          <View className='at-col'>
            <Flex
              direction='column'
              justify='center'
              align='center'
            >
              <Text>
                  14
              </Text>
              <Text>
                  连续打卡
              </Text>
            </Flex>
          </View>
          <View className='at-col'>
            <Flex
              direction='column'
              justify='center'
              align='center'
            >
              <Text>
                14
              </Text>
              <Text>
                总记账天数
              </Text>
            </Flex>
          </View>
          <View className='at-col'>
            <Flex
              direction='column'
              justify='center'
              align='center'
            >
              <Text>
                10000
              </Text>
              <Text>
                总记账笔数
              </Text>
            </Flex></View>
        </View>
      </Banner>
    </View>
  )
}
