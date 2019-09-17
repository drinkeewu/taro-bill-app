import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { CSSProperties, FunctionComponent } from "react";


type Padding = [
  (string|undefined)?,
  (string|undefined)?,
  (string|undefined)?,
  (string|undefined)?
]
type PaddingObject = {
  top?:string|undefined,
  right?:string|undefined,
  bottom?:string|undefined,
  left?:string|undefined,
}
const paddingFunc = ([top, right, bottom, left]: Padding = []): PaddingObject => {
  if (right === undefined && bottom === undefined && left === undefined) {
    left = right = bottom = top;
  } else if(bottom === undefined && left === undefined) {
    bottom = top;
    left = right;
  }

  return {
    top,
    right,
    bottom,
    left
  };
};

type Props = {
  align?: string;
  justify?: string;
  direction?: string;
  padding?: Padding;
  children?: any;
  style?:CSSProperties,
  [propName: string]: any
};

const Flex = (props: Props) => {
  const { align, justify, direction, padding, style, className } = props;

  const STYLE = {
    display: "flex",
    alignItems: align || "unset",
    justifyContent: justify || "start",
    flexDirection: direction || "flex-start",
    paddingLeft: paddingFunc(padding).left || "0",
    paddingRight: paddingFunc(padding).right || "0",
    paddingTop: paddingFunc(padding).top || "0",
    paddingBottom: paddingFunc(padding).bottom || "0",
    ...style
  } as CSSProperties;

  return <View style={STYLE} className={className}>{props.children}</View>;
};

export default Flex
