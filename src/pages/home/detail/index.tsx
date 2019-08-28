import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Flex from "@/components/flex";

export default props => {
  return (
    <View>
      <Flex justify="space-between" paddingX="20px">
        <Text>08月05日 星期一</Text>
        <Text>支出: 888</Text>
      </Flex>
    </View>
  );
};
