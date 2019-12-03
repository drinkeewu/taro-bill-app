import Taro, { useDidShow } from "@tarojs/taro";
import Flex from "@/components/flex";
import { View, Text } from "@tarojs/components";
import Banner from "../../components/banner/index";
import "./account.scss";

export default function Account(props) {
  useDidShow(() => {
    this.$scope.getTabBar &&
      typeof this.$scope.getTabBar === "function" &&
      this.$scope.getTabBar().setData({
      	selected: 3
      });
  });

  return (
    <View>
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


    </View>
  );
}
