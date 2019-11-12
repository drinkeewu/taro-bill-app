import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "taro-ui/dist/style/components/flex.scss";
import CategoryIcon from "@/components/category-icon/index";

type CostProps = {
  onSelectChange: (is: boolean) => void
  activeTab: number
}

export default ({
  onSelectChange,
  activeTab
}:CostProps) => {
  const [categoryList] = useState([
    {
      categoryId: 1,
      name: "餐饮"
    },
    {
      categoryId: 2,
      name: "交通"
    }
  ]);
  const [selectedId, setSelectedId] = useState(0);



  function onCategoryClick(id: number) {
    setSelectedId(id)
  }

  useEffect(() => {
    selectedId && onSelectChange(true)

  }, [onSelectChange, selectedId])

  useEffect(() => {
    if(activeTab !== 0) {
      setSelectedId(0)
    }
  }, [activeTab])



  return (
    <View>
      <View className="at-row at-row--wrap">
        {categoryList.map(item => {
          return (
            <View key={item.categoryId} className="at-col at-col-3">
              <CategoryIcon
                selected={item.categoryId === selectedId}
                text={item.name}
                icon="bell"
                onClick={() => onCategoryClick(item.categoryId)}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};
