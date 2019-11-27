import Taro from "@tarojs/taro";

import { View, Text } from "@tarojs/components";
import Flex from "@/components/flex";
import './banner.scss'


export default props => {
  const marginBottomStyle = {
    marginBottom: '10px'
  }
  return (
    <View className='home-banner' style={{}}>
      <Flex justify='space-between' padding={['10px', '20px']} >
        <Flex justify='space-between' direction='column'>
          <Text style={marginBottomStyle}>2019年</Text>
          <Text>08月</Text>
        </Flex>
        <Flex justify='space-between' direction='column'>
          <Text style={marginBottomStyle}>收入</Text>
          <Text>8880.00</Text>
        </Flex>
        <Flex justify='space-between' direction='column'>
          <Text style={marginBottomStyle}>支出</Text>
          <Text>00.00</Text>
        </Flex>
      </Flex>
    </View>
  );
};
