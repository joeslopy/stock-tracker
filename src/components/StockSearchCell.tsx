import { Link } from "expo-router";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";

export interface StockSearchCellProps {
  ticker: string;
  name: string;
  exchange: string;
  onPress(): void;
}

export function StockSearchCell({
  ticker,
  name,
  exchange,
  onPress,
}: StockSearchCellProps) {
  const width = Dimensions.get("window").width;

  return (
    //<Link href="/IndividualStockScreen" asChild>
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
    >
      <View
        style={{
          borderColor: "transparent",
          borderBottomColor: "red",
          borderWidth: 1,
          marginLeft: 16,
        }}
      ></View>
      <View
        style={{
          width: width,
          flexDirection: "row",
          display: "flex",
          padding: 16,
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 24 }}>{ticker}</Text>
          <Text>{name}</Text>
        </View>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <Text style={{ textAlign: "right" }}>{exchange}</Text>
        </View>
      </View>
    </TouchableOpacity>
    //</Link>
  );
}
