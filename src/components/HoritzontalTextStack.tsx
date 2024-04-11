import { PropsWithChildren } from "react";
import { View, Text } from "react-native";

export interface HStackProps {
  title1: string;
  title2: string;
  textValue1: string;
  textValue2: string;
}

export function HStack({
  title1,
  title2,
  textValue1,
  textValue2,
}: HStackProps) {
  return (
    <View style={{ display: "flex", flexDirection: "row", padding: 8 }}>
      <View style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <Text style={{ textAlign: "left" }}>{title1}</Text>
        <View style={{ flex: 1 }}></View>
        <Text style={{ textAlign: "right", paddingRight: 8 }}>
          {textValue1}
        </Text>
      </View>
      <View style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <Text style={{ textAlign: "left", paddingLeft: 8 }}>{title2}</Text>
        <View style={{ flex: 1 }}></View>
        <Text style={{ textAlign: "right" }}>{textValue2}</Text>
      </View>
    </View>
  );
}
