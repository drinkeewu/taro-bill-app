import Taro from "@tarojs/taro";
import { AtIcon } from "taro-ui";
import { View, Text } from "@tarojs/components";
import Flex from "../flex";
import './category-icon.scss'


type IconProps = {
  icon: string,
  text: string,
  selected: boolean,
  onClick?: () => void
}

const CategoryIcon =  ({
  icon,
  text,
  selected,
  onClick
}: IconProps) => {
  const logoStyle = {
      backgroundColor: selected ? '#6190E8' : '#f5f5f5f'
  }
  return (
    <View className="category-icon" onClick={onClick}>
      <Flex
        justify="center"
        padding={["15px", '0']}
        direction="column"
        align="center"
      >
        <View className="category-icon__logo" style={logoStyle}>
          <AtIcon
            value={icon}
            size="30"
            color={selected ? '#fff' : '#999'}
          />
        </View>
        <Text className="category-icon__text">{text}</Text>
      </Flex>
    </View>
  );
};

export default CategoryIcon;
