import Taro from "@tarojs/taro";

import { View, Text } from "@tarojs/components";
import Flex from "@/components/flex";

export default props => {
  return (
    <View className="home-banner">
      <Flex justify="center">
        <Text className="home-title">APP</Text>
      </Flex>
      <Flex justify="space-around">
        <Flex justify="space-between" direction="column">
          <Text>2019年</Text>
          <Text>08月</Text>
        </Flex>
        <Flex justify="space-between" direction="column">
          <Text>收入</Text>
          <Text>8880.00</Text>
        </Flex>
        <Flex justify="space-between" direction="column">
          <Text>支出</Text>
          <Text>00.00</Text>
        </Flex>
      </Flex>
    </View>
  );
};
