import Taro from "@tarojs/taro";
import { ScrollView, View, Text } from "@tarojs/components";
import './scroll-tabs.scss'
import Flex from "../flex";

type ScrollTabsProps = {
  [propName: string]: any;
};

export default function ScrollTabs(props: ScrollTabsProps) {
  return (
    <ScrollView scrollX className='comp-scroll-tabs'>
      <Flex style={{
        overflowX :'scroll',
        whiteSpace: 'nowrap'
      }}
      >
        {[1, 2, 3, 3, 5, 6].map(item => (
          <View key={`item${item}`} style={{
            display: 'inline-block',
            width: '33.33%'
          }}
          >
            <Text>1</Text>
          </View>
        ))}
      </Flex>
    </ScrollView>
  );
}
