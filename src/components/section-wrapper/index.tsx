import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Flex from "../flex";
import './section-wrapper.scss'

type SectionWrapper = {
  leftTitle?: string;
  rightTitle?: string;
  children?: any;
};

export default function SectionWrapper(props: SectionWrapper) {
  return (
    <View className='section-wrapper'>
      <Flex
        justify='space-between'
        padding={["5px", "20px"]}
      >
        <Text>{props.leftTitle}</Text>
        <Text>{props.rightTitle}</Text>
      </Flex>
      <View>{props.children}</View>
    </View>
  );
}
