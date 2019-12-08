import Taro, { useDidShow } from "@tarojs/taro";
import { AtButton, AtIcon } from "taro-ui";
import Flex from "@/components/flex";
import Cell from "@/components/cell";
import { View, Text, ScrollView } from "@tarojs/components";
import Banner from "../../components/banner/index";
import "./account.scss";
import SectionWrapper from '../../components/section-wrapper/index';


export default function Account(props) {
  useDidShow(() => {
    this.$scope.getTabBar &&
      typeof this.$scope.getTabBar === "function" &&
      this.$scope.getTabBar().setData({
      	selected: 3
      });
  });

  return (
    <View className='account-manage'>
      <Banner className='banner'>
        <Flex justify='center'>
          <Text className='banner-title'>净资产</Text>
        </Flex>
        <Flex justify='center'>
          <Text className='banner-asset'>8888.00</Text>
        </Flex>

        <Flex
          justify='space-between'
          style={{
            marginTop: '10px'
          }}
        >
          <View className='sider left'>
            <Flex justify='center'>
              <Text className='white-text'>资产</Text>
            </Flex>
            <Flex justify='center'>
              <Text className='white-text'>8888.00</Text>
            </Flex>
          </View>

          <View className='sider'>
            <Flex justify='center'>
              <Text className='white-text'>负债</Text>
            </Flex>
            <Flex justify='center'>
              <Text className='white-text'>0.00</Text>
            </Flex>
          </View>
        </Flex>
      </Banner>

      <ScrollView
        className='account-list'
        scrollY
        enableBackToTop
      >
        {
          //TODO 账户列表
          Array.from({length: 12}, (v, i) => i+1).map(item =>
            <SectionWrapper
              key={`cell${item}`}
              leftTitle='现金'
              rightTitle='200'
            >
              <Cell name='交通' icon='zhanghu' >
              </Cell>
            </SectionWrapper>
          )
        }
        <Flex
          justify='center'
          align='center'
          padding={['20px', '0','30px', '0']}
        >
          <AtButton
            type='primary'
            full
          >
            <AtIcon
              value='add'
              size='12'
              color='#fff'
              customStyle={{
                marginRight: '10px'
              }}
              />
                添加账户
          </AtButton>
        </Flex>
      </ScrollView>

    </View>
  );
}
