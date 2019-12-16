import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Flex from "../flex";
import './section-wrapper.scss'
import { CSSProperties } from 'react';

type SectionWrapper = {
  leftTitle?: string;
  rightTitle?: string;
  children?: any;
  border?: boolean,
  style?: CSSProperties
};

export default function SectionWrapper(props: SectionWrapper) {
  const {
    border = true
  } = props
  return (
    <View
      className={`section-wrapper ${
        border ? 'border' : ''
      }`}
      style={props.style}

    >
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
