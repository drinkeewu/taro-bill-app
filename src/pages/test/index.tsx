import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

enum Days {
  Sun = 0,
  Mon,
};

class Test extends Component {

  render() {

    return (
      <View>
        <Text>
          test page
        </Text>
      </View>
    )
  }
}

export default Test
